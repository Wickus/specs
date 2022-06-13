// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from "@/lib/cookies";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const prisma = new PrismaClient();
    const { body: data, query } = req;

    switch (req.method) {
        case "POST":
            const show = await prisma.watchedMedia.create({ data });
			res.status(200).send(show)
            break;
        case "DELETE":
			const deletedShow = await prisma.watchedMedia.deleteMany({ 
				where:{
					mediaId:query.id.toString()
				}
			 });
			res.status(200).send(deletedShow)
            break;
        default:
            res.status(405);
    }
}
