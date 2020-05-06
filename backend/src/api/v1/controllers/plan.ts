import { Request, Response } from 'express';
import Plan from './../../../models/plan';

export const Get = async (req: Request, res: Response) => {
  try {
    await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
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
