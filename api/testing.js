import dotenv from 'dotenv';
dotenv.config();

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "OK" : "VACÍA");
