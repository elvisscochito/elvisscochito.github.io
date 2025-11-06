import nodemailer from 'nodemailer';

console.log("Usuario:", process.env.SMTP_USER);
console.log("Contraseña:", process.env.SMTP_PASS ? "OK" : "VACÍA");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.me.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  }
);

(async () => {
  const info = await transporter.sendMail({
    from: '"Elviro Dominguez Soriano" <contact@elvirodominguez.com>',
    to: "contact@elvirodominguez.com",
    subject: "Test Email from Nodemailer",
    text: "This is a test email sent using Nodemailer with SMTP configuration.",
  });
  console.log("Message sent: %s", info.messageId);
})();
