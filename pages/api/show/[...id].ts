import getMediaById from "@/lib/api/getMediaById";
import getSeasonEpisodes from "@/lib/api/getSeasonEpisodes";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const prisma = new PrismaClient();
	const data:any = await getMediaById(req.query.id[0]?.toString(), "series");
	const episodes:any = await getSeasonEpisodes(req.query.id[0]?.toString(), req.query.id[1] ?? 1)
	const watchList = await prisma.watchList.findFirst({
		where:{
			mediaId:req.query.id[0]?.toString(),
			userId:parseInt(req.query.uid.toString()),
		}
	})
	const watchedEpisodes = await prisma.watchedMedia.findMany({
		where:{
			userId:parseInt(req.query.uid.toString()),
		}
	})

    res.status(200).json({...data, ...episodes, watchList:watchList?.mediaId && true, watchedEpisodes:watchedEpisodes});
}