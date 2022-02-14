const peopleController = require('../controllers/PeopleController');
const validation = require('../validations/people');
const validationId = require('../validations/id');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', validation, peopleController.create);
  routes.get('/', peopleController.find);
  routes.get('/:_id', validationId,peopleController.findById);
  routes.put('/:_id', validationId, validation, peopleController.update);
  routes.delete('/:_id', validationId, peopleController.delete);
  server.use(prefix, routes);
};
