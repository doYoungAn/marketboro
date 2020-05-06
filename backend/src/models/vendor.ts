import { db } from './../db';

class Vendor {

    public static getAll(): Promise<IVendor[]> {
        return new Promise<IVendor[]>((resolve, reject) => {
            const collection = db.collection('vendors');
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
                // console.log(err);
                // console.log(await result.toArray());
                if (err) {
                    reject(err);
                } else {
                    const vendors: IVendor[] = await result.toArray();
                    resolve(vendors);
                }
                // const sendData = {
                //     success: true,
                //     vendors
                // };
                // res.status(200).send(sendData);
            });
        })
    }

}

export default Vendor;
