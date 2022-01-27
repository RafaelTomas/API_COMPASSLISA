const { Router } = require('express');
const carRouter = require('../routes/carRouter.js');
const peopleRouter = require('../routes/peopleRouter.js');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router());
    //  peopleRouter(server, new Router());
    next();
  });
};