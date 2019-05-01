var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

router.get('/resume', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Test' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Test' });
});

module.exports = router;
