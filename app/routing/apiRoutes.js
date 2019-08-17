const models = require('express').Router();
const server = require('../server.js')

models.get('/', server)

module.exports = models
