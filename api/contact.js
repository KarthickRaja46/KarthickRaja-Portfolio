/*
 * Contact form endpoint (Vercel serverless function): POST /api/contact
 * Sends the message to profile.email over SMTP, with the visitor as reply-to.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   SMTP_USER  Gmail address that sends the mail, e.g. karthickrajacareer46@gmail.com
 *   SMTP_PASS  Gmail App Password (16 characters, needs 2-Step Verification)
 *   SMTP_HOST  optional, default smtp.gmail.com
 *   SMTP_PORT  optional, default 465
 *   SMTP_FROM  optional sender address, default SMTP_USER (needed for providers like Brevo,
 *              where the login is not an email you can send from)
 *   CONTACT_TO optional, default profile.email
 */
import nodemailer from 'nodemailer';
import { profile } from '../src/data/profile.js';

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Single-line fields go into mail headers, so strip line breaks.
const oneLine = (value) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { SMTP_USER, SMTP_PASS, SMTP_HOST = 'smtp.gmail.com', SMTP_PORT = '465', SMTP_FROM, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(503).json({ success: false, message: 'Email is not configured' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot filled in: pretend it worked so bots move on.
  if (body.botcheck) return res.status(200).json({ success: true });

  const name = oneLine(body.name);
  const email = oneLine(body.email);
  const subject = oneLine(body.subject);
  const message = String(body.message ?? '').trim();

  if (!name || !subject || !message || !EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, message: 'Please fill in every field with a valid email.' });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    subject.length > LIMITS.subject ||
    message.length > LIMITS.message
  ) {
    return res.status(400).json({ success: false, message: 'Message is too long.' });
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: `${profile.name} Portfolio`, address: SMTP_FROM || SMTP_USER },
      to: CONTACT_TO || profile.email,
      replyTo: { name, address: email },
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact mail failed:', error);
    return res.status(502).json({ success: false, message: 'Could not send the message.' });
  }
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
