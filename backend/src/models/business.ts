import { Collection } from 'mongodb';
import { db } from './../db';

class Business {

    public static async getAll(): Promise<IBusiness[]> {
        try {
            const collection: Collection<IBusiness> = db.collection('businesses');
            const businesses: IBusiness[] = await collection.find({}).project({"_id": 0}).toArray();
            return businesses;
        } catch(e) {
            return Promise.reject(e);
        }
    }

}

export default Business;
