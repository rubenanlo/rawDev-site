import { transporter } from "library/nodemailer";

export const sendEmail = async (body) => {
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  // send mail with defined transport object
  await new Promise((resolve, reject) =>
    transporter.sendMail(setTransportObject(body), (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      console.log("Message sent");
      resolve(info);
    })
  );
};

export const setTransportObject = (body) => {
  const {
    admin,
    email,
    verifyId,
    firstName,
    lastName,
    website,
    type,
    description,
  } = body;
  return {
    from: `rawDev <${process.env.EMAIL_USER}>`, // sender address
    to: admin ? process.env.EMAIL_USER : email, // list of receivers
    subject: admin ? "Somebody has submitted a form" : "Hello from rawDev!!", // Subject line
    html: admin
      ? htmlForAdmin(email, firstName, lastName, website, description, type)
      : htmlForUser(verifyId), // html body
  };
};

const htmlForAdmin = (
  email,
  firstName,
  lastName,
  website,
  description,
  type
) => `<div>
<p>Here are the details of the ${type} who submitted the form:</p>
<ul>
  <li>Name: ${lastName}, ${firstName}</li>
  <li>Email: ${email}</li>
  <li>Website: ${website}</li>
  <li>Description: ${description}</li>
</ul>
</div>`;

const htmlForUser = (verifyId) => `
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
                color: #ed872d;
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
          <form action="${process.env.NEXTAUTH_URL}/api/contact-form/${verifyId}" method="POST">
          <button
          type="submit"
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
          <p style="color:#ffffff; margin: 0 auto; text-decoration: none;">
          Verify
          </p>
          </form>
          </button>
          <li style="list-style-type: none" />
        </div>
      </div>
    </div>
  </body>
</html>
`;
