import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import { marquee } from '../data/content';
import { wrap } from '../lib/hooks';
import './Marquee.css';

/* Decorative — every item here is also listed in the Skills section. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <MarqueeRow items={marquee} baseVelocity={-2.2} />
      <MarqueeRow items={[...marquee].reverse()} baseVelocity={2.2} reverse />
    </div>
  );
}

/* One row: drifts on its own, speeds up / reverses / leans with scroll velocity. */
function MarqueeRow({ items, baseVelocity, reverse = false }) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-2500, 2500], [10, -10], { clamp: true });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);
  const hovered = useRef(false);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || hovered.current) return;
    const b = boost.get();
    if (b < 0) direction.current = -1;
    else if (b > 0) direction.current = 1;
    let move = direction.current * baseVelocity * (delta / 1000);
    move += direction.current * move * b;
    baseX.set(baseX.get() + move);
  });

  return (
    <div
      className={`marquee__row ${reverse ? 'marquee__row--reverse' : ''}`}
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
    >
      <motion.div className="marquee__track" style={{ x, skewX }}>
        {[0, 1].map((copy) => (
          <ul className="marquee__group" key={copy}>
            {items.map(({ label, icon: Icon }) => (
              <li className="marquee__chip" key={label}>
                <span className="marquee__icon">
                  <Icon />
                </span>
                {label}
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  );
}
