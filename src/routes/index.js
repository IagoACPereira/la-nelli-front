function routes(app) {
  app
    .get('/', (_, res) => {
      res.status(200).render('inicio.ejs')
    });
}

export default routes;
