import './env';
import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';

import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {V0_USER_MODELS} from './controllers/v0/model.index';


(async () => {
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.SERVER_PORT;

  const corsAllowedURL1 = process.env.CORS_ALLOWED_URL_1;
  const corsAllowedURL2 = process.env.CORS_ALLOWED_URL_2;

  const origin = [`${corsAllowedURL1}`];
  if (corsAllowedURL2 && corsAllowedURL2 !== '') {
    origin.push(`${corsAllowedURL2}`)
  }

  app.use(bodyParser.json());

  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin,
  }));

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );


  // Start the Server
  app.listen( port, () => {
    console.log( `server running on port ${port}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
