import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/prisma/lib/serverauth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Allow only GET requests
    if (req.method !== 'GET') {
        return res.status(405).end(); 
    }

    try {
        const { currentUser } = await serverAuth(req); 
        return res.status(200).json(currentUser); 
    } catch (error) {
        console.error(error); 
        return res.status(400).end(); 
    }
}
