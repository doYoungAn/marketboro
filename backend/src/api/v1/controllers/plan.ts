import { Request, Response } from 'express';
import { db } from './../../../db';

export const Get = async (req: Request, res: Response) => {
  try {
    await new Promise((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
    const collection = db.collection('plans');
    const plans = await collection.find({}).project({"_id": 0}).toArray();
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
