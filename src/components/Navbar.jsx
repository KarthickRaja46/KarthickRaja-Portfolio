import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';
import { navLinks, profile } from '../data/content';
import { useActiveSection, useScrolledPast } from '../lib/hooks';
import { setScrollLocked } from '../lib/smoothScroll';
import { useIntroDone } from '../lib/intro';
import ThemeToggle from './ThemeToggle';
import { EASE } from './ui/Reveal';
import './Navbar.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolledPast(24);
  const [open, setOpen] = useState(false);
  const ready = useIntroDone();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    setScrollLocked(true);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      setScrollLocked(false);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <motion.div
        className="nav__bar"
        initial={{ y: -24, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        <a href="#home" className="nav__brand" aria-label={`${profile.name} — back to top`}>
          <span className="nav__mono" aria-hidden="true">KR</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'true' : undefined}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav__pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="nav__label">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a
            href={profile.resume}
            className="btn btn--gold btn--sm nav__resume"
            target="_blank"
            rel="noopener noreferrer"
            download={profile.resumeFileName}
          >
            <LuDownload aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ol className="mobile-menu__list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 + i * 0.05 }}
                  >
                    <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                      <span className="mobile-menu__index">0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a
                href={profile.resume}
                className="btn btn--gold"
                target="_blank"
                rel="noopener noreferrer"
                download={profile.resumeFileName}
              >
                <LuDownload aria-hidden="true" /> Download resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
