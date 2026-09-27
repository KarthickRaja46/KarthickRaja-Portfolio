import { LuArrowUp, LuMail, LuQuote } from 'react-icons/lu';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { profile, quote } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import './Footer.css';

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', href: profile.github },
  { icon: FaWhatsapp, label: 'WhatsApp', href: profile.whatsapp },
  { icon: LuMail, label: 'Email', href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-glow section-glow--violet footer__glow" aria-hidden="true" />
      <div className="container">
        <Reveal as="figure" className="glass footer__quote">
          <span className="footer__quote-icon" aria-hidden="true">
            <LuQuote />
          </span>
          <blockquote>
            <p>“{quote.text}”</p>
          </blockquote>
          <figcaption>— {quote.author}</figcaption>
        </Reveal>

        <div className="footer__bottom">
          <p className="footer__legal">
            © {new Date().getFullYear()} {profile.name} · {profile.role} · {profile.location}
          </p>
          <ul className="footer__socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="icon-btn"
                  aria-label={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#home" className="footer__top">
            Back to top <LuArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="footer__wordmark" aria-hidden="true" onPointerMove={trackSpotlight}>
        {profile.name}
      </p>
    </footer>
  );
}
