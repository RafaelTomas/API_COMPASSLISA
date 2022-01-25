const carController = require('../app/controller/carController');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/',carController.create);
  routes.get('/',carController.find);
  
  server.use(prefix, routes);

};