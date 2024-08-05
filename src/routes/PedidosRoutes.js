import { Router } from 'express';
import axios from 'axios';

const pedidosRouter = Router();

pedidosRouter
  .get('/pedidos/adicionar', (_, res) => {
    res.status(200).render('pedidos/adicionar.ejs', { urlApi: process.env.URLAPI });
  })
  .get('/pedidos/', async (req, res) => {
    const token = req.cookies.authorization;
    try {
      const request = await axios.get(`${process.env.URLAPI}/pedidos`, {
        headers: {
          Authorization: token,
        }
      });
      

      res.status(200).render('pedidos/exibir-todos.ejs', { pedidos: request.data })
    } catch (error) {
      res.status(500).send('<h1>Erro</h1>' + error)
    }
  })
  .get('/pedidos/:id', (_, res) => {
    res.status(200).render('pedidos/exibir-um.ejs', { urlApi: process.env.URLAPI })
  });

export default pedidosRouter;
