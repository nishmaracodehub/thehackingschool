var express = require('express');
var router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('login')
});

router.post('/post', function (req, res, next) {

  let newUser = new User(req.body);

  // newUser.password = bcrypt.hashSync(req.body.password, 8);

  bcrypt.hash(req.body.password, 8, function (err, hash) {
    if (err) throw err;
    else {
      newUser.password = hash;
    }
  });

  newUser.save(function (err) {
    if (err) throw err;
    else {
      console.log("data saved in database");
      res.send("User saved in DB")
    }
  });

})

module.exports = router;
