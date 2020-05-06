import { Request, Response } from 'express';
import Product from './../../../models/product';

export const Get = async (req: Request, res: Response) => {
    try {
        const product: IProduct = await Product.getById(1);
        const sendData = {
            success: true,
            product
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
        const products = await Product.getByVendorId(0);
        if (req.query.vendorId === '1005') {
            const sendData = {
                success: true,
                products: []
            };
            res.status(200).send(sendData);
        } else {
            const sendData = {
                success: true,
                products
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
