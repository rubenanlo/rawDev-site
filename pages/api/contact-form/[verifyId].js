// Import your MongoDB connection function
import { connectToDatabase } from "helpers/connectDb";

// Handle the request
export default async function handler(req, res) {
  const { verifyId } = req.query;
  try {
    // Connect to your MongoDB database by accessing the "responses" collection
    const formsCollection = await connectToDatabase("form", "responses");

    // Find the form in the collection based on the verifyId
    const form = await formsCollection.findOne({ verifyId });

    // If the form is not found, return an error message
    if (!form) {
      return res.json({ errorMessage: "Form not found" });
    }

    // Update the form or perform any other necessary operations
    // Set the "verified" field of the form to true
    await formsCollection.updateOne(
      { verifyId },
      { $unset: { verifyId: "" }, $set: { verified: true } }
    );

    // Perform a server-side redirect
    res.writeHead(302, { Location: "/verification" });
    res.end();
  } catch (error) {
    // If an error occurs, log the error and return an error message
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
