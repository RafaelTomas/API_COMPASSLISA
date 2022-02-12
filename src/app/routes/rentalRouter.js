const rentalController = require('../controllers/RentalController');
const validation = require('../validations/rental');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', validation , rentalController.create);
  routes.get('/', rentalController.find);
  routes.get('/:_id', rentalController.findById);
  routes.delete('/:_id', rentalController.delete);
  routes.put('/:_id', validation, rentalController.update);
  server.use(prefix, routes);
};
