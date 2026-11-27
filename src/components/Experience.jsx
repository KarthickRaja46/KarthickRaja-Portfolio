import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { LuGraduationCap, LuMapPin, LuQuote } from 'react-icons/lu';
import { experience } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Experience.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "May 2026 – Nov 2026" -> "7 mos", counting both end months the way LinkedIn does.
function duration(period) {
  const [start, end] = period.split(/\s*[–-]\s*/).map((part) => {
    const [mon, year] = part.trim().split(/\s+/);
    return Number(year) * 12 + MONTHS.indexOf(mon.slice(0, 3));
  });
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) return null;
  const total = end - start + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [years && `${years} yr${years > 1 ? 's' : ''}`, months && `${months} mo${months > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' ');
}

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

          {experience.roles.map((role) => {
            const isBreak = role.kind === 'break';
            const span = duration(role.period);
            return (
            <article className={`role${isBreak ? ' role--break' : ''}`} key={role.id ?? role.company}>
              <Reveal className="glass role__aside">
                <span className="role__dot" aria-hidden="true" />
                <p className="role__when">
                  <span className="role__period">{role.period}</span>
                  {span && <span className="role__duration">{span}</span>}
                </p>
                <p className="role__company">{role.company}</p>
                {isBreak && (
                  <p className="role__location">
                    <LuGraduationCap aria-hidden="true" />
                    <span className="role__mode">Study break</span>
                  </p>
                )}
                {role.location && (
                  <p className="role__location">
                    <LuMapPin aria-hidden="true" />
                    {role.location}
                  </p>
                )}
                {(role.employment || role.mode) && (
                  <p className="role__badges">
                    {role.employment && <span className="role__mode">{role.employment}</span>}
                    {role.mode && <span className="role__mode">{role.mode}</span>}
                  </p>
                )}
              </Reveal>

              <Reveal
                className={`glass role__card${isBreak ? '' : ' glass--interactive'}`}
                delay={0.08}
                onPointerMove={isBreak ? undefined : trackSpotlight}
              >
                <h3 className="role__title">
                  {role.title}
                  <span className="sr-only">{isBreak ? ` — ${role.company}` : ` at ${role.company}`}</span>
                </h3>
                {role.points && (
                  <ul className="role__points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {role.groups?.map((group) => (
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
                {role.stack?.length > 0 && (
                  <ul className="tags role__stack" aria-label="Key technologies">
                    {role.stack.map((tech) => (
                      <li className="tag" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
