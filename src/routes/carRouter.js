const carController = require('../app/controller/carController');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/',carController.create);
  routes.get('/',carController.find);
  routes.delete('/:_id',carController.delete);
  routes.put('/:_id',carController.update);
  server.use(prefix, routes);

};