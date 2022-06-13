// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMainGenres } from "@/lib/api/getMainGenres";
import { config } from "@/lib/api/config";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse<{}>) {
	const {id} = req.query
	const {mainGenres} = config
	const action:any = await getMainGenres("tv_series", mainGenres[1]);
	const prisma = new PrismaClient();

	const watchList = await prisma.watchList.findMany({
		where:{
			userId:parseInt(id.toString())
		}
	});
	
	res.status(200).json({
		"Watch List":watchList,
		"Action":action,
	});
    
}