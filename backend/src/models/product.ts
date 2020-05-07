import { Collection } from 'mongodb';
import { db, CollectionName } from './../db';

class Product {

    public static async getById(productId: number): Promise<IProduct> {
        try {
            const collection: Collection<IProduct> = db.collection(CollectionName.products);
            const products: IProduct[] = await collection
                .find({
                    "id": productId
                })
                .project({"_id": 0})
                .toArray();
            return products.length > 0 ? products[0] : Promise.reject('not found');
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public static async getByVendorId(vendorId: number): Promise<IProduct[]> {
        return new Promise<IProduct[]>((resolve, reject) => {
            const collection: Collection<IProduct> = db.collection(CollectionName.products);
            console.log('vendorId', vendorId)
            collection.aggregate<IProduct>([
                {
                    "$match": {
                        "vendorId": vendorId
                    }
                },
                {
                    "$lookup": {
                        "from": "vendors",
                        "localField": "vendorId",
                        "foreignField": "id",
                        "as": "vendor"
                    }
                },
                {
                    "$unwind": "$vendor"
                },
                {
                    "$project": {
                        "vendorId": 0,
                        "vendor._id": 0,
                        "vendor.description": 0,
                        "vendor.businessIds": 0
                    }
                }
            ], async (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const product = await result.toArray();
                    console.log(product);
                    resolve(product);
                }
            });
        });
    }

}

export default Product;
