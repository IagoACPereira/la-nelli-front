import { Router } from 'express';
import axios from 'axios';

export default Router()
  .get('/produtos', async (req, res) => {
    const { token } = req.cookies;
    try {
      const produtos = await axios.get(`${process.env.URLAPI}/produtos`, {
        headers: {
          Authorization: token,
        },
      });

      res.render('produtos/produtos.ejs', {
        produtos: produtos.data,
      });
    } catch (error) {
      res.send(error.message);
    }
  })
  .get('/novo/produto', async (req, res) => {
    const { token } = req.cookies;
    try {
      const categorias = await axios.get(`${process.env.URLAPI}/categorias-produtos?limite=100000`, {
        headers: {
          Authorization: token,
        },
      });

      res.render('produtos/novo-produto.ejs', {
        categorias: categorias.data,
        urlApi: process.env.URLAPI,
        token,
      });
    } catch (error) {
      res.send(error.message);
    }
  });
