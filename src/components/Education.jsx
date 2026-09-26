import { LuGraduationCap } from 'react-icons/lu';
import { education } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-glow section-glow--gold education__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading index="05" eyebrow={education.eyebrow} title={education.title} />

        <ol className="edu">
          {education.items.map((item, i) => (
            <Reveal
              as="li"
              className="glass glass--interactive edu__row"
              key={item.degree}
              delay={i * 0.06}
              onPointerMove={trackSpotlight}
            >
              <span className="edu__icon" aria-hidden="true">
                <LuGraduationCap />
              </span>
              <div className="edu__main">
                <p className="edu__period">{item.period}</p>
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__school">{item.school}</p>
              </div>
              <ul className="edu__details">
                {item.details.map((detail) => (
                  <li className="tag" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
