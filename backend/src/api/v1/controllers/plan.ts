import { Request, Response } from 'express';
import TempPlan from './../../../temp/plan';

export const Get = async (req: Request, res: Response) => {
  try {
    await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
    const sendData = {
      success: true,
      plans: [
        TempPlan,
        TempPlan,
        TempPlan,
        TempPlan
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
