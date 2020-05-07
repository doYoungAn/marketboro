import { db, CollectionName } from './../db';

class Vendor {

    public static getAll(): Promise<IVendor[]> {
        return new Promise<IVendor[]>((resolve, reject) => {
            const collection = db.collection(CollectionName.vendors);
            collection.aggregate<IVendor>([
                {
                    "$lookup": {
                        "from": "businesses",
                        "localField": "businessIds",
                        "foreignField": "id",
                        "as": "businesses"
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "businessIds": 0,
                        "businesses._id": 0
                    }
                }
            ], async (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const vendors: IVendor[] = await result.toArray();
                    resolve(vendors);
                }
            });
        });
    }

    public static getByBusinessIds(businessIds: number[]): Promise<IVendor[]> {
        return new Promise<IVendor[]>((resolve, reject) => {
            const collection = db.collection(CollectionName.vendors);
            collection.aggregate<IVendor>([
                {
                    "$match": {
                        "businessIds": {
                            "$in": businessIds
                        }
                    }
                },
                {
                    "$lookup": {
                        "from": "businesses",
                        "localField": "businessIds",
                        "foreignField": "id",
                        "as": "businesses"
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "businessIds": 0,
                        "businesses._id": 0
                    }
                }
            ], async (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const vendors: IVendor[] = await result.toArray();
                    resolve(vendors);
                }
            });
        });
    }

}

export default Vendor;
