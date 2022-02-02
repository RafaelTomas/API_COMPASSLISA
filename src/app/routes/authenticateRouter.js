const authenticateController = require('../controllers/AuthenticateController');
const validation = require('../validations/authenticate');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/',validation ,authenticateController.authenticate);
  server.use(prefix, routes);

};