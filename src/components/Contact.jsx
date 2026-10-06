import { useEffect, useState } from 'react';
import { LuArrowUpRight, LuCheck, LuCopy, LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { contact, profile } from '../data/content';
import { trackSpotlight } from '../lib/hooks';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import './Contact.css';

// Web3Forms access key (free, set in Vercel env). Without it the form uses mailto.
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const channels = [
  { icon: LuMapPin, label: 'Location', value: profile.locationLong },
  { icon: LuPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: LuMail, label: 'Career email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: LuMail,
    label: 'Personal email',
    value: profile.personalEmail,
    href: `mailto:${profile.personalEmail}`,
  },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat on WhatsApp', href: profile.whatsapp, external: true },
  { icon: FaGithub, label: 'GitHub', value: 'KarthickRaja46', href: profile.github, external: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(id);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (key) => String(data.get(key) || '').trim();

    // No form key configured: fall back to opening the visitor's mail app.
    if (!FORM_KEY) {
      const body = `Name: ${field('name')}
Email: ${field('email')}

Message:
${field('message')}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(field('subject'))}&body=${encodeURIComponent(body)}`;
      setStatus('Opening your email app with the message ready to send…');
      return;
    }

    setSending(true);
    setStatus('Sending…');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `Portfolio: ${field('subject')}`,
          from_name: field('name'),
          name: field('name'),
          email: field('email'),
          message: field('message'),
          botcheck: data.get('botcheck') ? true : '',
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus('Thanks — your message was sent. I’ll reply by email soon.');
    } catch {
      setStatus(`Sorry, that didn’t go through. Please email me directly at ${profile.email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <div className="contact__head">
          <SectionHeading index="07" eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />
          <Reveal className="contact__email" delay={0.15}>
            <a href={`mailto:${profile.email}`} className="contact__email-link">
              {profile.email}
              <LuArrowUpRight aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.personalEmail}`} className="contact__email-link">
              {profile.personalEmail}
              <LuArrowUpRight aria-hidden="true" />
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={copyEmail}
              aria-label={copied ? 'Email address copied' : 'Copy email address'}
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal as="ul" className="glass channels">
            {channels.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <span className="channel__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="channel__text">
                    <span className="channel__label">{label}</span>
                    <span className="channel__value">{value}</span>
                  </span>
                  {href && <LuArrowUpRight className="channel__arrow" aria-hidden="true" />}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      className="channel"
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="channel">{inner}</div>
                  )}
                </li>
              );
            })}
          </Reveal>

          <Reveal className="glass glass--interactive contact__form-card" delay={0.1} onPointerMove={trackSpotlight}>
            <span className="beam" aria-hidden="true" />
            <h3 className="contact__form-title">{contact.formTitle}</h3>
            <p className="contact__form-intro">{contact.formIntro}</p>
            <form className="form" onSubmit={handleSubmit}>
              {/* Honeypot: hidden from people, filled in by spam bots. */}
              <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="form__row">
                <label className="field">
                  <span className="field__label">Your name</span>
                  <input type="text" name="name" placeholder="e.g. Sarah Jenkins" autoComplete="name" required />
                </label>
                <label className="field">
                  <span className="field__label">Your email</span>
                  <input type="email" name="email" placeholder="e.g. sarah@company.com" autoComplete="email" required />
                </label>
              </div>
              <label className="field">
                <span className="field__label">Subject</span>
                <input type="text" name="subject" placeholder="e.g. Data Analyst Opportunity" required />
              </label>
              <label className="field">
                <span className="field__label">Message</span>
                <textarea name="message" rows="4" placeholder="Hi Karthick, I'd like to connect regarding…" required />
              </label>
              <button type="submit" className="btn btn--gold form__submit" disabled={sending}>
                {FORM_KEY ? 'Send message' : 'Compose email'} <LuSend aria-hidden="true" />
              </button>
              <p className="form__note" role="status">
                {status ||
                  (FORM_KEY
                    ? 'Goes straight to my inbox.'
                    : 'Prepares a direct email to Karthick Raja in your mail app.')}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
