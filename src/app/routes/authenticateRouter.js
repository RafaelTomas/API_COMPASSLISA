const authenticateController = require('../controllers/AuthenticateController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authenticateController.authenticate);
  server.use(prefix, routes);

};