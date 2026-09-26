import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { LuArrowDownRight, LuArrowUpRight, LuChartColumn, LuDownload, LuSparkles } from 'react-icons/lu';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { about, hero, profile } from '../data/content';
import { rich } from '../lib/rich';
import Counter from './ui/Counter';
import { EASE } from './ui/Reveal';
import './Hero.css';

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, ease: EASE, delay },
});

const status = about.details.find((row) => row.label === 'Status')?.value;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="hero__status" {...fadeUp(0.1)}>
            <span className="pulse-dot" aria-hidden="true" />
            {profile.availability}
            <span className="hero__status-sep" aria-hidden="true" />
            {profile.location}
          </motion.p>

          <h1 className="hero__title">
            {[profile.firstName, profile.lastName].map((word, i) => (
              <span className="hero__line" key={word}>
                <motion.span
                  className={`hero__word ${i === 1 ? 'text-iris' : ''}`}
                  initial={{ y: '105%', rotate: 4 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.12 }}
                >
                  {word}
                </motion.span>{' '}
              </span>
            ))}
          </h1>

          <motion.p className="hero__role" {...fadeUp(0.5)}>
            {profile.role}
          </motion.p>

          <motion.div {...fadeUp(0.6)}>
            <RotatingPhrase phrases={hero.rotatingPhrases} />
          </motion.div>

          <motion.p className="hero__tagline" {...fadeUp(0.7)}>
            {rich(hero.tagline)}
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.8)}>
            <a href="#contact" className="btn btn--gold">
              Get in touch <LuArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              className="btn btn--glass"
              target="_blank"
              rel="noopener noreferrer"
              download={profile.resumeFileName}
            >
              <LuDownload aria-hidden="true" /> View resume
            </a>
            <a href={profile.linkedin} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href={profile.github} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub aria-hidden="true" />
            </a>
          </motion.div>

          <motion.dl className="hero__stats" {...fadeUp(0.9)}>
            {hero.stats.map((stat) => (
              <div className="glass hero__stat" key={stat.label}>
                <dt className="label">{stat.label}</dt>
                <dd>
                  <Counter {...stat} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroVisual />
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="hero__mouse" aria-hidden="true">
          <span />
        </span>
      </motion.a>
    </section>
  );
}

function RotatingPhrase({ phrases }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 3000);
    return () => clearInterval(id);
  }, [phrases.length, reduceMotion]);

  return (
    <p className="hero__rotator">
      <span className="hero__rotator-label">
        <LuSparkles aria-hidden="true" /> Focused on
      </span>
      <span className="hero__rotator-window">
        {/* Invisible copies reserve the width of the longest phrase, so the pill never jumps. */}
        {phrases.map((phrase) => (
          <span className="hero__rotator-ghost" aria-hidden="true" key={phrase}>
            {phrase}
          </span>
        ))}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={phrases[index]}
            className="hero__rotator-phrase"
            initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-110%', opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}

function HeroVisual() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 80, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const glareX = useTransform(sx, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(sy, [-0.5, 0.5], ['0%', '100%']);
  const nearX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const nearY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const farX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const farY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  function handleMove(e) {
    if (reduceMotion || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    px.set(0);
    py.set(0);
  }

  const pop = (delay) => ({
    initial: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <motion.div
      ref={ref}
      className="hero-visual"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
    >
      <div className="hero-visual__halo" aria-hidden="true" />
      <div className="orbit orbit--outer" aria-hidden="true">
        <span />
      </div>
      <div className="orbit orbit--inner" aria-hidden="true">
        <span />
      </div>

      <motion.div className="glass portrait" style={{ rotateX, rotateY }}>
        <span className="beam" aria-hidden="true" />
        <div className="portrait__frame">
          <img src={profile.portrait} alt={profile.portraitAlt} width="821" height="1024" fetchPriority="high" />
          <motion.span
            className="portrait__glare"
            aria-hidden="true"
            style={{ '--gx': glareX, '--gy': glareY }}
          />
        </div>
        {status && (
          <p className="portrait__status">
            <span className="pulse-dot" aria-hidden="true" />
            {status}
          </p>
        )}
      </motion.div>

      <motion.a href="#projects" className="seal" aria-label="View selected projects" style={{ x: farX, y: farY }} {...pop(1.1)}>
        <svg viewBox="0 0 120 120" className="seal__text" aria-hidden="true">
          <defs>
            <path id="seal-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
          </defs>
          <text>
            <textPath href="#seal-circle">View selected work • View selected work •</textPath>
          </text>
        </svg>
        <span className="seal__core">
          <LuArrowDownRight aria-hidden="true" />
        </span>
      </motion.a>

      <motion.div className="float float--pipeline" style={{ x: nearX, y: nearY }} {...pop(1.25)}>
        <div className="glass float-card">
          <p className="label">Pipeline tracked</p>
          <p className="float-card__value">
            AED 15M<span>+</span>
          </p>
          <Sparkline />
        </div>
      </motion.div>

      <motion.div className="float float--turnaround" style={{ x: farX, y: farY }} {...pop(1.4)}>
        <div className="glass float-card float-card--delay">
          <p className="label">Reporting time</p>
          <p className="float-card__value">
            −70<span>%</span>
          </p>
          <Bars />
        </div>
      </motion.div>

      <motion.div className="float float--badge" style={{ x: nearX, y: nearY }} {...pop(1.55)}>
        <div className="glass float-chip">
          <span className="float-chip__icon" aria-hidden="true">
            <LuChartColumn />
          </span>
          {hero.badge}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Sparkline() {
  const line = 'M2 34 C 14 30, 20 32, 30 26 S 48 28, 58 20 S 76 22, 86 14 S 104 12, 118 5';
  return (
    <svg className="sparkline" viewBox="0 0 120 40" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--spark-a)', stopOpacity: 0.45 }} />
          <stop offset="1" style={{ stopColor: 'var(--spark-a)', stopOpacity: 0 }} />
        </linearGradient>
        <linearGradient id="spark-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--spark-a)' }} />
          <stop offset="1" style={{ stopColor: 'var(--spark-b)' }} />
        </linearGradient>
      </defs>
      <motion.path
        d={`${line} L118 40 L2 40 Z`}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="url(#spark-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 1.6, ease: EASE }}
      />
    </svg>
  );
}

function Bars() {
  const heights = [100, 84, 70, 52, 40, 30];
  return (
    <div className="bars" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.7 + i * 0.08, duration: 0.8, ease: EASE }}
        />
      ))}
    </div>
  );
}
