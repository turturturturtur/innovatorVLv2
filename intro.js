(() => {
  "use strict";
  const root = document.documentElement;
  const overlay = document.getElementById("intro-overlay");
  // This state is created only by the document's initial load, never by scrolling.
  if (!root.classList.contains("intro-pending")) { overlay.hidden = true; return; }

  const canvas = document.getElementById("intro-canvas");
  const motionQuery = matchMedia("(prefers-reduced-motion: reduce)");
  const duration = 3000;
  let context;
  let width = 0;
  let height = 0;
  let frame = 0;
  let started = null;
  let lastFrame = 0;
  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(frame);
    clearTimeout(window.innovatorIntroTimeout);
    root.classList.remove("intro-pending");
    overlay.hidden = true;
    overlay.style.removeProperty("--intro-shade");
    window.removeEventListener("resize", resize);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("hashchange", finish);
    window.removeEventListener("pagehide", finish);
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("focusin", finish);
    document.removeEventListener("pointerdown", finish);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    document.removeEventListener("innovator:intro-fallback", finish);
    motionQuery.removeEventListener("change", onMotionChange);
    document.dispatchEvent(new Event("innovator:intro-reveal"));
    // Release the full-screen backing store; later visits to the hero only rotate it.
    canvas.width = canvas.height = 0;
  }

  function resize() {
    if (!context || finished) return;
    width = overlay.clientWidth;
    height = overlay.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function tick(timestamp) {
    if (finished) return;
    if (started === null) started = timestamp;
    const elapsed = timestamp - started;
    if (elapsed >= duration) { finish(); return; }
    frame = requestAnimationFrame(tick);
    if (timestamp - lastFrame < 32) return;
    lastFrame = timestamp;
    try {
      const progress = elapsed / duration;
      // Let the full-screen field gather first, then reveal the homepage from black.
      const reveal = Math.max(0, Math.min(1, (progress - .28) / .68));
      overlay.style.setProperty("--intro-shade", String(1 - reveal * reveal * (3 - 2 * reveal)));
      window.innovatorParticles.drawIntro(context, width, height, progress, elapsed / 1000);
    } catch { finish(); }
  }

  function onScroll() { if (window.scrollY > 8) finish(); }
  function onKeyDown(event) { if (event.key === "Escape") finish(); }
  function onVisibilityChange() { if (document.hidden) finish(); }
  function onMotionChange(event) { if (event.matches) finish(); }

  document.addEventListener("keydown", onKeyDown);
  // Never leave a focused or clicked page control behind the black veil.
  document.addEventListener("focusin", finish);
  document.addEventListener("pointerdown", finish);
  document.addEventListener("visibilitychange", onVisibilityChange);
  document.addEventListener("innovator:intro-fallback", finish);
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", finish);
  window.addEventListener("pagehide", finish);
  motionQuery.addEventListener("change", onMotionChange);

  try {
    context = canvas.getContext("2d", { alpha: true });
    if (!context || !window.innovatorParticles || motionQuery.matches || document.hidden || window.scrollY > 8) { finish(); return; }
    resize();
    frame = requestAnimationFrame(tick);
  } catch { finish(); }
})();
