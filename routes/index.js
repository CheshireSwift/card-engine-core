var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET game in progress. */
router.get('/play', function(req, res, next) {
  res.render('play');
});

module.exports = router;
