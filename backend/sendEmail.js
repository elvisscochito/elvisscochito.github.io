import nodemailer from 'nodemailer';

// Vercel Serverless function handler
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'sendEmail endpoint OK' });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { subject, name, email, phone, message } = req.body || {};

  if (!subject || !name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields: subject, name, email, message' });
  }

  const SMTP_HOST = process.env.SMTP_HOST || 'smtp.mail.me.com';
  const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_FROM = process.env.SMTP_FROM || `"${process.env.SMTP_FROM_NAME || 'Portfolio'}" <contact@${process.env.SMTP_FROM_DOMAIN || 'example.com'}>`;
  const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ message: 'SMTP credentials are not configured in environment variables.' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    // helpful timeouts
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
  });

  try {
    // verify transporter (this will fail fast if credentials/DNS/network are wrong)
    await transporter.verify();
  } catch (err) {
    console.error('Transporter verify failed:', err);
    return res.status(502).json({ message: 'Failed to connect to SMTP server', details: err.message });
  }

  const mailOptions = {
    from: SMTP_FROM,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: subject || 'New contact from portfolio',
    html: `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr/>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p>Sent from portfolio contact form</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId || info.response);
    return res.status(200).json({ message: 'Sent successfully' });
  } catch (err) {
    console.error('sendMail error:', err);
    return res.status(500).json({ message: 'Failed to send email', details: err.message });
  }
}
