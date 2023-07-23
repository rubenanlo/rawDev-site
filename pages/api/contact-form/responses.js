import { v4 as uuidv4 } from "uuid";
import { connectToDatabase } from "helpers/connectDb";
import { sendEmail } from "helpers/sendEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    body.verifyId = uuidv4();

    try {
      const collection = await connectToDatabase("form", "responses");

      // Check if the email already exists
      const check = await collection.findOne({ email: body.email });

      if (check) {
        // Email already exists, return an error response
        return res
          .status(400)
          .json({ success: false, message: "Email already exists" });
      }

      // Email doesn't exist, insert the data into the collection
      const newUser = collection.insertOne(body);

      // Send the verification emails in parallel
      const emailPromises = [
        sendEmail({ ...body, admin: false }),
        sendEmail({ ...body, admin: true }),
      ];

      // Wait for both the insertion and email sending to complete
      await Promise.all([...emailPromises, newUser]);

      // Get the result of the insertion operation
      const result = await newUser;

      // Send a success response with the result data
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
