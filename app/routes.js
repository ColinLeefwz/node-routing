var express = require('express'),
  router = express.Router(),
  path = require('path');

// export the router
module.exports = router;

// routerly routes to router

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get('/about', function(req, res) {
  res.json({message: "About page"});
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

router.post('/contact', function(req, res) {
  console.log(req.body);
  res.send("Hello " + req.body.name);
});

router.get('/@:username/:post_slug', function(req, res) {
  console.log(req.params);
  res.send("You are the best " + req.params.username);
});

// 404
router.use(function(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, "../404.html"));
});

