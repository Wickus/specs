// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from "@/lib/cookies";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const prisma = new PrismaClient();
    const { body } = req;

    if (req.method === "POST") {
        const user = await prisma.users.findFirst({
            where: {
                email: body.email,
                password: body.password,
            },
        });

        if (user) {
            res.setHeader("set-cookie", setCookie("id", user.userId.toString(), 1));
            res.status(200).json({ name: "John Doe", success: true });
        } else {
            res.status(200).json({ error: "Invalid", message: "Invalid username and password" });
        }
    } else {
        res.status(405);
    }
}
