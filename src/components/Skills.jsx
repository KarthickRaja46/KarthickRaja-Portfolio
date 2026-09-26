import { motion } from 'motion/react';
import { skills } from '../data/content';
import { useTilt } from '../lib/useTilt';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-glow section-glow--violet skills__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading index="04" eyebrow={skills.eyebrow} title={skills.title} subtitle={skills.subtitle} />

        <div className="skills__grid">
          {skills.groups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group: { icon: Icon, title, sub, description, items }, index }) {
  const tilt = useTilt(5);

  return (
    <Reveal className="skill-card-wrap" delay={index * 0.08}>
      <motion.div
        className="glass glass--interactive skill-card"
        style={tilt.style}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <div className="skill-card__head">
          <span className="skill-card__icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="skill-card__num" aria-hidden="true">
            0{index + 1}
          </span>
        </div>
        <h3 className="skill-card__title">{title}</h3>
        <p className="skill-card__sub">{sub}</p>
        <p className="skill-card__desc">{description}</p>
        <ul className="skill-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </Reveal>
  );
}
