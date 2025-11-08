import nodemailer from "nodemailer";

export const testEmailAPI = ("/", (req, res) => {
  res.send("Hello from Email route.");
})

export const sendEmail = ("/api/sendEmail", async (req, res) => {
  const { subject, name, email, phone, message } = req.body;

  console.log("Received email request:", { subject, name, email, phone, message });

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
