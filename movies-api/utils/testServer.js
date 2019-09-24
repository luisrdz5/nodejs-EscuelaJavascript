const express = require('express');
const supertest = require('supertest');
const { logErrors, errorHandler, wrapErrors } = require('./middleware/errorHandlers')


function testServer(route) {
  const app = express();
  route(app);
  //errors middleware
  app.use(logErrors);
  app.use(wrapErrors);
  app.use(errorHandler);
  return supertest(app);
}

module.exports = testServer;
