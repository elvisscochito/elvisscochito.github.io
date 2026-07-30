/* import nodemailer from "nodemailer"; */
import { sendWhatsAppMessage, sendEmailNotification } from '../services/notifications.js';

/* const SMTP_HOST = process.env.SMTP_HOST || "smtp.mail.me.com";
const SMTP_PORT = process.env.SMTP_PORT || 587 */ /*  ? parseInt(process.env.SMTP_PORT, 10) : 587 */;
/* const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const SMTP_FROM = process.env.SMTP_FROM *//*  || `${process.env.SMTP_FROM_NAME} <contact@${process.env.SMTP_FROM_DOMAIN}>` */;

/* const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

export async function sendEmailNotification({ subject, name, email = "not provided (optional)", phone = "not provided (optional)", message }) { */

  /* QUICK and BASIC VALIDATION */
  /* if (!subject || !name || !email || !message) {
    throw new Error("Missing required email fields");
  } */

  /* if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP credentials are not configured in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // Set to true if using port 465
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
} */

export async function postEmail(req, res) {
  const { subject, name, email, phone, message } = req.body;

  console.log("Received email request:", { subject, name, email, phone, message });

  try {
    await sendEmailNotification({ subject, name, email, phone, message });
    await sendWhatsAppMessage({ subject, name, email, phone, message });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.log("Email error: ", err);
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  }
}
