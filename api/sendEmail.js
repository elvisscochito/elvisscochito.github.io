export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, name, email, message } = req.body;

  if (!subject || !name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "contact@elvirodominguez.com",
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Message sent:", info.messageId);
    return res.status(200).json({ message: "Sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    return res.status(500).json({ message: "Error sending message." });
  }
}
