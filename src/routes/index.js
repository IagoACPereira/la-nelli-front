import pedidos from './PedidosRoutes.js'
import clientes from './ClientesRoutes.js'

function routes(app) {
  app
    .get('/', (_, res) => {
      res.status(200).render('inicio.ejs', { urlApi: process.env.URLAPI })
    })
    .get('/login', (_, res) => {
      res.status(200).render('login.ejs', { urlApi: process.env.URLAPI })
    })
    .use(
      pedidos,
      clientes,
    );
}

export default routes;
