import { stats } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats" aria-label="Key numbers">
      <div className="container">
        <dl className="stats__grid">
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
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
