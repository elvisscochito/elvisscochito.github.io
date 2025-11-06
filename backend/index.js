import cors from "cors";
/* import dotenv from "dotenv"; */
import express from "express";
import nodemailer from "nodemailer";

/* dotenv.config(); */

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/sendEmail", async (req, res) => {
  const { subject, name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 465,
      secure: true,
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
    console.error(err);
    res.status(500).json({ message: "Error sending message" });
  }
});

export default app;
