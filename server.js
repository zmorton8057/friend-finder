const app = require('express')();
const routes = require("./app/routing/htmlRoutes.js");
const data = require('./app/routing/apiRoutes.js')
var PORT = process.env.PORT || 3000;

app.use('/', routes)

// app.use('/', data)

app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))