var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Developer! (get)"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello Developer! (post)"
  });
});

app.listen(port);
module.exports = app;
