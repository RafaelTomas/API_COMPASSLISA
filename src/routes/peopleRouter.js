const peopleController = require('../app/controller/peopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/',peopleController.create);
  // routes.get('/',peopleController.find);
  // routes.get('/:_id',peopleController.findById);
  // routes.delete('/:_id',peopleController.delete);
  // routes.put('/:_id',peopleController.update);
  server.use(prefix, routes);

};