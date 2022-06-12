// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getMediaById from "@/lib/api/getMediaById";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const data:any = await getMediaById(req.query.id.toString(), "movie");
    res.status(200).json({...data});
}