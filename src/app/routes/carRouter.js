const carController = require('../controllers/CarController');
const validation = require('../validations/car');
const validationId = require('../validations/id');
const tokenBearer = require('../helpers/TokenBearer');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', tokenBearer, validation, carController.create);
  routes.get('/', tokenBearer, carController.find);
  routes.get('/:_id',tokenBearer, validationId, carController.findById);
  routes.delete('/:_id', tokenBearer, validationId, carController.delete);
  routes.put('/:_id', tokenBearer, validation, carController.update);
  routes.patch('/:_id', tokenBearer, validationId, validation, carController.updateOne);
  server.use(prefix, routes);
};
