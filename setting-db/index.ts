import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';
import businesses from './data/businesses.json';
import vendors from './data/vendors.json';
import products from './data/products.json';
import plans from './data/plans.json';

const config = {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    url: process.env.MONGODB_URL,
    port: parseInt(process.env.MONGODB_PORT as string)
}

MongoClient.connect(`mongodb://${config.user}:${config.password}@${config.url}:${config.port}`, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return
    } else {
        const db = client.db('marketboro');
        db.dropCollection('vendors');
        db.dropCollection('products');
        db.dropCollection('businesses');
        db.dropCollection('plans');
        db.collection('businesses').insertMany(businesses);
        db.collection('vendors').insertMany(vendors);
        db.collection('products').insertMany(products);
        db.collection('plans').insertMany(plans);
    }
})
