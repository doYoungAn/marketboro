import { Request, Response } from 'express';
import TempData from './../../../temp/business';

export const Get = async (req: Request, res: Response) => {
    try {

        const sendData = {
            success: true,
            businesses: TempData
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
