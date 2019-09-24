const express = require('express');
const supertest = require('supertest');

const notFoundHandler = require('./middleware/notFoundHandler');

function testServer(route) {
  const app = express();
  // Catch 404
  app.use(notFoundHandler);
  route(app);
  return supertest(app);
}
  

module.exports = {
    testServer
} 
