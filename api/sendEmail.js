import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.me.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "elvirodominguez@icloud.com",
      pass: "kgcf-adsi-syaq-futn",
    }
  }
);

(async () => {
  const info = await transporter.sendMail({
    from: '"Elviro Dominguez Soriano" <contact@elvirodominguez.com>',
    to: "contact@elvirodominguez.com",
    subject: "Test Email from PORTFOLIO",
    text: "This is a test email sent using Nodemailer with SMTP configuration.",
  });
  console.log("Message sent: %s", info.messageId);
})();
