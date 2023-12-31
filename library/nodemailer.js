const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "mail.hover.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
