var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('registration');
});

// add new user
router.post('/', function (req, res, next) {
  let user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  user.save(function (err) {
    if (err) {
      // you could avoid http status if you want. I put error 500 
      return res.status(500).send({
        success: false,
        message: 'User already exist!'
      });
    }
    req.session.email = req.body.email;
    res.redirect('../');
    return
  })
});

module.exports = router;


// .then( () => {
//   req.session.email = req.body.email;
//   res.redirect('../');
// }).catch(error => {
//   req.flash('error', error.toString());
// });
