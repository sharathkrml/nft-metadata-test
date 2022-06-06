// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import metadata from "../../public/1.json";
export default function handler(req, res) {
  res.status(200).json(metadata);
}
