import { motion } from 'motion/react';

export const EASE = [0.22, 1, 0.36, 1];

/** Fades, lifts (and optionally un-blurs) its children the first time they scroll into view. */
export default function Reveal({ as = 'div', delay = 0, y = 28, blur = false, children, ...rest }) {
  const Component = motion[as];
  const hidden = blur ? { opacity: 0, y, filter: 'blur(14px)' } : { opacity: 0, y };
  const shown = blur ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 1, y: 0 };
  return (
    <Component
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
