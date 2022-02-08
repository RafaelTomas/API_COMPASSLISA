const { Router } = require('express');
const carRouter = require('./carRouter');
const peopleRouter = require('./peopleRouter');
const authenticateRouter = require('./authenticateRouter');
const swaggerRouter = require('./swaggerRouter.js');

module.exports = (server) => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router());
    authenticateRouter(server, new Router());
    swaggerRouter(server, new Router());
    next();
  });
};
