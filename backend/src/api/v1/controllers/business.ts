import { Request, Response } from 'express';

export const Get = async (req: Request, res: Response) => {
    try {

        res.status(200).send({
            success: true,
            businesses: [

            ]
        })
    } catch(e) {

    }
}
