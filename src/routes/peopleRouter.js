const peopleController = require('../app/controller/peopleController');
const validation = require('../app/validation/people');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/',validation,peopleController.create);
  routes.get('/',peopleController.find);
  routes.get('/:_id',peopleController.findById);
  routes.delete('/:_id',peopleController.delete);
  routes.put('/:_id',validation,peopleController.update);
  server.use(prefix, routes);

};