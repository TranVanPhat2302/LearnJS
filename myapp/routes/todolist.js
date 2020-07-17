var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('todo', { title: 'To do List' });
});

module.exports = router;
