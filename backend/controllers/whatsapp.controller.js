import { sendEmailNotification, sendWhatsAppMessage } from '../services/notifications.js';
import nodemailer from "nodemailer";
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.mail.me.com';
const SMTP_PORT = process.env.SMTP_PORT/*  ? parseInt(process.env.SMTP_PORT, 10) : */ || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM/*  || `"${process.env.SMTP_FROM_NAME || 'Portfolio'}" <contact@${process.env.SMTP_FROM_DOMAIN}>` */;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

export async function postWhatsAppMessage(req, res) {
  const { subject, name, email = 'not provided (optional)', phone = 'Not provided', message } = req.body;

  try {
    const whatsappResponse = await sendWhatsAppMessage({ subject, name, email, phone, message });
    await sendEmailNotification({ subject, name, email, phone, message });

    return res.status(200).json({
      message: 'WhatsApp and email notifications sent successfully',
      whatsappResponse,
    });
  } catch (error) {
    console.error('Error sending notifications:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}

/* export async function postWhatsAppMessage(req, res) {
  const { subject, name, email, phone, message } = req.body; */

  /* QUICK and BASIC VALIDATION */
  /* if (!subject || !name || !phone || !message) {
    return res.status(400).json({ message: "Missing required fields: subject, name, phone or message; only email is optional" });
  }

  const whatsappMessage = `*Subject*: ${subject}\n\nHello, Elviro.\n\nMy name is *${name}*.\nEmail: ${email}\nPhone: ${phone}\n\n"${message}"`;

  const payload = {
    messaging_product: "whatsapp",
    to: phoneNumber, */
    /* type: 'template',
    template: {
      name: "hello_world",
      language: {
        code: "en_US"
      }
    } */

    /* switch to template message because is needed due to conversation window time span */

    /* type: 'text',
    text: {
      body: whatsappMessage */
    /* body: 'Hello, this is a test message from the WhatsApp Business API.' */
    /* } */

    /* contact_form_submission */

    /* type: 'template',
    template: {
      name: "portfolio_lead",
      language: {
        code: "en"
      },
      components: [
        {
          type: "body",
          parameters: [

            {
              type: "text",
              text: subject
            },
            {
              type: "text",
              text: name
            },
            {
              type: "text",
              text: email || 'Not provided'
            },
            {
              type: "text",
              text: phone
            },
            {
              type: "text",
              text: message
            }
          ]
        }
      ]
    }
  }

  console.log('Sending to WhatsApp:', JSON.stringify(payload, null, 2));
  console.log('BOT_ID:', botId);
  console.log('TOKEN:', bearerToken.slice(0, 10) + '...');

  try {
    const response = await fetch(whatsappApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    await sendEmailNotification({ subject, name, email, phone, message });

    return res.status(200).json({
      message: 'WhatsApp and email notifications sent successfully',
      data,
    });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
} */

export async function postQuickNotification(req, res) {
  const { contactInfo } = req.body;

  if (!contactInfo) {
    return res.status(400).json({ message: 'Missing required field: contactInfo' });
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

  await transporter.sendMail({
    from: SMTP_FROM,
    to: NOTIFY_EMAIL,
    subject: "Quick Contact Notification",
    html: `
      <span>Hello Elviro:</span>
      <br/><br/>
      <span>Contact Info: <b>${contactInfo}</b></span>
      <br/><br/>
      <span>Sent from Portfolio</span>`,
  });

  try {
    const data = await sendWhatsAppMessage({
      messaging_product: 'whatsapp',
      to: process.env.WHATSAPP_PHONE_NUMBER,
      type: 'template',
      template: {
        name: 'lead',
        language: {
          code: 'en',
        },
        components: [
          {
            type: 'body',
            parameters: [
              { type: 'text', text: contactInfo },
            ],
          },
        ],
      },
    });

    return res.status(200).json({
      message: 'Email and WhatsApp quick contact message sent successfully',
      data,
    });
  } catch (error) {
    console.error('Error sending WhatsApp quick contact message:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}
