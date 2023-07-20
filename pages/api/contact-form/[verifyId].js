// Import your MongoDB connection function
import { connectToDatabase } from "helpers/connectDb";

// Handle the request
export default async function handler(req, res) {
  const { formId } = req.query;
  try {
    // Connect to your MongoDB database by accessing the "responses" collection
    const formsCollection = await connectToDatabase("responses");

    // Find the form in the collection based on the formId
    const form = await formsCollection.findOne({ formId });

    // If the form is not found, return an error message
    if (!form) {
      return res.json({ errorMessage: "Form not found" });
    }

    // Update the form or perform any other necessary operations
    // Set the "verified" field of the form to true
    await formsCollection.updateOne(
      { formId },
      { $unset: { verifyId: "" }, $set: { verified: true } }
    );

    // Return a success message
    res.redirect("/verification");
  } catch (error) {
    // If an error occurs, log the error and return an error message
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
