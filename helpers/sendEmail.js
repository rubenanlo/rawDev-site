import { transporter } from "library/nodemailer";

export const sendEmail = (to) => {
  // send mail with defined transport object
  transporter.sendMail(setTransportObject(to), (error) => {
    error ? console.log(error) : console.log("Message sent");
  });
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};

export const setTransportObject = (to) => ({
  from: `Ruben Andino <${process.env.EMAIL_USER}>`, // sender address
  to: to, // list of receivers
  subject: "Hello from rawDev!!", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
});
