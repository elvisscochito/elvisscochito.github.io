import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import emailRoutes from './routes/email.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Email sending API is running.");
})

app.use("/api", emailRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
