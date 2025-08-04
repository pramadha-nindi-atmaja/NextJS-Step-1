// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  timestamp: string;
};

// Handler function to respond with name and current timestamp
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    name: "Agung Priambod0", 
    timestamp: new Date().toISOString() 
  });
}
