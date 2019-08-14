const express = require('express')
const app = express()
var PORT = process.env.PORT || 3000;
const path = require('path')


console.log(__dirname + '/app/public/home.html')

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))