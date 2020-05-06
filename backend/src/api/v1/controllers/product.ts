import { Request, Response } from 'express';
import TempProduct from './../../../temp/product';

export const Get = async (req: Request, res: Response) => {
    try {
        const sendData = {
            success: true,
            product: TempProduct
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
        const sendData = {
            success: true,
            products: [
                TempProduct,
                TempProduct,
                TempProduct,
            ]
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