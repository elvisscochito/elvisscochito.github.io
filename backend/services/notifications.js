import 'dotenv/config';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.mail.me.com';
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || `"${process.env.SMTP_FROM_NAME || 'Portfolio'}" <contact@${process.env.SMTP_FROM_DOMAIN || 'example.com'}>`;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

const WHATSAPP_BOT_ID = process.env.WHATSAPP_BOT_ID;
const WHATSAPP_PHONE_NUMBER = process.env.WHATSAPP_PHONE_NUMBER;
const WHATSAPP_BEARER_TOKEN = process.env.WHATSAPP_BEARER_TOKEN;
const WHATSAPP_API_URL = `https://graph.facebook.com/v22.0/${WHATSAPP_BOT_ID}/messages`;

export async function sendEmailNotification({ subject, name, email = 'not provided (optional)', phone = 'Not provided', message }) {
  if (!subject || !name || !email || !message) {
    throw new Error('Missing required email fields');
  }

  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP credentials are not configured in environment variables.');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter.sendMail({
    from: SMTP_FROM,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject,
    html: `
      <span>Hello Elviro:</span>
      <br/><br/>
      <span>I'm</span> <b>${name}</b>,
      <br/>
      <p>"${message}"</p>
      <br/>
      <span>Email: <b>${email}</b></span>
      <br/>
      <span>Phone: <b>${phone}</b></span>
      <br/><br/>
      <span>Sent from Portfolio</span>`,
  });
}

export async function sendWhatsAppMessage(input) {
  if (!WHATSAPP_BOT_ID || !WHATSAPP_PHONE_NUMBER || !WHATSAPP_BEARER_TOKEN) {
    throw new Error('WhatsApp credentials are not configured in environment variables.');
  }

  const payload = input?.messaging_product ? input : {
    messaging_product: 'whatsapp',
    to: WHATSAPP_PHONE_NUMBER,
    type: 'template',
    template: {
      name: 'portfolio_lead',
      language: {
        code: 'en',
      },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: input.subject },
            { type: 'text', text: input.name },
            { type: 'text', text: input.email || 'not provided (optional)' },
            { type: 'text', text: input.phone || 'Not provided' },
            { type: 'text', text: input.message },
          ],
        },
      ],
    },
  };

  const response = await fetch(WHATSAPP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WHATSAPP_BEARER_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}
