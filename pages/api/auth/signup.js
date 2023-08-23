import { connectToDatabase } from "helpers/connectDb";
import { hash } from "bcryptjs";

async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password, account } = req.body;
    // TODO: Validate email and password in the frontend
    // //Validate
    // if (!email || !email.includes("@") || !password) {
    //   res.status(422).json({ message: "Invalid Data" });
    //   return;
    // }
    //Connect with database
    const collection = await connectToDatabase("users", "active");
    //Check existing
    const check = await collection.findOne({ email });
    if (check) {
      res.status(422).json({ message: "User already has access" });
      return;
    }
    //Hash password
    const status = await collection.insertOne({
      email,
      password: await hash(password, 12),
      account,
    });
    //Send success response
    res.status(201).json({ message: "User created", ...status });
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
