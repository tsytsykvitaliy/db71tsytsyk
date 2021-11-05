var express = require('express');
var router = express.Router();

/* GET tv page. */
router.get('/', function(req, res, next) {
  res.render('tv', { title: 'Search Results' });
});

module.exports = router;
