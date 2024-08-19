import axios from 'axios'

async function autenticacao(req, res, next) {
  const { token } = req.cookies;  
  try { 
    await axios.get(`${process.env.URLAPI}/`, {
      headers: {
        Authorization: token,
      }
    });
    
    next()
  } catch (error) {
    res.redirect('/login');
  }
}

export default autenticacao;
