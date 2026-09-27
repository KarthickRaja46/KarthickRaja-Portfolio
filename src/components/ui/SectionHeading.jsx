import { isValidElement, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Reveal, { EASE } from './Reveal';
import { rich } from '../../lib/rich';

const WORD = {
  hidden: { y: '110%', opacity: 0, filter: 'blur(8px)' },
  shown: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

/* Splits rich() output into words; accent <em> spans stay whole so their gradient isn't broken. */
function toWords(nodes) {
  return nodes.flatMap((node) =>
    isValidElement(node) ? [node] : String(node).split(/(\s+)/).filter(Boolean),
  );
}

export default function SectionHeading({ index, eyebrow, title, subtitle, as: Tag = 'h2', align = 'left' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <header ref={ref} className={`section-heading section-heading--${align}`}>
      {index && (
        <motion.span className="section-heading__ghost" aria-hidden="true" style={{ y: ghostY }}>
          {index}
        </motion.span>
      )}
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          {index && <span className="eyebrow__index">{index}</span>}
          {eyebrow}
        </p>
      </Reveal>
      <Tag className="section-heading__title">
        <motion.span
          className="section-heading__words"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ staggerChildren: 0.07, delayChildren: 0.05 }}
        >
          {toWords(rich(title)).map((word, i) =>
            typeof word === 'string' && /^\s+$/.test(word) ? (
              ' '
            ) : (
              <span className="word-mask" key={i}>
                <motion.span className="word" variants={WORD}>
                  {word}
                </motion.span>
              </span>
            ),
          )}
        </motion.span>
      </Tag>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="section-heading__subtitle">{subtitle}</p>
        </Reveal>
      )}
    </header>
  );
}
