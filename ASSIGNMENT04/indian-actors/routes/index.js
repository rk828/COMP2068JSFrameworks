var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Indian Actors Website' });
});

// Routes for individual actors
router.get('/amitabh-bachchan', function(req, res, next) {
  res.render('amitabh-bachchan');
});

router.get('/shah-rukh-khan', function(req, res, next) {
  res.render('shah-rukh-khan');
});

router.get('/aamir-khan', function(req, res, next) {
  res.render('aamir-khan');
});

router.get('/ranbir-kapoor', function(req, res, next) {
  res.render('ranbir-kapoor');
});

module.exports = router;
