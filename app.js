var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'ejs');
app.set('views', '/views');


app.listen(port, '127.0.0.1', () => {
  console.log("Server running locally");
});