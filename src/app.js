import express from 'express';
import routes from './routes/index.js';

const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  )
  .set('view engine', 'ejs')
  .set('views', `./src/views`)
  .use('/static/', express.static(`./src/public/`));

routes(app);

export default app;
