// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMainGenres } from "@/lib/api/getMainGenres";
import { config } from "@/lib/api/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse<{}>) {
	const {mainGenres} = config
	const comedy:any = await getMainGenres("tv_movie", mainGenres[0]);
	const action:any = await getMainGenres("tv_movie", mainGenres[1]);
	const drama:any = await getMainGenres("tv_movie", mainGenres[2]);
	
	res.status(200).json({
		"comedy":comedy,
		"action":action,
		"drama":drama
	});
    
}