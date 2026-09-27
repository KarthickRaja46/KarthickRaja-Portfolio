import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { LuMapPin, LuQuote } from 'react-icons/lu';
import { experience } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Experience.css';

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <section id="experience" className="section experience">
      <div className="section-glow section-glow--gold experience__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow={experience.eyebrow}
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <div className="timeline" ref={timelineRef}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div className="timeline__fill" style={{ scaleY: fill }} />
          </div>

          {experience.roles.map((role) => (
            <article className="role" key={role.company}>
              <Reveal className="glass role__aside">
                <span className="role__dot" aria-hidden="true" />
                <p className="role__period">{role.period}</p>
                <p className="role__company">{role.company}</p>
                <p className="role__location">
                  <LuMapPin aria-hidden="true" />
                  {role.location}
                  {role.mode && <span className="role__mode">{role.mode}</span>}
                </p>
              </Reveal>

              <Reveal className="glass glass--interactive role__card" delay={0.08} onPointerMove={trackSpotlight}>
                <h3 className="role__title">{role.title}</h3>
                {role.groups.map((group) => (
                  <div className="role__group" key={group.title}>
                    <h4 className="role__group-title">{group.title}</h4>
                    <ul className="role__points">
                      {group.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {role.testimonial && (
                  <figure className="role__quote">
                    <LuQuote className="role__quote-icon" aria-hidden="true" />
                    <blockquote>
                      <p>{role.testimonial.quote}</p>
                    </blockquote>
                    <figcaption>
                      {role.testimonial.name}
                      <span>{role.testimonial.role}</span>
                    </figcaption>
                  </figure>
                )}
                <ul className="tags role__stack" aria-label="Key technologies">
                  {role.stack.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
