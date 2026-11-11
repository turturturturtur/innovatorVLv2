/* Authored visual walkthroughs of recorded evaluations. The camera, outlines
   and colors are presentation annotations, never model attention traces. */
(() => {
  "use strict";
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const ease = (n) => { n = clamp(n); return n * n * (3 - 2 * n); };
  const mix = (a, b, t) => a + (b - a) * t;
  const segment = (p, start, end) => clamp((p - start) / (end - start));
  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function spectrumScene(example, scene, word, labels) {
    const spectrum = example.images[0];
    return `<div class="cinema-topline"><span>${escape(word(scene.caption))}</span></div>
      <div class="spectrum-plot">
        <svg viewBox="${scene.spectrum.crop.join(" ")}" role="img" aria-label="${escape(word(spectrum.alt))}">
          <defs><filter id="spectrum-purple" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="-.85 0 0 0 .9  0 -.765 0 0 .8  0 0 -.91 0 1  0 0 0 1 0"/></filter></defs>
          <image href="${escape(spectrum.src)}" width="${scene.spectrum.size[0]}" height="${scene.spectrum.size[1]}" filter="url(#spectrum-purple)"/>
        </svg>
      </div>
      <div class="molecule-options" role="list">
        ${scene.molecules.options.map((option, i) => {
          const input = example.images[option.imageIndex];
          return `<div class="molecule-option ${option.complex ? "molecule-option-complex" : ""}" role="listitem" data-option="${escape(option.letter)}" data-match="${option.letter === example.response.trim()}" style="--rotation-duration:${18 + i * 1.7}s;--rotation-delay:${-i * 2.3}s">
            <span class="molecule-option-label">${escape(option.letter)}</span>
            ${option.letter === example.response.trim() ? `<span class="molecule-selection-mark" aria-hidden="true">✓</span><span class="sr-only molecule-selection-label" hidden>${escape(labels.modelSelection)}</span>` : ""}
            <div class="molecule-stage"><svg class="molecule-structure" viewBox="0 0 400 200" role="img" aria-label="${escape(word(input.alt))}"><use href="${escape(scene.molecules.sprite)}#option-${option.letter.toLowerCase()}" width="400" height="200"/></svg></div>
          </div>`;
        }).join("")}
      </div>`;
  }

  function mount({ root, example, scene, language, labels, onComplete }) {
    const duration = scene.durationMs ?? 1000;
    const colors = scene.colors || ["#79e7f2", "#bb94ff", "#ffd18b"];
    const host = root.querySelector(".case-cinema");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const word = (value) => value[language];
    // All overlay coordinates share the same image transform. No screen-pixel
    // offsets: camera targets remain aligned at every viewport size.
    const ratio = scene.size[0] / scene.size[1];
    const height = Math.min(480, 850 / ratio), width = height * ratio;
    const area = scene.kind === "domains" || scene.panels ? { x: 0, y: 0, w: 1000, h: 620 } : { x: (1000 - width) / 2, y: (620 - height) / 2, w: width, h: height };
    const point = ([x, y]) => [area.x + x * area.w, area.y + y * area.h];
    const rect = ([x, y, w, h]) => [...point([x, y]), w * area.w, h * area.h];
    const corners = ([x, y, w, h]) => {
      const a = Math.min(w, h, 44) * .3;
      return `M${x},${y + a}v${-a}h${a} M${x + w - a},${y}h${a}v${a} M${x + w},${y + h - a}v${a}h${-a} M${x + a},${y + h}h${-a}v${-a}`;
    };
    const imagePanel = (src, box, label = "") => {
      const [x, y, w, h] = box;
      return `${scene.paper ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="white" />` : ""}
        <image class="scene-image ${scene.ink ? "scene-ink" : ""} ${scene.natural ? "scene-natural" : ""} ${scene.imagePalette === "peptide-purple" ? "scene-peptide" : ""}" href="${escape(src)}" x="${x}" y="${y}" width="${w}" height="${h}" />
        ${label ? `<text class="scene-panel-label" x="${x + 7}" y="${y - 7}">${escape(label)}</text>` : ""}`;
    };
    // Each panel references one untouched input image in its original order.
    const inputImages = scene.panels ? scene.panels.map((panel) => {
      const input = example.images[panel.imageIndex];
      return imagePanel(input.src, rect(panel.box), word(input.label));
    }).join("") : example.image ? imagePanel(scene.displayImage || example.image, [area.x, area.y, area.w, area.h]) : "";
    // The RNA asset contains only traced SVG paths. A wide stroke mask follows
    // its backbone, revealing the original bases and bonds in sequence.
    const rna = scene.kind === "rna" ? `<svg id="rna-structure" class="rna-structure" x="${area.x}" y="${area.y}" width="${area.w}" height="${area.h}" viewBox="0 0 ${scene.size.join(" ")}" overflow="visible">
      <defs><mask id="rna-draw-mask" maskUnits="userSpaceOnUse" x="-10" y="-10" width="${scene.size[0] + 20}" height="${scene.size[1] + 20}" style="mask-type:alpha"><path class="rna-draw-route" d="${escape(scene.rna.route)}" fill="none" stroke="white" stroke-width="80" stroke-linejoin="round" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></mask></defs>
      <use href="${escape(scene.rna.sprite)}#rna" width="${scene.size[0]}" height="${scene.size[1]}" mask="url(#rna-draw-mask)"/>
    </svg>` : "";
    const domains = `<g class="domain-diagram">
      <text x="275" y="112" class="domain-caption">IMP1 · KH1 / KH2</text><text x="725" y="112" class="domain-caption">IMP1 · KH3 / KH4</text>
      <path class="domain-link" d="M185 265 Q275 145 358 280 M635 270 Q725 180 815 270" />
      <g transform="translate(185 260) rotate(-22)"><rect x="-62" y="-83" width="124" height="166" rx="53" /><path d="M-45 -40 Q0 -75 45 -40 M-45 0 Q0 -35 45 0 M-45 40 Q0 5 45 40"/><text transform="rotate(22)" y="5">KH1</text></g>
      <g transform="translate(358 280) rotate(23)"><rect x="-62" y="-83" width="124" height="166" rx="53" /><path d="M-45 -40 Q0 -75 45 -40 M-45 0 Q0 -35 45 0 M-45 40 Q0 5 45 40"/><text transform="rotate(-23)" y="5">KH2</text></g>
      <g transform="translate(635 270) rotate(-12)"><rect x="-62" y="-83" width="124" height="166" rx="53" /><path d="M-45 -40 Q0 -75 45 -40 M-45 0 Q0 -35 45 0 M-45 40 Q0 5 45 40"/><text transform="rotate(12)" y="5">KH3</text></g>
      <g transform="translate(815 270) rotate(12)"><rect x="-62" y="-83" width="124" height="166" rx="53" /><path d="M-45 -40 Q0 -75 45 -40 M-45 0 Q0 -35 45 0 M-45 40 Q0 5 45 40"/><text transform="rotate(-12)" y="5">KH4</text></g>
      <path class="domain-link domain-compare" d="M275 360 Q275 430 500 440 Q725 430 725 360" />
      <text x="500" y="475" class="domain-keywords">INTERFACE · ANGLE · RNA-BINDING GROOVES</text>
    </g>`;
    const marks = scene.regions.map((step, i) => {
      const [x, y, w, h] = rect(step.box);
      // Molecular bonds remain unobstructed; region corners provide the guide.
      const path = !scene.outlineOnly && step.path?.map((p, n) => `${n ? "L" : "M"}${point(p).join(" ")}`).join(" ");
      return `<g class="scene-region" data-region="${i}" style="color:${colors[i]}" opacity="0">
        <title>${escape(word(step.label))}</title>
        <rect class="region-wash" x="${x}" y="${y}" width="${w}" height="${h}" rx="3" />
        ${scene.kind === "rna" ? `<defs><clipPath id="rna-stem-clip-${i}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/></clipPath></defs>
          <use class="rna-stem-ink" href="#rna-structure" filter="url(#rna-stem-gold)" clip-path="url(#rna-stem-clip-${i})" aria-hidden="true"/>
          <svg class="rna-region-light" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 100" preserveAspectRatio="none" overflow="hidden" aria-hidden="true" style="--glow-delay:${-i * .45}s">
            <rect class="rna-region-glow" width="100" height="100" fill="url(#rna-soft-glow)"/>
            <rect class="rna-region-shimmer" x="-70" width="70" height="100" fill="url(#rna-soft-shimmer)"/>
          </svg>` : ""}
        <path class="region-corners" d="${corners([x, y, w, h])}" />
        ${scene.kind === "rna" ? `<text class="rna-stem-number" x="${x + w / 2}" y="${y + h + 22}">${i + 1}</text>` : ""}
        ${path ? `<path class="region-trace" d="${path}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" />` : ""}
        ${(scene.outlineOnly ? [] : step.path || [[step.box[0] + step.box[2] / 2, step.box[1] + step.box[3] / 2]]).map((p) => { const [cx, cy] = point(p); return `<circle class="region-node" cx="${cx}" cy="${cy}" r="2.2" />`; }).join("")}
      </g>`;
    }).join("");
    host.dataset.kind = scene.kind;
    host.innerHTML = scene.kind === "spectrum" ? spectrumScene(example, scene, word, labels) : `<div class="cinema-topline"><span><i></i>${escape(word(scene.caption))}</span><span class="cinema-zoom">1.00×</span></div>
      <svg class="cinema-svg" viewBox="0 0 1000 620" role="img" aria-label="${escape(labels.visualLabel)}">
        <defs><pattern id="case-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#786ca0" stroke-opacity=".11" /></pattern><radialGradient id="case-aura"><stop stop-color="#7655b7" stop-opacity=".2"/><stop offset="1" stop-color="#070a12" stop-opacity="0"/></radialGradient><linearGradient id="case-scan" x2="0" y2="1"><stop stop-color="#78e5ef" stop-opacity="0"/><stop offset="1" stop-color="#78e5ef" stop-opacity=".15"/></linearGradient>
          ${scene.imagePalette === "peptide-purple" ? `<filter id="case-peptide-purple" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="-.14 -.894 .217 0 .88  -.23 -.954 .397 0 .83  -.02 -1.74 .87 0 1  0 0 0 1 0"/></filter>` : ""}
          ${rna ? `<filter id="rna-stem-gold" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .91  0 0 0 0 .78  0 0 0 0 .52  0 0 0 1 0"/></filter>
            <radialGradient id="rna-soft-glow"><stop stop-color="#f3dba4" stop-opacity=".13"/><stop offset="1" stop-color="#e8ce91" stop-opacity="0"/></radialGradient>
            <linearGradient id="rna-soft-shimmer"><stop stop-color="#efd8a3" stop-opacity="0"/><stop offset=".5" stop-color="#f3dba4" stop-opacity=".12"/><stop offset="1" stop-color="#efd8a3" stop-opacity="0"/></linearGradient>
            <linearGradient id="rna-scan-trail"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".65" stop-color="#fff" stop-opacity=".035"/><stop offset="1" stop-color="#fff" stop-opacity=".16"/></linearGradient>` : ""}
        </defs>
        <rect width="1000" height="620" fill="url(#case-grid)"/><ellipse cx="500" cy="310" rx="490" ry="305" fill="url(#case-aura)"/>
        <g class="scene-camera">${rna || (example.image ? inputImages : domains)}${marks}</g>
        ${rna ? `<g class="rna-scan" opacity="0" aria-hidden="true"><rect class="rna-scan-trail" x="-64" width="64" height="620" fill="url(#rna-scan-trail)"/><path class="rna-scan-line" d="M0 0V620"/></g>` : `<g class="scene-scan"><rect width="1000" height="90" y="-90" fill="url(#case-scan)"/><path d="M0 0H1000" stroke="#87eaff" stroke-width="1.2"/></g>
        <g class="scene-reticle" opacity="0"><circle r="26" fill="none" stroke="currentColor" stroke-width=".7"/><path d="M-42 0H-31 M31 0H42 M0 -42V-31 M0 31V42" stroke="currentColor" stroke-width="1.5"/><circle r="4" fill="currentColor" /></g>`}
        <g class="scene-dust">${Array.from({ length: 18 }, (_, i) => `<circle cx="${38 + (i * 167) % 920}" cy="${36 + (i * 97) % 535}" r="${i % 3 === 0 ? 1.8 : 1}" fill="${colors[i % 3]}"/>`).join("")}</g>
        <path d="M22 47V22H47 M953 22H978V47 M978 573V598H953 M47 598H22V573" class="cinema-frame"/>
      </svg>${scene.displayImage && scene.imageNote ? `<p class="cinema-image-note">${escape(word(scene.imageNote))}</p>` : ""}`;

    const camera = host.querySelector(".scene-camera");
    const scan = host.querySelector(".scene-scan");
    const reticle = host.querySelector(".scene-reticle");
    const regions = [...host.querySelectorAll(".scene-region")];
    const zoom = host.querySelector(".cinema-zoom");
    const dust = [...host.querySelectorAll(".scene-dust circle")];
    const response = root.querySelector(".recorded-response");
    const selectionLabel = host.querySelector(".molecule-selection-label");
    const evidence = root.querySelector(".case-records");
    const keywords = host.querySelector(".domain-keywords");
    const rnaRoute = host.querySelector(".rna-draw-route");
    const rnaScan = host.querySelector(".rna-scan");
    // app.js owns answer content; animate its plain or formatted wrapper intact.
    let progress = 0, active = false, destroyed = false;
    let raf = 0, lastTime = null, wasComplete = false;

    function paint(p) {
      progress = clamp(p);
      const complete = progress >= 1;
      root.dataset.playback = complete ? "complete" : active ? "playing" : "suspended";
      root.dataset.progress = progress.toFixed(4);
      root.style.setProperty("--play-progress", progress);
      root.style.setProperty("--scene-color", colors[Math.min(2, Math.floor(progress * 3))]);
      // One continuous camera move, with staggered traces in the same frame.
      const blend = ease(segment(progress, 0, .8));
      const fx = mix(.5, scene.focus[0], blend), fy = mix(.5, scene.focus[1], blend);
      const scale = mix(1, scene.focus[2], blend);
      const [cx, cy] = point([fx, fy]);
      camera?.setAttribute("transform", `translate(500 310) scale(${scale}) translate(${-cx} ${-cy})`);
      if (zoom) zoom.textContent = `${scale.toFixed(2)}×`;
      scan?.setAttribute("transform", `translate(0 ${-60 + progress * 750})`);
      if (scan) scan.style.opacity = String(Math.sin(Math.PI * progress) * .45);
      // The purple line spans the viewport, independent of the RNA camera.
      // Continue beyond the right edge until its short white trail clears it.
      const rnaScanX = 1064 * segment(progress, .5, .94);
      if (rnaRoute) {
        const drawing = segment(progress, 0, .5);
        rnaRoute.setAttribute("stroke-dashoffset", String(1 - drawing));
        // Hide the round mask cap at zero so replay starts with a blank canvas.
        rnaRoute.style.opacity = drawing > 0 ? "1" : "0";
        rnaScan.setAttribute("transform", `translate(${rnaScanX} 0)`);
        rnaScan.setAttribute("opacity", String(ease(segment(progress, .49, .53)) * (1 - ease(segment(progress, .92, .98)))));
      }
      regions.forEach((element, i) => {
        // Compare in viewport coordinates so a stem lights up as the line
        // actually crosses it, even while the camera is still moving.
        const [x, , w] = rect(scene.regions[i].box);
        const left = 500 + (x - cx) * scale;
        const value = rnaRoute ? ease((rnaScanX - left) / (w * scale))
          : ease(segment(progress, .06 + i * .1, .38 + i * .1));
        element.style.opacity = value * .8;
        element.querySelector(".region-trace")?.setAttribute("stroke-dashoffset", String(1 - value));
        element.querySelector(".region-wash").style.opacity = .10;
      });
      reticle?.setAttribute("transform", `translate(500 310) rotate(${progress * 45})`);
      if (reticle) reticle.style.opacity = String(Math.sin(Math.PI * progress) * .45);
      dust.forEach((dot, i) => { dot.style.opacity = complete ? ".18" : String(.15 + .25 * Math.pow(Math.sin(progress * 3 + i), 2)); });
      keywords?.setAttribute("opacity", String(ease(segment(progress, .15, .65))));
      const emergence = ease(segment(progress, rnaRoute ? .76 : .08, 1));
      if (response) {
        response.style.clipPath = `inset(0 ${(1 - emergence) * 100}% 0 0)`;
        response.style.opacity = Math.min(1, emergence * 3);
        response.setAttribute("aria-hidden", String(!complete));
      }
      if (selectionLabel) selectionLabel.hidden = !complete;
      evidence.hidden = !complete;
      if (!complete) evidence.open = false;
      if (complete && !wasComplete) onComplete();
      wasComplete = complete;
    }

    function stop() { cancelAnimationFrame(raf); raf = 0; lastTime = null; }
    function tick(now) {
      raf = 0;
      if (destroyed || !active || progress >= 1) { lastTime = null; return; }
      const elapsed = lastTime === null ? 0 : Math.min(100, now - lastTime);
      lastTime = now;
      paint(Math.min(1, progress + elapsed / duration));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    function run() {
      if (!destroyed && active && progress < 1 && !raf && !reduced.matches) raf = requestAnimationFrame(tick);
    }
    function setActive(value) {
      active = value;
      host.dataset.active = String(active);
      if (!active) stop();
      paint(progress); run();
    }
    const motionChanged = () => { if (reduced.matches) { stop(); paint(1); } };
    reduced.addEventListener("change", motionChanged);
    paint(reduced.matches ? 1 : 0);
    return {
      setActive,
      destroy() {
        destroyed = true; stop();
        reduced.removeEventListener("change", motionChanged);
      }
    };
  }
  window.InnovatorCasePlayer = { mount };
})();
