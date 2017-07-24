var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

//View Middleware
app.set('view engine', 'ejs');
app.set('views', './views');

//Static file Middleware
app.use(express.static('public'));

//Body parser Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(port, '127.0.0.1', () => {
  console.log("Server running locally");
});