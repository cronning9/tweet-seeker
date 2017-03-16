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
const CALLBACK_URL = 'http://localhost:3000/twitter/auth';

const tokensCache = {};

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
    tokensCache.requestToken = tokens.requestToken;
    tokensCache.tokenSecret = tokens.tokenSecret;
    res.send(`https://api.twitter.com/oauth/authenticate?oauth_token=${qs.escape(tokens.requestToken)}`);
  })

});

router.use('/auth', (req, res) => {
  res.redirect('/');
  const oauthToken = req.query.oauth_token;
  const oauthVerifier = req.query.oauth_verifier;

  console.log("request token: " + oauthToken);
  console.log("token verifier: " + oauthVerifier);

  if (oauthToken !== tokensCache.requestToken) {
    throw new Error("User token does not match app token; aborting.")
  }

  aOauth.getAccessToken(oauthToken, tokensCache.tokenSecret, oauthVerifier)
    .then(tokens => {
      console.log("access token: " + tokens.accessToken);
      console.log("access token secret: " + tokens.accessTokenSecret);
    });

});

module.exports = router;
