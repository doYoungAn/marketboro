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
        try {
            const collection: Collection<IProduct> = db.collection(CollectionName.products);
            const products: IProduct[] = await collection
                .find({})
                .project({"_id": 0})
                .toArray();
            return products.length > 0 ? [products[0],products[0],products[0],products[0]] : Promise.reject('not found');
        } catch(e) {
            return Promise.reject(e);
        }
    }

}

export default Product;
