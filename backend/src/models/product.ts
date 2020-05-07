import { Collection } from 'mongodb';
import { db, CollectionName } from './../db';

class Product {

    public static getById(productId: number): Promise<IProduct> {
        return new Promise<IProduct>((resolve, reject) => {
            const collection: Collection<IProduct> = db.collection(CollectionName.products);
            collection.aggregate<IProduct>([
                {
                    "$match": {
                        "id": productId
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
                    const products = await result.toArray();
                    products.length < 1 ? reject('not found') : resolve(products[0]);
                }
            });
        });
    }

    public static async getByVendorId(vendorId: number): Promise<IProduct[]> {
        return new Promise<IProduct[]>((resolve, reject) => {
            const collection: Collection<IProduct> = db.collection(CollectionName.products);
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
                    const products = await result.toArray();
                    resolve(products);
                }
            });
        });
    }

}

export default Product;
