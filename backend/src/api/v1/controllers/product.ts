import { Request, Response } from 'express';

export const Get = async (req: Request, res: Response) => {
    try {
        const sendData = {
            success: true,
            product: {}
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
            products: []
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
