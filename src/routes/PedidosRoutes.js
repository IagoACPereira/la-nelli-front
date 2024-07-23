import { Router } from 'express';

const pedidosRouter = Router();

pedidosRouter
  .get('/pedidos/adicionar', (_, res) => {
    res.status(200).render('pedidos/adicionar.ejs');
  })
  .get('/pedidos/', (_, res) => {
    res.status(200).render('pedidos/exibir-todos.ejs')
  })
  .get('/pedidos/:id', (_, res) => {
    res.status(200).render('pedidos/exibir-um.ejs')
  });

export default pedidosRouter;
