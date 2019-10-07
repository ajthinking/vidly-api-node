const express = require('express');
___REQUIRE_ROUTES_BLOCK___
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  ___USE_ROUTES_BLOCK___
  app.use(error);
}