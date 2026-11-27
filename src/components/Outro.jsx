import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import { LuDownload, LuMail, LuRotateCcw } from 'react-icons/lu';
import { outro, profile } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal, { EASE } from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Outro.css';

// The query, pre-split into syntax-highlight tokens: [text, className].
const QUERY = [
  ['SELECT', 'kw'], [' name, role, stack, status\n', ''],
  ['FROM', 'kw'], ['   analysts\n', ''],
  ['WHERE', 'kw'], ['  ', ''], ["'Power BI'", 'str'], [' = ', ''], ['ANY', 'fn'], [' (stack)\n', ''],
  ['  AND', 'kw'], ['  status = ', ''], ["'available'", 'str'], ['\n', ''],
  ['ORDER BY', 'kw'], [' impact ', ''], ['DESC', 'kw'], ['\n', ''],
  ['LIMIT', 'kw'], [' ', ''], ['1', 'num'], [';', ''],
];
const QUERY_TEXT = QUERY.map(([text]) => text).join('');
const CHARS_PER_TICK = 2;
const TICK_MS = 30;
const RUN_MS = 750;

/** Renders the first `count` characters of the query, keeping highlight classes intact. */
function typed(count) {
  const out = [];
  let left = count;
  for (const [i, [text, cls]] of QUERY.entries()) {
    if (left <= 0) break;
    const part = text.slice(0, left);
    left -= part.length;
    out.push(cls ? <span className={`sql-${cls}`} key={i}>{part}</span> : part);
  }
  return out;
}

const COLUMNS = ['name', 'role', 'stack', 'status'];

export default function Outro() {
  const consoleRef = useRef(null);
  const inView = useInView(consoleRef, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('idle'); // idle → typing → running → done
  const resume = profile.resumes?.[0];

  const run = useCallback(() => {
    if (reduceMotion) {
      setCount(QUERY_TEXT.length);
      setPhase('done');
      return;
    }
    setCount(0);
    setPhase('typing');
  }, [reduceMotion]);

  useEffect(() => {
    if (inView && phase === 'idle') run();
  }, [inView, phase, run]);

  useEffect(() => {
    if (phase === 'typing') {
      if (count >= QUERY_TEXT.length) {
        setPhase('running');
        return undefined;
      }
      const id = setTimeout(() => setCount((c) => Math.min(c + CHARS_PER_TICK, QUERY_TEXT.length)), TICK_MS);
      return () => clearTimeout(id);
    }
    if (phase === 'running') {
      const id = setTimeout(() => setPhase('done'), RUN_MS);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [phase, count]);

  const row = {
    name: profile.fullName,
    role: profile.role,
    stack: outro.stack,
    status: profile.availability,
  };

  return (
    <section id="outro" className="section outro">
      <div className="section-glow section-glow--violet outro__glow" aria-hidden="true" />
      <div className="container outro__inner">
        <SectionHeading eyebrow={outro.eyebrow} title={outro.title} subtitle={outro.subtitle} align="center" />

        <Reveal className="glass glass--interactive sqlcon" onPointerMove={trackSpotlight}>
          <div className="sqlcon__bar">
            <span className="sqlcon__lights" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="sqlcon__file">{outro.file}</span>
            <button
              type="button"
              className="sqlcon__rerun"
              onClick={run}
              disabled={phase === 'typing' || phase === 'running'}
            >
              <LuRotateCcw aria-hidden="true" />
              Run again
            </button>
          </div>

          <div className="sqlcon__body" ref={consoleRef}>
            <p className="sr-only">SQL query: {QUERY_TEXT}</p>
            <pre className="sqlcon__code" aria-hidden="true">
              <code>
                {typed(count)}
                {phase !== 'done' && <span className="sqlcon__caret" />}
              </code>
            </pre>

            <div className="sqlcon__status" role="status">
              {phase === 'running' && (
                <span className="sqlcon__running">
                  <span className="sqlcon__spinner" aria-hidden="true" />
                  Executing…
                </span>
              )}
              {phase === 'done' && <span className="sqlcon__ok">✓ {outro.matched}</span>}
            </div>

            <AnimatePresence>
              {phase === 'done' && (
                <motion.div
                  className="sqlcon__result"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <table className="sqlres">
                    <caption className="sr-only">Query result</caption>
                    <thead>
                      <tr>
                        {COLUMNS.map((col) => (
                          <th scope="col" key={col}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {COLUMNS.map((col) => (
                          <td data-label={col} key={col}>
                            {col === 'status' && <span className="pulse-dot" aria-hidden="true" />}
                            {row[col]}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal className="outro__actions" delay={0.1}>
          {resume && (
            <a className="btn btn--gold" href={resume.href} download={resume.fileName}>
              <LuDownload aria-hidden="true" />
              Download CV
            </a>
          )}
          <a className="btn btn--glass" href={`mailto:${profile.email}`}>
            <LuMail aria-hidden="true" />
            Email me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
