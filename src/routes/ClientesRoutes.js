import { Router } from 'express';

const clientesRoutes = Router();

clientesRoutes
  .get('/clientes/adicionar', (_, res) => {
    res.status(200).render('clientes/adicionar.ejs', { urlApi: process.env.URLAPI });
  })
  .get('/clientes/', (_, res) => {
    res.status(200).render('clientes/exibir-todos.ejs');
  })
  .get('/clientes/:id', (_, res) => {
    res.status(200).render('clientes/exibir-um.ejs');
  });

export default clientesRoutes;
