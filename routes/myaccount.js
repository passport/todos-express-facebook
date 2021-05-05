var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var router = express.Router();

/* GET my account page. */
// This route shows account information of the logged in user.  The route is
// guarded by middleware that ensures a user is logged in.  If not, the web
// browser will be redirected to `/login`.
router.get('/', ensureLoggedIn(), function(req, res, next) {
  res.render('myaccount', { user: req.user });
});

module.exports = router;
