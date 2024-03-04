// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidated: boolean;
    message?: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.query.token !== process.env.REVALIDATE_TOKEN) {
        return res.json({ revalidated: false, message: "Anda tidak memiliki token atau token anda tidak sesuai" })
    } else {
        if (req.query.data) {
            try {
                await res.revalidate('/product-static')
                return res.json({ revalidated: true })
            } catch (error) {
                return res.status(500).send({ revalidated: false, message: "Data Mana TOD?" });
            }
        }
        return res.json({ revalidated: false, message: "Data Mana JEMBUD?" })
    }
}
