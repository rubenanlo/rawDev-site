import { connectToDatabase } from "helpers/connectDb";
import { sendEmail } from "helpers/sendEmail";
import { createString } from "helpers/createUniqueId";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    body.verifyId = createString();

    try {
      const collection = await connectToDatabase("form", "responses");
      const result = await collection.insertOne(body);
      await sendEmail({ ...body, admin: false });
      await sendEmail({ ...body, admin: true });
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
