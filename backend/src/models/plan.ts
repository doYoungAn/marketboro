import { Collection } from 'mongodb';
import { db } from './../db';

class Plan {

    public static async getAll(): Promise<IPlan[]> {
        try {
            const collection: Collection<IPlan> = db.collection('plans');
            const plans: IPlan[] = await collection.find({}).project({"_id": 0}).toArray();
            return plans;
        } catch(e) {
            return Promise.reject(e);
        }
    }

}

export default Plan;
