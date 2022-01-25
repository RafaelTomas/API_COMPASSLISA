const { Router } = require('express');
const carRouter = require('../routes/carRouter.js');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    //productRouter(server, new Router());
    next();
  });
};