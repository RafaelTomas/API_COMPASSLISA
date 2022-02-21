const rentalController = require('../controllers/RentalController');
const validation = require('../validations/rental');
const validationId = require('../validations/id');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', validation, rentalController.create);
  routes.get('/', rentalController.find);
  routes.get('/:_id', validationId, rentalController.findById);
  routes.delete('/:_id', validationId, rentalController.delete);
  routes.put('/:_id', validationId, validation, rentalController.update);
  server.use(prefix, routes);
};
