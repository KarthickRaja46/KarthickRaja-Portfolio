import { process } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Process.css';

/* "How I work": four steps from requirements to a shipped report, plus daily tools. */
export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />

        <ol className="process__steps">
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              className="glass glass--interactive process__step"
              key={step.title}
              delay={i * 0.08}
              onPointerMove={trackSpotlight}
            >
              <span className="process__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
              {i < process.steps.length - 1 && (
                <span className="process__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__tools">
          <p className="label">{process.toolsLabel}</p>
          <ul className="tags" aria-label={process.toolsLabel}>
            {process.tools.map((tool) => (
              <li className="tag" key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
