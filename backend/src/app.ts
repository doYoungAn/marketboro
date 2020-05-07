import express, { Express, Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import api from './api';

class App {

    private _express: Express;

    constructor() {
        this._express = express();
        this._express.use(bodyParser.json());
        this._express.use(cors());
        this._express.use(morgan('dev'));
        this._express.use('/', express.static('./../frontend/dist'));
        this._express.use('/api', api);
        this._express.get('*', (req: Request, res: Response) => {
          res.sendFile(path.join(__dirname, './../../frontend/dist/index.html'));
        });
    }

    public listening(): Promise<void> {
        return new Promise((resolve, reject) => {
            this._express.listen(3000, (err) => {
                err ? reject() : resolve()
            });
        });
    }

}

const app = new App();

export default app;

