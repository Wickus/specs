// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const prisma = new PrismaClient();
	const {query} = req;
	const {id} = query;

    if(req.method === "GET"){
		const user = await prisma.users.findFirst({
			where:{
				userId:parseInt(id.toString())
			}
		})

		res.status(200).send(user)
	}else{
		res.status(405);
	}
}