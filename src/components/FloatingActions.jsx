import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { LuArrowUp } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { profile } from '../data/content';
import { useScrolledPast } from '../lib/hooks';
import { scrollToTop } from '../lib/smoothScroll';
import './FloatingActions.css';

export default function FloatingActions() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const showTop = useScrolledPast(500);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <div className="fab">
        <a
          href={profile.whatsapp}
          className="fab__btn fab__btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>

        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              className="fab__btn fab__btn--top"
              aria-label="Scroll to top"
              title="Scroll to top"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="fab__ring" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="22" className="fab__ring-track" />
                <motion.circle cx="24" cy="24" r="22" className="fab__ring-fill" style={{ pathLength: progress }} />
              </svg>
              <LuArrowUp aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
