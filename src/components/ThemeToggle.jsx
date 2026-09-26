import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { applyTheme, getTheme, hasSavedTheme, saveTheme } from '../lib/theme';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);
  const reduceMotion = useReducedMotion();

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => {
      if (hasSavedTheme()) return;
      const next = e.matches ? 'light' : 'dark';
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  function toggle(event) {
    const next = theme === 'dark' ? 'light' : 'dark';
    const commit = () => {
      applyTheme(next);
      saveTheme(next);
      flushSync(() => setTheme(next));
    };

    if (!document.startViewTransition || reduceMotion) {
      commit();
      return;
    }

    // Reveal the new theme as a circle growing out of the button.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(commit);
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle__icon"
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {isLight ? <LuMoon aria-hidden="true" /> : <LuSun aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
