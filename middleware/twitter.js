'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request-promise');
const qs = require('querystring');
const passport = require('passport');

const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

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

router.get('/search', (req, res) => {
  const q = qs.escape(req.query.q);
  // TODO: may eventually make the radius adjustable by user.
  const geocode = `${qs.escape(req.query.geocode.latitude)},${qs.escape(req.query.geocode.longitude)},50mi`;
  const result_type = qs.escape('mixed');
  const count = qs.escape('50');

  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${q}` +
              `&geocode=${geocode}&result_type=${result_type}&count=${count}`;
  const oauth = {
    consumer_key: CLIENT_KEY,
    consumer_secret: CLIENT_SECRET,
    token: req.session.passport.user.token,
    token_secret: req.session.passport.user.tokenSecret
  };

  request({url, oauth, json: true})
    .then(response => res.send(response))
    .catch(err => console.error(Error(err)));
});

module.exports = router;
