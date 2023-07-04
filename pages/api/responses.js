import { connectToDatabase } from "helpers/connectDb";
import { sendEmail } from "helpers/sendEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    const to = body.email;

    try {
      const collection = await connectToDatabase("responses");
      const result = await collection.insertOne(body);
      // TODO: Uncomment the line below to send an email to the user
      sendEmail(to);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "This endpoint supports only POST method.",
    });
  }
}
