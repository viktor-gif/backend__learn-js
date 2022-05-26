var express = require('express');
var router = express.Router();
const User = require('../models/user')
const HttpError = require('../error')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) return next(err)
    res.json(users)
  })
});
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, (err, user) => {
    console.log(user)
    
    if (!user) {
      next(new HttpError(404, "Такого користувача не існує"))
    } else {
      if (err) return next(err)
      res.json(user)
    }
    
  })
});

module.exports = router;
