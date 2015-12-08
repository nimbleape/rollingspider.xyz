var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/fly.html');
});

app.use('/bower_components', express.static('bower_components'));
app.use(express.static('public'));

process.env.PORT = 56400;

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
