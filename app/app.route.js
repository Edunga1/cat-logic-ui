const home = require('./routes/home');

module.exports = (routerFactory) => {
  const router = routerFactory();
  router.get('/', home);
  return router;
};
