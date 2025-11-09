import nodemailer from "nodemailer";

export const postEmail = ("/api/postEmail", async (req, res) => {
  const { subject, name, email, phone, message } = req.body;

  console.log("Received email request:", { subject, name, email, phone, message });

  /* QUICK and BASIC VALIDATION */

  if (!subject || !name || !email || !message) {
    return res.status(400).json({ message: "Missing a required fields: subject, name, email or message; only phone is optional" });
  }

  /* if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ message: "SMTP credentials are not configured in environment variables." });
  } */

  /* if (subject.trim() === '' || name.trim() === '' || email.trim() === '' || message.trim() === '') {
    return res.status(400).json({ message: "Fields cannot be empty" });
  }

  const nameTrimmed = name.trim();
  const emailTrimmed = email.trim();
  const messageTrimmed = message.trim(); */

  /* if (typeof subject !== 'string' || typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ message: "Invalid input types" });
  }

  if (subject.length > 100 || name.length > 50 || email.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: "Input exceeds maximum length" });
  } */

  /* if (!namePattern.test(nameTrimmed)) {
    return res.status(400).json({ message: "El nombre solo puede contener letras, espacios, guiones o apóstrofos" });
  }
  const name = nameTrimmed
    .split(/(\s|-|')/)
    .map(part => {
      if (part === ' ' || part === '-' || part === "'") return part;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(''); */

  /* const autocapitalizeSentences = (text) => {
  return text.replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
  } */

  /* const email = email.toLowerCase();
  const name = name.replace(/(?:^|[\s'-])\w/g, char => char.toUpperCase());
  const message = message.trim(); */

  try {
    const transporter = nodemailer.createTransport({
      /* service: "iCloud", */
      host: "smtp.mail.me.com",
      port: 587, // true for 465, false for other ports
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* try {
      await transporter.verify();
      console.log("SMTP connection established successfully, with the following configuration:", {
        host: transporter.options.host,
        port: transporter.options.port,
        secure: transporter.options.secure,
        authUser: transporter.options.auth.user,
      });
    } catch (error) {
      console.error("Error establishing SMTP connection (Transporter verify failed):", error);
      return res.status(502).json({ message: "Failed to connect to SMTP server", details: error.message });
    } */

    await transporter.sendMail({
      from: "Elviro Dominguez Soriano <contact@elvirodominguez.com>",
      to: "contact@elvirodominguez.com",
      replyTo: email,
      subject: subject,
      /* text: `Hello Elviro:\n\nI'm ${name},\n\n"${message}"\n\n\nSent from my Portfolio`, */
      /* text: `Name: ${name}\n\nFrom Email: ${email}\n\n Message:\n\n"${message}"\n\n\n\nSent from my Portfolio`, */
      html: `
      <span>Hello Elviro:</span>
      <br/><br/>
      <span>I'm</span> <b>${name}</b>,
      <br/>
      <p>"${(message)}"</p>
      <br/>
      ${email}
      <br/><br/>
      ${phone ? `${phone}<br/><br/>` : ''}
      <span>Sent from Portfolio</span>`
      /* html: `
      <b>Name:</b> ${name}
      <br/><br/>
      <b>From Email:</b> &lt;${email}&gt;
      <br/><br/>
      <b>Message:</b> <p>"${(message)}"</p>
      <hr/>
      <br/>
      <span>Sent from my Portfolio</span>` */
    });

    {/* <p>${(message || '').replace(/\n/g, '<br/>')}</p><hr/><p>From: <strong>${name}</strong> &lt;${email}&gt;</p> */ }

    /*  console.log('Mail sent:', info.messageId || info.response); */
    res.status(200).json({ message: "Sent successfully" });
  } catch (err) {
    console.log("Email error: ", err);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
})
