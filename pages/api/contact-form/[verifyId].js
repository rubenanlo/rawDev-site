import { connectToDatabase } from "helpers/connectDb";

export default async function handler(req, res) {
  const { verifyId } = req.query;
  try {
    const formsCollection = await connectToDatabase("form", "responses");

    // Find the form in the collection based on the verifyId and update it
    const updatedForm = await formsCollection.findOneAndUpdate(
      { verifyId },
      { $unset: { verifyId: "" }, $set: { verified: true } },
      { returnOriginal: false } // Set to false to return the updated document
    );

    // If the form is not found, return an error message
    if (!updatedForm.value) {
      return res.json({ errorMessage: "Form not found" });
    }

    // Perform a server-side redirect
    res.writeHead(302, { Location: "/verification" });
    res.end();
    // res.redirect doesn't work with vercel in production. That is why we are
    // using res.writeHead and res.end instead
  } catch (error) {
    // If an error occurs, log the error and return an error message
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
