const express = require('express');
const app = express();
const routes = require("./app/routing/htmlRoutes.js");
const data = require('./app/routing/apiRoutes.js');
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json(data));

app.use('/api', data)

app.use('/', routes)


app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))

