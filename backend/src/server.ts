import App from './app';
import { connect, db } from './db';

App.listening().then(() => {
    console.log('server listening 3000')
    connect().then(() => {
        console.log('pass?')
    }).catch((err) => {

    });
}).catch(() => {

});
