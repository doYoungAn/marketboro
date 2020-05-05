import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';

class App {

    private _express: Express;

    constructor() {
        this._express = express();
        this._express.use(bodyParser.json());
        this._express.use(cors());
        this._express.use('/api', api);
    }

    public listening() {
        return new Promise((resolve, reject) => {
            this._express.listen(3000, (err) => {
                err ? reject() : resolve()
            });
        });
    }

}

const app = new App();

export default app;

