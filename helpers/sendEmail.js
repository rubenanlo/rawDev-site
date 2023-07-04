import { transporter } from "library/nodemailer";

const html = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
    </style>
  </head>
  <body>
    <div
      style="
        padding: 1rem;
          background-color: #e5e7eb;
      "
    >
      <div style="max-width: 42rem; margin: 0 auto">
        <div
          style="
              background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 5rem;
          "
        >
          <h1
            style="
              font-size: 2.5rem;
                color: #934C0D;
              font-weight: bold;
              margin-bottom: 1.5rem;
            "
          >
            Please verify your email
          </h1>
          <p
            style="
              margin: 2rem 0 2rem 0;
              font-size: 1rem;
              line-height: 2rem;
                color: #111827;
            "
          >
            Hello there!
          </p>
          <p
            style="
              margin: 2rem 0 2rem 0;
              font-size: 1rem;
              line-height: 2rem;
                color: #111827;
            "
          >
            Thanks for contacting me. In order to start a discussion, I would
            appreciate if you could verify your email address. This way, I can
            minimize the risk of spoofing or scams.
          </p>
          <p
            style="
              margin: 2rem 0 2rem 0;
              font-size: 1rem;
              line-height: 2rem;
                color: #111827;
            "
          >
            Thanks in advance!
          </p>
          <p
            style="
              margin-bottom: 3rem;
                color: #111827;
            "
          >
            Ruben
          </p>
          <button
            style="
              cursor: pointer;
              background-color: #ed872d;
              color: #ffffff;
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 0.3rem;
              border: none;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;            "
          >
          <a href="www.google.com" style="color:#ffffff; margin: 0 auto; text-decoration: none;">
          Verify
          </a>
          </button>
          <li style="list-style-type: none" />
        </div>
      </div>
    </div>
  </body>
</html>
`;

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
  from: `rawDev <${process.env.EMAIL_USER}>`, // sender address
  to: to, // list of receivers
  subject: "Hello from rawDev!!", // Subject line
  html: html, // html body
});
