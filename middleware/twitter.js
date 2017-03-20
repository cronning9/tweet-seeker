'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const qs = require('querystring');
const request = require('request-promise');
const passport = require('passport');

router.get('/login', passport.authenticate('twitter'));

router.get('/auth', passport.authenticate('twitter', {failureFlash: 'Unable to authenticate user.'}),
  (req, res) => {
    res.redirect('/')
  });

router.get('/get-user', (req, res) => {
  if (req.session.passport && req.session.passport.user) {
    const userData = req.session.passport.user;
    const sending = {
      loggedIn: true,
      user: {
        id: userData.id,
        username: userData.username,
        displayName: userData.displayName,
        photos: userData.photos,
        location: userData._json.location,
        status: userData._json.status
      }
    };
    res.json(sending);
  } else {
    res.json({
      loggedIn: false,
      user: null
    })
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
