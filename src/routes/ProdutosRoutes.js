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
  });
