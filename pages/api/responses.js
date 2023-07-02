import clientPromise from "library/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;

    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGO_DB); // Replace with your database name

      const col = db.collection("responses");

      const result = await col.insertOne(body);

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
