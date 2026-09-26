import { LuArrowUpRight, LuBadgeCheck } from 'react-icons/lu';
import { FaGoogle, FaLinkedin, FaMicrosoft } from 'react-icons/fa6';
import { certifications, profile } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Certifications.css';

const issuerIcons = {
  Microsoft: FaMicrosoft,
  Google: FaGoogle,
  'Microsoft & LinkedIn': FaLinkedin,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="section-glow section-glow--azure certs__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <ul className="certs">
          {certifications.items.map((cert, i) => {
            const Logo = issuerIcons[cert.issuer];
            return (
              <Reveal
                as="li"
                className="glass glass--interactive cert"
                key={cert.title}
                delay={(i % 3) * 0.07}
                onPointerMove={trackSpotlight}
              >
                <div className="cert__top">
                  <span className="cert__logo" aria-hidden="true">
                    {Logo ? <Logo /> : cert.issuer}
                  </span>
                  <LuBadgeCheck className="cert__check" aria-hidden="true" />
                </div>
                <p className="cert__issuer">{cert.issuer}</p>
                <h3 className="cert__title">{cert.title}</h3>
                <p className="cert__sub">{cert.sub}</p>
                <p className="cert__id">{cert.credential}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="certs__cta">
          <a href={profile.linkedinCerts} className="btn btn--glass" target="_blank" rel="noopener noreferrer">
            View all verified credentials on LinkedIn <LuArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
