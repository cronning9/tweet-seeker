'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const qs = require('querystring');
const request = require('request-promise');
const OAuth = require('oauth');

const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = 'http://localhost:3000';

const tokens = {};

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  CLIENT_KEY,
  CLIENT_SECRET,
  '1.0A',
  CALLBACK_URL,
  'HMAC-SHA1'
);

oauth.getOAuthRequestToken((err, token, tokenSecret, results) => {
  if (err) console.error(err);
  if (!results || !results['oauth_callback_confirmed']) {
    throw Error("There seems to have been a problem with your request");
  }
  tokens.appToken = token;
  tokens.appSecret = tokenSecret;
});

router.use('/login', (req, res) => {
    res.send(`https://api.twitter.com/oauth/authenticate?oauth_token=${qs.escape(tokens.appToken)}`);
});

module.exports = router;
