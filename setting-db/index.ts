import { MongoClient } from 'mongodb';
import businesses from './businesses.json';
import vendors from './vendors.json';
import products from './products.json';
import plans from './plans.json';

MongoClient.connect('mongodb://root:rootpassword@13.124.99.233:27017', { useUnifiedTopology: true }, (err, client) => {
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
