var app = require('express')(),
  port = process.env.PORT || 9090,
  morgan = require('morgan');

// configure
app.use(morgan('dev'));

// set routes
app.get('/', function(req, res) {
  res.send("ffffff");
});

// start the server
app.listen(port, function() {
  console.log('App is listened');
});

