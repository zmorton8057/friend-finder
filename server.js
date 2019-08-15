const app = require('express')();
const routes = require("./app/routing/htmlRoutes.js");
var PORT = process.env.PORT || 3000;

app.use('/', routes)

console.log(__dirname + '/app/public/home.html')

app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))