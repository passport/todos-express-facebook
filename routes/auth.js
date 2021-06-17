var express = require('express');
var passport = require('passport');
var db = require('../db');

var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res, next) {
    db.run('INSERT INTO federated_credentials (provider, subject) VALUES (?, ?)', [
      'https://www.facebook.com',
      req.user.id
    ], function(err) {
      if (err) { return next(err); }
      next();
    });
  },
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
