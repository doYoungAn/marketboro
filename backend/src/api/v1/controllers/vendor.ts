import { Request, Response } from 'express';
import Vendor from './../../../models/vendor';

export const Get = async (req: Request, res: Response) => {
    try {
        console.log('req', req.query);
        if (req.query.wait === 'true') {
            await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
        }
        const vendors = await Vendor.getAll();
        const sendData = {
            success: true,
            vendors
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
