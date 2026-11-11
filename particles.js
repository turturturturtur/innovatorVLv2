(() => {
  "use strict";
  const canvas = document.getElementById("particle-canvas");
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0, currentX: 0, currentY: 0 };
  let width = 0;
  let height = 0;
  let radius = 0;
  let particles = [];
  let stars = [];
  let visible = true;
  let animationFrame = 0;
  let lastFrame = 0;
  let elapsed = 0;
  let lastTick = 0;
  let intro = null;
  const orbitFlights = Array.from({ length: 660 }, (_, i) => createFlight(i + 3000));

  // A repeatable point field keeps the composition stable on resize.
  function random(seed) {
    const n = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return n - Math.floor(n);
  }

  function smoothstep(start, end, value) {
    const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
    return t * t * (3 - 2 * t);
  }

  function createFlight(seed) {
    return {
      x: random(seed + 733),
      y: random(seed + 817),
      bend: (random(seed + 911) - .5) * .7,
      delay: .05 + random(seed + 1013) * .20,
      duration: .62 + random(seed + 1129) * .12,
      spark: seed % 7 === 0,
    };
  }

  function flightPosition(startX, startY, dx, dy, progress, bend) {
    const remaining = Math.pow(1 - progress, 3);
    const curve = Math.sin(progress * Math.PI) * remaining * bend;
    return {
      x: startX + dx * (1 - remaining) - dy * curve,
      y: startY + dy * (1 - remaining) + dx * curve,
    };
  }

  // Both the opening and the resting planet use these exact projected points.
  // Incoming points live in viewport space until they settle onto the hero canvas.
  function drawIncoming(flight, x, y, size, alpha, color) {
    if (!intro) return document.documentElement.classList.contains("intro-pending") ? 0 : 1;
    const progress = Math.max(0, Math.min(1, (intro.progress - flight.delay) / flight.duration));
    if (progress === 1) return 1;
    const settled = smoothstep(.84, 1, progress);
    const { context: layer, width: vw, height: vh, bounds } = intro;
    // Begin throughout the viewport, including its center, rather than offscreen.
    const startX = flight.x * vw;
    const startY = flight.y * vh;
    const dx = bounds.left + x - startX;
    const dy = bounds.top + y - startY;
    const head = flightPosition(startX, startY, dx, dy, progress, flight.bend);
    const tail = flightPosition(startX, startY, dx, dy, Math.max(0, progress - .018), flight.bend);
    const opacity = alpha * (1 - settled) * (.65 + .35 * smoothstep(0, .12, intro.progress));
    const speed = Math.min(1, Math.hypot(head.x - tail.x, head.y - tail.y) / 20);
    layer.beginPath();
    layer.moveTo(tail.x, tail.y);
    layer.lineTo(head.x, head.y);
    layer.lineWidth = size * .65;
    layer.strokeStyle = `rgba(${color},${opacity * speed * .48})`;
    layer.stroke();
    const headSize = size * (1 + speed * .55);
    layer.fillStyle = `rgba(${color},${Math.min(.95, opacity * 1.35)})`;
    layer.fillRect(head.x, head.y, headSize, headSize);
    if (flight.spark) {
      layer.fillStyle = `rgba(${color},${opacity * .08})`;
      layer.beginPath();
      layer.arc(head.x, head.y, headSize * 4, 0, Math.PI * 2);
      layer.fill();
    }
    return settled;
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mobile = window.innerWidth <= 560;
    radius = Math.min(width * (mobile ? .30 : .26), height * .33);
    const count = mobile ? 1050 : 2350;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    particles = Array.from({ length: count }, (_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const ring = Math.sqrt(1 - y * y);
      const angle = goldenAngle * i;
      const shell = .91 + random(i + 31) * .13;
      return {
        x: Math.cos(angle) * ring * shell,
        y: y * shell,
        z: Math.sin(angle) * ring * shell,
        size: .48 + random(i + 93) * 1.03,
        phase: random(i + 54) * Math.PI * 2,
        color: i % 4,
        flight: createFlight(i),
      };
    });
    stars = Array.from({ length: mobile ? 90 : 160 }, (_, i) => ({
      x: random(i + 523) * width,
      y: random(i + 621) * height,
      size: .3 + random(i + 836) * .7,
      opacity: .1 + random(i + 231) * .28,
      phase: random(i + 391) * 6,
    }));
    draw(elapsed);
  }

  function rotate(x, y, z, yaw, tilt) {
    const cosYaw = Math.cos(yaw);
    const sinYaw = Math.sin(yaw);
    const cosTilt = Math.cos(tilt);
    const sinTilt = Math.sin(tilt);
    const rx = x * cosYaw + z * sinYaw;
    const rz = z * cosYaw - x * sinYaw;
    return { x: rx, y: y * cosTilt - rz * sinTilt, z: y * sinTilt + rz * cosTilt };
  }

  function draw(time) {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    if (intro) {
      intro.bounds = canvas.getBoundingClientRect();
      intro.context.clearRect(0, 0, intro.width, intro.height);
    }
    const progress = intro ? intro.progress : document.documentElement.classList.contains("intro-pending") ? 0 : 1;
    const structure = smoothstep(.2, .94, progress);
    const mobile = window.innerWidth <= 560;
    const cx = width * (mobile ? .5 : .60) + pointer.currentX * 8;
    const cy = height * (mobile ? .50 : .47) + pointer.currentY * 6;
    const yaw = time * .085 + pointer.currentX * .18;
    const tilt = -.24 + pointer.currentY * .12;

    for (const star of stars) {
      const twinkle = .7 + .3 * Math.sin(time * .6 + star.phase);
      context.fillStyle = `rgba(168,166,223,${star.opacity * twinkle})`;
      context.fillRect(star.x, star.y, star.size, star.size);
    }

    // Soft nebula and a quiet, dark core beneath the point cloud.
    const glow = context.createRadialGradient(cx, cy, radius * .12, cx, cy, radius * 1.7);
    glow.addColorStop(0, "rgba(62,46,119,0.035)");
    glow.addColorStop(.45, "rgba(83,51,152,0.08)");
    glow.addColorStop(.7, "rgba(47,52,130,0.045)");
    glow.addColorStop(1, "rgba(47,52,130,0)");
    context.fillStyle = glow;
    context.globalAlpha = structure;
    context.fillRect(cx - radius * 1.7, cy - radius * 1.7, radius * 3.4, radius * 3.4);
    context.globalAlpha = 1;

    // Several inclined orbits form an extended blue/violet accretion field.
    for (let orbit = 0; orbit < 5; orbit++) {
      const orbitRadius = radius * (1.35 + orbit * .065);
      const orbitTilt = .39 + orbit * .014;
      const angleOffset = -.40 + orbit * .015;
      context.beginPath();
      context.ellipse(cx, cy, orbitRadius, orbitRadius * orbitTilt, angleOffset, 0, Math.PI * 2);
      context.strokeStyle = `rgba(${orbit % 2 ? "135,111,204" : "89,126,220"},${(.075 - orbit * .008) * structure})`;
      context.lineWidth = .6;
      context.stroke();
      for (let i = 0; i < 132; i++) {
        const angle = (i / 132) * Math.PI * 2 + time * (.045 + orbit * .014);
        const radialJitter = 1 + (random(i * 3 + orbit * 100) - .5) * .035;
        const ox = Math.cos(angle) * orbitRadius * radialJitter;
        const oy = Math.sin(angle) * orbitRadius * orbitTilt;
        const px = cx + ox * Math.cos(angleOffset) - oy * Math.sin(angleOffset);
        const py = cy + ox * Math.sin(angleOffset) + oy * Math.cos(angleOffset);
        const front = Math.sin(angle) > 0;
        const alpha = front ? .28 + random(i + orbit) * .38 : .08 + random(i) * .17;
        const size = front ? .8 + random(i * 2) * .7 : .65;
        const color = orbit % 2 ? "163,132,235" : "117,155,248";
        const settled = drawIncoming(orbitFlights[orbit * 132 + i], px, py, size, alpha, color);
        if (!settled) continue;
        context.fillStyle = `rgba(${color},${alpha * settled})`;
        context.fillRect(px, py, size, size);
      }
    }

    const palette = ["130,153,250", "171,139,244", "98,127,223", "193,176,252"];
    for (const particle of particles) {
      const point = rotate(particle.x, particle.y, particle.z, yaw, tilt);
      const perspective = 3.6 / (3.6 - point.z * .43);
      const breath = 1 + .008 * Math.sin(time * .8 + particle.phase);
      const px = cx + point.x * radius * perspective * breath;
      const py = cy + point.y * radius * perspective * breath;
      const depth = (point.z + 1.1) / 2.2;
      const limb = Math.pow(1 - Math.min(1, Math.abs(point.z)), 1.4);
      const alpha = Math.min(.95, .13 + depth * .44 + limb * .22);
      const size = particle.size * (.62 + depth * .57);
      const settled = drawIncoming(particle.flight, px, py, size, alpha, palette[particle.color]);
      if (!settled) continue;
      context.fillStyle = `rgba(${palette[particle.color]},${alpha * settled})`;
      context.fillRect(px, py, size, size);
      if (particle.size > 1.4 && depth > .68) {
        context.fillStyle = `rgba(${palette[particle.color]},${.05 * settled})`;
        context.beginPath();
        context.arc(px, py, size * 3, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Fine latitude arcs add the feeling of a scientific point-cloud instrument.
    context.lineWidth = .55;
    for (let latitude = -2; latitude <= 2; latitude++) {
      const y = latitude * .31;
      const ringRadius = Math.sqrt(1 - y * y);
      context.beginPath();
      let penDown = false;
      for (let i = 0; i <= 120; i++) {
        const angle = (i / 120) * Math.PI * 2;
        const point = rotate(Math.cos(angle) * ringRadius, y, Math.sin(angle) * ringRadius, yaw, tilt);
        if (point.z < 0) { penDown = false; continue; }
        const px = cx + point.x * radius;
        const py = cy + point.y * radius;
        if (!penDown) context.moveTo(px, py);
        else context.lineTo(px, py);
        penDown = true;
      }
      context.strokeStyle = `rgba(144,133,223,${.11 * structure})`;
      context.stroke();
    }

    // A single bright satellite travels on the outer orbit.
    const angle = time * .12 + .65;
    const sx = Math.cos(angle) * radius * 1.62;
    const sy = Math.sin(angle) * radius * .64;
    const satelliteX = cx + sx * Math.cos(-.4) - sy * Math.sin(-.4);
    const satelliteY = cy + sx * Math.sin(-.4) + sy * Math.cos(-.4);
    const satelliteGlow = context.createRadialGradient(satelliteX, satelliteY, 0, satelliteX, satelliteY, 15);
    satelliteGlow.addColorStop(0, "rgba(171,184,255,0.7)");
    satelliteGlow.addColorStop(.16, "rgba(134,145,250,0.25)");
    satelliteGlow.addColorStop(1, "rgba(112,118,233,0)");
    context.fillStyle = satelliteGlow;
    context.globalAlpha = structure;
    context.fillRect(satelliteX - 15, satelliteY - 15, 30, 30);
    context.globalAlpha = 1;
  }

  function tick(timestamp) {
    if (motionQuery.matches || document.hidden || !visible || document.documentElement.classList.contains("intro-pending")) { animationFrame = 0; lastTick = 0; return; }
    animationFrame = requestAnimationFrame(tick);
    if (timestamp - lastFrame < 32) return;
    if (lastTick) elapsed += Math.min((timestamp - lastTick) / 1000, .1);
    lastTick = timestamp;
    lastFrame = timestamp;
    pointer.currentX += (pointer.x - pointer.currentX) * .055;
    pointer.currentY += (pointer.y - pointer.currentY) * .055;
    draw(elapsed);
  }

  function resume() {
    if (!animationFrame && !motionQuery.matches && !document.hidden && visible && !document.documentElement.classList.contains("intro-pending")) {
      lastTick = 0;
      animationFrame = requestAnimationFrame(tick);
    } else if (motionQuery.matches) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      draw(elapsed);
    }
  }

  // intro.js owns the one-shot lifecycle; scrolling can only resume normal rotation.
  window.innovatorParticles = {
    drawIntro(layer, viewportWidth, viewportHeight, progress, time) {
      intro = { context: layer, width: viewportWidth, height: viewportHeight, progress };
      elapsed = time;
      draw(elapsed);
    },
  };

  document.querySelector(".hero").addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || motionQuery.matches) return;
    const bounds = canvas.getBoundingClientRect();
    pointer.x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / width * 2 - 1));
    pointer.y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / height * 2 - 1));
  }, { passive: true });
  document.querySelector(".hero").addEventListener("pointerleave", () => { pointer.x = 0; pointer.y = 0; });
  document.addEventListener("visibilitychange", resume);
  document.addEventListener("innovator:intro-reveal", () => {
    intro = null;
    draw(elapsed);
    resume();
  });
  motionQuery.addEventListener("change", resume);
  new ResizeObserver(resize).observe(canvas.parentElement);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); }, { rootMargin: "100px" }).observe(canvas);
  resize();
  resume();
})();
