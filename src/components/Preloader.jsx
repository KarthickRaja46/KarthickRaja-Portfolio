import { useEffect, useState } from 'react';
import { animate, motion } from 'motion/react';
import { profile } from '../data/content';
import { markIntroSeen } from '../lib/intro';
import { EASE } from './ui/Reveal';
import './Preloader.css';

/* Short intro (~1s): monogram + counter, then a curtain lifts. Any click or key skips it. */
export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    markIntroSeen();
    window.scrollTo(0, 0);
    let timer;
    const controls = animate(0, 100, {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        timer = setTimeout(onDone, 60);
      },
    });
    const skip = () => onDone();
    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);
    return () => {
      controls.stop();
      clearTimeout(timer);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [onDone]);

  const letters = profile.name.split('');

  return (
    <motion.div
      className="preloader"
      aria-hidden="true"
      initial={{ y: 0 }}
      exit={{ y: '-100%', borderBottomLeftRadius: '50% 18vh', borderBottomRightRadius: '50% 18vh' }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader__glow" />

      <div className="preloader__center">
        <motion.div
          className="preloader__mono"
          initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="preloader__ring" />
          KR
        </motion.div>
        <p className="preloader__name">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.05 + i * 0.015 }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </p>
      </div>

      <div className="preloader__footer">
        <span className="preloader__count">
          {String(count).padStart(3, '0')}
          <small>%</small>
        </span>
        <div className="preloader__meta">
          <span>{profile.role}</span>
          <span className="preloader__bar">
            <span style={{ transform: `scaleX(${count / 100})` }} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
