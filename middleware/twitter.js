'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const qs = require('querystring');
const request = require('request-promise');
const OAuth = require('oauth');
const OauthAsync = require('../lib/oauthAsync');

const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = 'http://localhost:3000';

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  CLIENT_KEY,
  CLIENT_SECRET,
  '1.0A',
  CALLBACK_URL,
  'HMAC-SHA1'
);

const aOauth = new OauthAsync(oauth);

router.use('/login', (req, res) => {
  aOauth.getRequestToken().then(tokens => {
    res.send(`https://api.twitter.com/oauth/authenticate?oauth_token=${qs.escape(tokens.appToken)}`);
  })

});

module.exports = router;
