
const data = require('express').Router();
const path = require('path');
var bodyParser = require('body-parser')
var friendsArray = require(path.join(__dirname, '../data/friends.js'))
data.use(bodyParser.json());
data.use(bodyParser.urlencoded({
  extended: true
}));

data.route('/friends').get(function (req, res) {
    res.json(friendsArray)
    
});

//////////// Convert the User score into its own array of scores
var newUser = friendsArray.pop()
console.log("NewUser:" + newUser)
userScore = newUser.scores
console.log(userScore)
////////// Converts the userScores from a string to a number
var number = userScore.map(Number);
console.log(number)


console.log(friendsArray)
    

module.exports = data;