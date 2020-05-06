import { Request, Response } from 'express';
import Business from './../../../models/business';

export const Get = async (req: Request, res: Response) => {
    try {
        const businesses: IBusiness[] = await Business.getAll();
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
