import nodemailer from 'nodemailer';

// Vercel serverless function: api/contact.js
// Environment variables required in Vercel:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, NOTIFY_EMAIL, SMTP_SECURE (optional: 'true' or 'false')

/* export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: subject || 'New contact from portfolio',
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${(message || '').replace(/\n/g, '<br/>')}</p><hr/><p>From: <strong>${name}</strong> &lt;${email}&gt;</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId || info.response);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    return res.status(500).json({ error: 'Error sending email' });
  }
} */

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,           // smtp.mail.me.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true', // false para 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,         // tu-correo@tudominio.com
      pass: process.env.SMTP_PASS          // App Password (16 chars)
    }
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: subject || 'Nuevo contacto',
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${(message || '').replace(/\n/g, '<br/>')}</p><hr/><p>From: <b>${name}</b> &lt;${email}&gt;</p>`
    });

    console.log('Mail sent:', info.messageId || info.response);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
