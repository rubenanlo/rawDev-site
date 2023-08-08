import { connectToDatabase } from "helpers/connectDb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.body;

  if (req.method === "DELETE") {
    try {
      const collection = await connectToDatabase("form", "responses");

      let result;

      if (Array.isArray(id)) {
        const idArray = id.map((id) => new ObjectId(id));
        result = await collection.deleteMany({ _id: { $in: idArray } });

        if (result.deletedCount === 0) {
          return res
            .status(404)
            .json({ error: "No users found with these ids" });
        }
        return res.status(200).json({ message: "Successfully deleted users" });
      } else {
        // If the id variable is not an array, assume it's a string, which means deleting a single entry only
        result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "No user found with that id" });
        }
        return res.status(200).json({ message: "Successfully deleted user" });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "There was an error deleting the form responses.",
    });
  }
}
