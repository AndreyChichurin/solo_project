var express = require('express');
var router = express.Router();
const haveSession = require('../midleware/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(!!req.session.email)
  isLogined = !!req.session.email;
  res.render('index', { isLogined });
});

module.exports = router;
