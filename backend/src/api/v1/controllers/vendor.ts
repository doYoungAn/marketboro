import { Request, Response } from 'express';
import TempVendor from './../../../temp/vendor';

export const Get = async (req: Request, res: Response) => {
    try {
        console.log('req', req.query);
        if (req.query.wait === 'true') {
            await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
        }
        const sendData = {
            success: true,
            vendors: [
                TempVendor,
                { ...TempVendor, id: 1001 },
                { ...TempVendor, id: 1002 },
                { ...TempVendor, id: 1003 },
                { ...TempVendor, id: 1004 },
                { ...TempVendor, id: 1005 },
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
