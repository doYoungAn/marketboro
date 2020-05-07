import { Request, Response } from 'express';
import Vendor from './../../../models/vendor';
import utils from './../../../utils';

export const Get = async (req: Request, res: Response) => {
    try {
        console.log('in??')
        const { wait, businessIds = [] } = req.query;
        console.log(businessIds)
        if (wait === 'true') await utils.delay();
        if (isNaN(parseInt((businessIds as string[]).join(''))) && businessIds.length > 0) {
            throw('invalid query businessIds')
        };
        const vendors = businessIds.length > 0 ? await Vendor.getByBusinessIds((businessIds as string[]).map(businessId => parseInt(businessId))) : await Vendor.getAll();
        const sendData = {
            success: true,
            vendors
        };
        res.status(200).send(sendData);
    } catch(e) {
        console.log('catch', e)
        const sendData = {
            success: false,
            error: e
        };
        res.status(200).send(sendData);
    }
}
