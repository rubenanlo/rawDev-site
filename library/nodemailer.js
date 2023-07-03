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

export const transportObject = {
  from: '"Ruben @" <info@rawdev.io>', // sender address
  to: "rubenanlo@gmail.com, randinocv@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};
