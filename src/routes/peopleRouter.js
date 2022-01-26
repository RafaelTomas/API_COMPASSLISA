const peopleController = require('../app/controller/peopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => { 
  routes.post('/',peopleController.create);
  server.use(prefix, routes);

};