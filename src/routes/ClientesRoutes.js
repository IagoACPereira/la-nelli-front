import { Router } from 'express';
import axios from 'axios';

const clientesRoutes = Router();

clientesRoutes
  .get('/clientes/adicionar', (_, res) => {
    res.status(200).render('clientes/adicionar.ejs', { urlApi: process.env.URLAPI });
  })
  .get('/clientes/', async (req, res) => {
    const token = req.cookies.authorization;
    try {
      const request = await axios.get(`${process.env.URLAPI}/clientes`, {
        headers: {
          Authorization: token,
        },
      });      
      
      res.status(200).render('clientes/exibir-todos.ejs', { clientes: request.data });
    } catch (error) {
      res.send('<h1>Erro</h1>' + error)
    }
  })
  .get('/cliente/', (_, res) => {
    res.status(200).render('clientes/exibir-um.ejs', { urlApi: process.env.URLAPI });
  });

export default clientesRoutes;
