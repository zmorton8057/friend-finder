
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
    
}); //// <============== the end of the section it needs to be placed in
///////////////////////// This section below will need to be placed within the .get route above in order to be executed on submit. Only keeping it out for testing purposes.






//////////// Convert the User score into its own array of scores
var newUser = friendsArray.pop()
userScore = newUser.scores
////////// Converts the userScores from a string to a number
var userNumber = userScore.map(Number);
console.log("=================================")
console.log("User Number:")
console.log(userNumber)
console.log("=================================")
var holdArray = [];
for (var i = 0; i < friendsArray.length; i++){
    holdArray.push(friendsArray[i].scores);
}
console.log(holdArray)


for (var i = 0; i < holdArray.length; i++){
  var hold = holdArray[i]
  console.log(hold)
  var difference = hold.map(function(item, index){
    return item - userNumber[index]
  })
  console.log(difference)
}



module.exports = data;