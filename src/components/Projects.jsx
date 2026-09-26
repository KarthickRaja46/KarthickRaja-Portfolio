import { motion } from 'motion/react';
import { LuArrowUpRight } from 'react-icons/lu';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile, projects } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import { useTilt } from '../lib/useTilt';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Projects.css';

export default function Projects() {
  const [lead, ...rest] = projects.featured;

  return (
    <section id="projects" className="section projects">
      <div className="section-glow section-glow--azure projects__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading index="03" eyebrow={projects.eyebrow} title={projects.title} subtitle={projects.subtitle} />

        <div className="projects__grid">
          <ProjectCard project={lead} index={0} wide />
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} delay={i * 0.08} />
          ))}
        </div>

        <div className="more-work">
          <SectionHeading
            as="h3"
            eyebrow={projects.more.eyebrow}
            title={projects.more.title}
            subtitle={projects.more.subtitle}
          />
          <ul className="more-work__list">
            {projects.more.items.map((item, i) => (
              <Reveal
                as="li"
                className="glass glass--interactive more-work__row"
                key={item.title}
                delay={i * 0.05}
                onPointerMove={trackSpotlight}
              >
                <span className="more-work__index">0{i + 1}</span>
                <div className="more-work__main">
                  <p className="more-work__badge">{item.badge}</p>
                  <h4 className="more-work__title">{item.title}</h4>
                  <p className="more-work__desc">{item.description}</p>
                </div>
                <ul className="tags more-work__tags" aria-label="Technologies">
                  {item.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="projects__cta">
          <a href={profile.linkedin} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn aria-hidden="true" /> View all projects on LinkedIn
          </a>
          <a href={profile.github} className="btn btn--glass" target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> Explore GitHub profile
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, wide = false, delay = 0 }) {
  const tilt = useTilt(wide ? 3 : 6);

  return (
    <Reveal as="article" className={`pcard-wrap ${wide ? 'pcard-wrap--wide' : ''}`} delay={delay}>
      <motion.div
        className={`glass glass--interactive pcard ${wide ? 'pcard--wide' : ''}`}
        style={tilt.style}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        {wide && <span className="beam" aria-hidden="true" />}
        <div className="pcard__media" style={{ aspectRatio: `${project.width} / ${project.height}` }}>
          <img
            src={project.image}
            alt={project.alt}
            width={project.width}
            height={project.height}
            loading="lazy"
            decoding="async"
          />
          <span className="pcard__open" aria-hidden="true">
            Open live dashboard <LuArrowUpRight />
          </span>
        </div>

        <div className="pcard__body">
          <p className="pcard__meta">
            <span className="pcard__index">0{index + 1}</span>
            {project.category}
          </p>
          <h3 className="pcard__title">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="pcard__link">
              {project.title}
            </a>
          </h3>
          <p className="pcard__desc">{project.description}</p>
          <ul className="tags" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <span className="link-arrow pcard__cta" aria-hidden="true">
            Live dashboard <LuArrowUpRight />
          </span>
        </div>
      </motion.div>
    </Reveal>
  );
}
