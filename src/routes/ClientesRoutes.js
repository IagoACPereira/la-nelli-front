import { Router } from 'express';
import axios from 'axios';

export default Router()
  .get('/clientes', async (req, res) => {
    const { token } = req.cookies;
    try {
      const clientes = await axios.get(`${process.env.URLAPI}/clientes`, {
        headers: {
          Authorization: token,
        },
      });

      res.render('clientes/clientes.ejs', {
        clientes: clientes.data,
        urlApi: process.env.URLAPI,
        token,
      });
    } catch (error) {
      res.send(error.message);
    }
  });