import { Request, Response } from 'express';
import { Collection } from 'mongodb';
import { db } from './../../../db';

export const Get = async (req: Request, res: Response) => {
    try {
        const collection: Collection<IBusiness> = db.collection('businesses');
        const businesses = await collection.find({}).project({"_id": 0}).toArray();
        const sendData = {
            success: true,
            businesses
        };
        res.status(200).send(sendData);
    } catch(e) {
        const sendData = {
            success: false,
            error: e
        };
        res.status(200).send(sendData);
    }
}
