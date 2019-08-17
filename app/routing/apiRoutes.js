const data = require('express').Router();
const path = require('path');

data.route('/friends').get(function (req, res) {
    res.sendFile(path.join(__dirname,'../data/friends.json'))
   
  });
  
  data.post('/api/send', (req, res) => {
   //function to send data to 'database' or js file with data 
  });

  module.exports = data;