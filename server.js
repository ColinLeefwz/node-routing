var app = require('express')(),
  port = process.env.PORT || 9090,
  morgan = require('morgan'),
  bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))

// set routes
var router = require('./app/routes');
app.use(router);

// start the server
app.listen(port, function() {
  console.log('App is listened');
});

