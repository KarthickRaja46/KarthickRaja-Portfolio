import { useRef } from 'react';
import { useInView } from 'motion/react';
import { stats } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import StatChart from './ui/StatChart';
import './Stats.css';

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });

  return (
    <section className="stats" aria-label="Key numbers">
      <div className="container">
        <dl className="stats__grid" ref={ref}>
          {stats.map((stat, i) => (
            <Reveal
              className="glass glass--interactive stats__item"
              key={stat.label}
              delay={i * 0.08}
              onPointerMove={trackSpotlight}
            >
              <dt className="label">{stat.label}</dt>
              <dd>
                <Counter {...stat} />
                <StatChart type={stat.chart} play={inView} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
