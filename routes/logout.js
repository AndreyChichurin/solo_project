const express = require('express');
const router = express.Router();
console.log('started logout');


router.get('/', async (req, res) => {
  req.session.destroy( ()=>{});
  res.redirect('../')
});

module.exports = router;
