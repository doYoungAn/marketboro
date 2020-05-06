import { Request, Response } from 'express';
import Vendor from './../../../models/vendor';
import utils from './../../../utils';

export const Get = async (req: Request, res: Response) => {
    try {
        if (req.query.wait === 'true') await utils.delay();
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
