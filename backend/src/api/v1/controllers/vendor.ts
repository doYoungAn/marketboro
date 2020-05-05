import { Request, Response } from 'express';
import TempVendor from './../../../temp/vendor';

export const Get = async (req: Request, res: Response) => {
    try {
        const sendData = {
            success: true,
            vendors: [
                TempVendor,
                TempVendor,
                TempVendor,
                TempVendor,
                TempVendor,
                TempVendor,
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
