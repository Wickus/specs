// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from "@/lib/cookies";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const prisma = new PrismaClient();
    const { body: data } = req;

    if (req.method === "POST") {
        const user = await prisma.users.create({ data });

        if (user) {
            res.setHeader("set-cookie", setCookie("id", user.userId.toString(), 1));
            res.status(200).json({ error: false, ...user });
        } else {
            res.status(200).json({ error: true, message: "Invalid username and password" });
        }
    } else {
        res.status(405);
    }
}
