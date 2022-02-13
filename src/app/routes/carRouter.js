const carController = require('../controllers/CarController');
const validation = require('../validations/car');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', carController.create);
  routes.get('/', carController.find);
  routes.get('/:_id', carController.findById);
  routes.delete('/:_id', carController.delete);
  routes.put('/:_id', validation, carController.update);
  routes.patch('/:_id', validation, carController.update);
  server.use(prefix, routes);
};
