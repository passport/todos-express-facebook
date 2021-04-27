var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/login',
  function(req, res) {
    res.render('login');
  });

router.get('/login/facebook',
  passport.authenticate('facebook'));

router.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
