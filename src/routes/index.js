import autenticacao from '../middlewares/autenticacao.js';
import produtos from './ProdutosRoutes.js';

function routes(app) {
  app
    .get('/', autenticacao, (_, res) => {
      try {
        res.status(200).render('inicio.ejs', { urlApi: process.env.URLAPI })
      } catch (error) {
        res.send(error.message)
      }
    })
    .get('/login', (_, res) => {
      try {
        res.status(200).render('login.ejs', { 
          urlApi: process.env.URLAPI,
          mensagem: '',
        })
      } catch (error) {
        res.send(error.message);
      }
    })
    .use(
      autenticacao,
      produtos,
    );
}

export default routes;
