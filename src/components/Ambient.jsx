import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/* Fixed aurora lights + a soft glow that trails the pointer beneath the glass. */
export default function Ambient() {
  const x = useMotionValue(typeof window === 'undefined' ? 0 : window.innerWidth * 0.72);
  const y = useMotionValue(320);
  const sx = useSpring(x, { stiffness: 50, damping: 20, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 50, damping: 20, mass: 0.8 });

  useEffect(() => {
    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return (
    <div className="ambient" aria-hidden="true">
      <span className="aurora__blob aurora__blob--gold" />
      <span className="aurora__blob aurora__blob--violet" />
      <span className="aurora__blob aurora__blob--azure" />
      <span className="aurora__blob aurora__blob--rose" />
      <motion.span className="cursor-glow" style={{ x: sx, y: sy }} />
      <span className="ambient__grid" />
      <span className="ambient__grain" />
      <span className="ambient__vignette" />
    </div>
  );
}
