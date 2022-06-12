import getMediaById from "@/lib/api/getMediaById";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const data:any = await getMediaById(req.query.id[0]?.toString(), "series", req.query.id[1] ?? 1);
    res.status(200).json({...data});
}