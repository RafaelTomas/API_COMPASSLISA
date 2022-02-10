const rentalController = require('../controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', rentalController.create);
  routes.get('/', rentalController.find);
  routes.get('/:_id', rentalController.findById);
  routes.delete('/:_id', rentalController.delete);
  routes.put('/:_id', rentalController.update);
  server.use(prefix, routes);
};
