const authenticateController = require('../app/controller/authenticateController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authenticateController.authenticate);
  server.use(prefix, routes);

};