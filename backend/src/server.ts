import dotenv from 'dotenv';
dotenv.config();
import App from './app';
import { connect } from './db';


const startServer = async () => {
    try {
        await connect();
        await App.listening();
        console.log('server listening 3000');
    } catch(e) {
        console.log('server exit');
        process.exit(0);
    }
};

startServer();
