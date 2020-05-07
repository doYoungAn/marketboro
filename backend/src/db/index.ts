import { MongoClient, Db } from 'mongodb';
import environments from './../environments'

const { mongodb } = environments;

export let db: Db;

export const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(`mongodb://${mongodb.user}:${mongodb.password}@${mongodb.url}:${mongodb.port}`, { useUnifiedTopology: true }, (err, client) => {
            if (err) {
                console.log(err);
                reject();
            } else {
                console.log('in?????')
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
