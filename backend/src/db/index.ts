import { MongoClient, Db } from 'mongodb';

export let db: Db;

export const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://root:rootpassword@13.124.99.233:27017', { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.log(err);
                reject();
            } else {
                db = client.db('marketboro');
                resolve();
            }
        })
    })
}

export enum CollectionName {
    businesses  = 'businesses',
    plans       = 'plans',
    products    = 'products',
    vendors     = 'vendors'
}
