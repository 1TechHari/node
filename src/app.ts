// App entry point
require('dotenv').config();
import express from 'express';
const app = express();
import config from './config';

async function startServer() {

    const app = express();
    await require('./loader').default({expressApp: app})
    app.listen(config.port, () => {       
    return console.log(`Express is listening at http://localhost:`,config.port);
    });
}

startServer();