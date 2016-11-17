var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hier');
  res.sendFile(path.join(__dirname+'/../public/vue/dist/index.html'));
});

module.exports = router;