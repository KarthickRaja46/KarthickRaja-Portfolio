import { motion } from 'motion/react';
import { EASE } from './Reveal';

/* Decorative mini-visual for a stat tile; draws itself when `play` turns true. */
export default function StatChart({ type, play }) {
  const Chart = { bars: Bars, donut: Donut, line: Line, gauge: Gauge }[type];
  if (!Chart) return null;
  return (
    <svg className="stat-chart" viewBox="0 0 72 44" aria-hidden="true">
      <defs>
        <linearGradient id={`stat-grad-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--spark-a)' }} />
          <stop offset="1" style={{ stopColor: 'var(--spark-b)' }} />
        </linearGradient>
      </defs>
      <Chart play={play} fill={`url(#stat-grad-${type})`} />
    </svg>
  );
}

function Bars({ play, fill }) {
  const heights = [14, 22, 18, 30, 26, 36, 32, 42];
  return heights.map((h, i) => (
    <motion.rect
      key={i}
      x={i * 9}
      y={44 - h}
      width="6"
      height={h}
      rx="2"
      fill={fill}
      style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
      initial={{ scaleY: 0 }}
      animate={play ? { scaleY: 1 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.07 }}
    />
  ));
}

function Donut({ play, fill }) {
  // Six segments — one per certification.
  const r = 16;
  const c = 2 * Math.PI * r;
  const seg = c / 6;
  return (
    <g transform="translate(50 22) rotate(-90)">
      <circle r={r} fill="none" stroke="var(--line-strong)" strokeWidth="6" />
      {Array.from({ length: 6 }, (_, i) => (
        <motion.circle
          key={i}
          r={r}
          fill="none"
          stroke={fill}
          strokeWidth="6"
          strokeDasharray={`${seg - 3} ${c}`}
          strokeDashoffset={-i * seg}
          initial={{ opacity: 0 }}
          animate={play ? { opacity: 1 } : undefined}
          transition={{ duration: 0.3, delay: 0.25 + i * 0.12 }}
        />
      ))}
    </g>
  );
}

function Line({ play, fill }) {
  const d = 'M2 38 C 12 34, 16 36, 24 28 S 38 30, 46 18 S 60 14, 70 4';
  return (
    <>
      <motion.path
        d={`${d} L70 44 L2 44 Z`}
        fill={fill}
        opacity="0.18"
        initial={{ opacity: 0 }}
        animate={play ? { opacity: 0.18 } : undefined}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={play ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
      />
    </>
  );
}

function Gauge({ play, fill }) {
  // 270° arc gauge, filling to ~75% — hours given back each week.
  const arc = 'M 34 38 A 17 17 0 1 1 58 38';
  return (
    <g transform="translate(-10 0)">
      <path d={arc} fill="none" stroke="var(--line-strong)" strokeWidth="6" strokeLinecap="round" />
      <motion.path
        d={arc}
        fill="none"
        stroke={fill}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={play ? { pathLength: 0.75 } : undefined}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
      />
    </g>
  );
}
