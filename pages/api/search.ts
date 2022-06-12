// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import search from "@/lib/api/search";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const searchTerm = req.query.search as string;
	const searchData:any =  await search(searchTerm);
    res.status(200).json(searchData);
}
