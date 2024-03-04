import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    try {
        let data;
        if (Array.isArray(req.query.product) && req.query.product[1]) {
            data = await retrieveDataById('products', req.query.product[1]);
        } else {
            data = await retrieveData('products');
        }

        res.status(200).json({ status: true, statusCode: 200, data });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ status: false, statusCode: 500, data: null });
    }
}
