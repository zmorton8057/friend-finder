
const data = require('express').Router();
const path = require('path');
var bodyParser = require('body-parser')
var allFriends = require(path.join(__dirname, '../data/friends.js'))
data.use(bodyParser.json());
data.use(bodyParser.urlencoded({
  extended: true
}));

data.route('/friends').get(function (req, res) {
    res.json(allFriends)
});



module.exports = data;