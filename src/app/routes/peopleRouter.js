const peopleController = require('../controllers/PeopleController');
const validation = require('../validations/people');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/',validation,peopleController.create);
  routes.get('/',peopleController.find);
  routes.get('/:_id',peopleController.findById);
  routes.delete('/:_id',peopleController.delete);
  routes.put('/:_id',validation,peopleController.update);
  server.use(prefix, routes);

};