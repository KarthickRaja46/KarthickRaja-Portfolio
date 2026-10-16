import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/** Counts up from zero to `value` when it first scrolls into view. */
export default function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCurrent(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, duration]);

  return (
    <span ref={ref} className="counter">
      <span className="sr-only">
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </span>
      {/* Drawn from data-text via CSS, so the page text (and screen readers) only get the final value above. */}
      <span aria-hidden="true">
        {prefix && <span className="counter__prefix" data-text={prefix.trim()} />}
        <span data-text={current.toFixed(decimals)} />
        <span className="counter__affix" data-text={suffix} />
      </span>
    </span>
  );
}
