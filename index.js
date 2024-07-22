import 'dotenv/config';
import app from './src/app.js';

const porta = process.env.PORTA;

app
  .listen(porta, () => console.log(`Front-end rodando na porta: http://localhost:${porta}/`));
