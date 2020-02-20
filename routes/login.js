var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async (req, res) => {
  const user = await User.find({email: req.body.email}, {email:1, password: 1});
  console.log(user)
  if (req.body.email === user[0].email && req.body.password === user[0].password) {
    req.session.email = user[0].email;
    res.redirect('../')
  } else {
    //res.status(401).send('Wrong login or password');
    res.redirect('/login')

  }
  return email;
});

module.exports = router;
