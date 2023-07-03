import { transporter } from "library/nodemailer";
import { transportObject } from "library/nodemailer";

export const sendEmail = () => {
  // send mail with defined transport object
  transporter.sendMail(transportObject, (error) => {
    error ? console.log(error) : console.log("Message sent");
  });
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};
