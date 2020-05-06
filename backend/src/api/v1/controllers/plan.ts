import { Request, Response } from 'express';
import Plan from './../../../models/plan';
import utils from './../../../utils';

export const Get = async (req: Request, res: Response) => {
  try {
    await utils.delay();
    const plans: IPlan[] = await Plan.getAll();
    const sendData = {
      success: true,
      plans: [
        plans[0],
        plans[0],
        plans[0],
        plans[0]
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
