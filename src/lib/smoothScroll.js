import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis = null;

/** Starts buttery wheel scrolling (skipped for reduced-motion users). Returns a cleanup. */
export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09,
    anchors: true, // honours the CSS scroll-padding-top, so no extra offset
    stopInertiaOnNavigate: true,
  });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Pauses smooth scrolling while an overlay (the mobile menu) is open. */
export function setScrollLocked(locked) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
