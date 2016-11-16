var express = require('express');
var router = express.Router();

/* GET error page. */
router.get('/', function(req, res, next) {
  res.render('error', { message: 'error', error: { status: 50000, stack: 'stacktrace' } });
});

module.exports = router;
