const { Router } = require('express');
const carRouter = require('../routes/carRouter.js');
const peopleRouter = require('../routes/peopleRouter.js');
const authenticateRouter = require('../routes/authenticateRouter.js');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router());
    authenticateRouter(server, new Router());
    next();
  });
};