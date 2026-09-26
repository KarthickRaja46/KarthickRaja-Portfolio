import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { trackSpotlight } from './hooks';

/** 3D pointer tilt for glass cards (mouse only, off for reduced motion). Also feeds the spotlight. */
export function useTilt(max = 6) {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  function onPointerMove(event) {
    trackSpotlight(event);
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return {
    style: { rotateX, rotateY, transformPerspective: 1100 },
    onPointerMove,
    onPointerLeave,
  };
}
