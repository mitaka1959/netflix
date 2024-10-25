import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/prisma/lib/serverauth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Allow only GET requests
    if (req.method !== 'GET') {
        return res.status(405).end(); // Method not allowed
    }

    try {
        const { currentUser } = await serverAuth(req); // Assuming serverAuth is properly defined
        return res.status(200).json(currentUser); // Return the current user
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(400).end(); // Bad request
    }
}
