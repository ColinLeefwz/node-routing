var app = require('express')(),
  port = process.env.PORT || 9090,
  morgan = require('morgan'),
  bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))

// set routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/about', function(req, res) {
  res.json({message: "About page"});
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.post('/contact', function(req, res) {
  console.log(req.body);
  res.send("Hello " + req.body.name);
});

app.get('/@:username/:post_slug', function(req, res) {
  console.log(req.params);
  res.send("You are the best " + req.params.username);
});

// start the server
app.listen(port, function() {
  console.log('App is listened');
});

