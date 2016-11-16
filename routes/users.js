var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({users: [{id: 1, name: "eisenbart"}]});
});

module.exports = router;
