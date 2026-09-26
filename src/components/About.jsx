import { LuQuote } from 'react-icons/lu';
import { about, levelLabels } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-glow section-glow--violet about__glow" aria-hidden="true" />
      <div className="container">
        <div className="about__top">
          <SectionHeading index="01" eyebrow={about.eyebrow} title={about.title} />
          <Reveal className="glass about__intro" delay={0.15}>
            <span className="about__quote" aria-hidden="true">
              <LuQuote />
            </span>
            <p>{about.intro}</p>
          </Reveal>
        </div>

        <div className="about__grid">
          <Reveal className="glass glass--interactive about__card" onPointerMove={trackSpotlight}>
            <h3 className="about__card-title">Profile</h3>
            <dl className="spec">
              {about.details.map((row) => (
                <div className="spec__row" key={row.label}>
                  <dt className="label">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="glass glass--interactive about__card" delay={0.1} onPointerMove={trackSpotlight}>
            <h3 className="about__card-title">Core competencies</h3>
            <p className="about__card-intro">{about.competenciesIntro}</p>
            <ul className="competencies">
              {about.competencies.map(({ icon: Icon, label, level }) => (
                <li className="competency" key={label}>
                  <span className="competency__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="competency__label">{label}</span>
                  <span className="competency__level">
                    <span className="meter" aria-hidden="true">
                      {[1, 2, 3].map((step) => (
                        <span key={step} className={step <= level ? 'is-on' : undefined} />
                      ))}
                    </span>
                    {levelLabels[level]}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
