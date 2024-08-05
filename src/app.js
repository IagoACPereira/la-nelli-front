import express from 'express';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    cookieParser(''),
  )
  .set('view engine', 'ejs')
  .set('views', `./src/views`)
  .use('/public/', express.static(`./src/public/`));

routes(app);

export default app;
