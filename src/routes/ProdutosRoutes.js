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
        urlApi: process.env.URLAPI,
        token,
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
  })
  .get('/atualizar/produto', async (req, res) => {
    const { token } = req.cookies;
    const { idProduto } = req.query;
    try {
      const categorias = await axios.get(`${process.env.URLAPI}/categorias-produtos?limite=100000`, {
        headers: {
          Authorization: token,
        },
      });

      const produto = await axios.get(`${process.env.URLAPI}/produtos/${idProduto}`, {
        headers: {
          Authorization: token,
        },
      });

      res.render('produtos/atualizar-produto.ejs', {
        categorias: categorias.data,
        produto: produto.data,
        urlApi: process.env.URLAPI,
        token,
        idProduto,
      });
    } catch (error) {
      res.send(error.message);
    }
  });
