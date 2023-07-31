import { connectToDatabase } from "helpers/connectDb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const collection = await connectToDatabase("form", "responses");

      // Find all responses in the collection
      const allResponses = await collection.find({}).toArray();

      // Send a success response with the result data
      res.status(200).json({ success: true, data: allResponses });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "There was an error retrieving the form responses.",
    });
  }
}
