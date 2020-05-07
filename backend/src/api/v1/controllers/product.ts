import { Request, Response } from 'express';
import Product from './../../../models/product';
import utils from './../../../utils';

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
        const { vendorId } = req.query;
        if (isNaN(parseInt(vendorId as string))) throw('invalid vendorId')
        await utils.delay();
        const products = await Product.getByVendorId(parseInt(vendorId as string));
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
