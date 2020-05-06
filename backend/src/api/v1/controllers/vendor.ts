import { Request, Response } from 'express';
import { Collection } from 'mongodb';
import { db } from './../../../db';

export const Get = async (req: Request, res: Response) => {
    try {
        console.log('req', req.query);
        if (req.query.wait === 'true') {
            await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
        }
        const collection = db.collection('vendors');
        collection.aggregate([
            { "$lookup": {
                "from": "businesses",
                "localField": "businessIds",
                "foreignField": "id",
                "as": "businesses"
             }},
             {
                 "$project": {
                     "_id": 0,
                     "businessIds": 0,
                     "businesses._id": 0
                 }
             }
        ], async (err, result) => {
            console.log(err);
            console.log(await result.toArray());
            const vendors: IVendor[] = await result.toArray();
            const sendData = {
                success: true,
                vendors
            };
            res.status(200).send(sendData);
        });
    } catch(e) {
        const sendData = {
            success: false,
            error: e
        };
        res.status(200).send(sendData);
    }
}
