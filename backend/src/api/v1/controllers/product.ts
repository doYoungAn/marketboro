import { Request, Response } from 'express';
import { Collection } from 'mongodb';
import { db } from './../../../db';

export const Get = async (req: Request, res: Response) => {
    try {
        const collection = db.collection('products');
        const products = await collection.find({}).project({"_id": 0}).toArray();
        const sendData = {
            success: true,
            product: products[0]
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

export const GetList = async (req: Request, res: Response) => {
    try {
        await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
        const collection = db.collection('products');
        const products = await collection.find({}).project({"_id": 0}).toArray();
        if (req.query.vendorId === '1005') {
            const sendData = {
                success: true,
                products: []
            };
            res.status(200).send(sendData);
        } else {
            const sendData = {
                success: true,
                products: [
                    products[0],
                    products[0],
                    products[0],
                ]
            };
            res.status(200).send(sendData);
        }
    } catch(e) {
        const sendData = {
            success: false,
            error: e
        };
        res.status(200).send(sendData);
    }
}
