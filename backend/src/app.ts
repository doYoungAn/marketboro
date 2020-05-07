import express, { Express, Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import api from './api';

// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
const swaggerDefinition = {
    info: { // API informations (required)
      title: 'Auth Service', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'Auth API' // Description (optional)
    },
    host: 'localhost:3000', // Host (optional)
    basePath: '/' // Base path (optional)
  };
  
  // Options for the swagger docs
  const options = {
    // Import swaggerDefinitions
    swaggerDefinition,
    // Path to the API docs
    apis: ['./routes/index.js', './users/index.js', './roles/index.js']
  };

class App {

    private _express: Express;

    constructor() {
        this._express = express();
        this._express.use(bodyParser.json());
        this._express.use(cors());
        this._express.use(morgan('dev'));
        this._express.use('/', express.static('./../frontend/dist'));
        this._express.use('/api', api);
        const swaggerSpec = swaggerJSDoc(options);
        this._express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this._express.get('*', (req: Request, res: Response) => {
          res.sendFile(path.join(__dirname, './../../frontend/dist/index.html'));
        });
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

