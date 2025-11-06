import cors from "cors";
/* import dotenv from "dotenv"; */
import express from "express";
import nodemailer from "nodemailer";

/* dotenv.config(); */

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Email sending API is running.");
});

app.post("/api/sendEmail", async (req, res) => {
  const { subject, name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: "elvirodominguez@icloud.com",
        pass: "kgcf-adsi-syaq-futn",
      },
    });

    await transporter.sendMail({
      from: "contact@elvirodominguez.com",
      to: "contact@elvirodominguez.com",
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ message: "Sent successfully" });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ message: err.message || "Error sending message" });
  }
});

export default app;
