var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var router = express.Router();

/* GET my account page. */
router.get('/', ensureLoggedIn(), function(req, res, next) {
  res.render('myaccount', { user: req.user });
});

module.exports = router;
