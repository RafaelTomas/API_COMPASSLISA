const carController = require('../controllers/CarController');
const validation = require('../validations/car');
const validationId = require('../validations/id');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', validation, carController.create);
  routes.get('/', carController.find);
  routes.get('/:_id', validationId, carController.findById);
  routes.delete('/:_id', validationId, carController.delete);
  routes.put('/:_id', validationId, validation, carController.update);
  routes.patch('/:_id', validationId, validation, carController.updateOne);
  server.use(prefix, routes);
};
