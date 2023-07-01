import { responses } from "../../../data/responses";

export default function handler(req, res) {
  if (req.method === "POST") {
    const response = req.body.responseForm;
    responses.push(response);
    res.status(201).json(response);
  }
}
