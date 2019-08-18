
const data = require('express').Router();
const path = require('path');
var bodyParser = require('body-parser')
data.use(bodyParser.json());
data.use(bodyParser.urlencoded({
  extended: true
}));

data.route('/friends').get(function (req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'))
});




module.exports = data;