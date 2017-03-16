'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const qs = require('querystring');
const request = require('request-promise');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

router.get('/login', passport.authenticate('twitter'));

router.get('/auth', passport.authenticate('twitter', {failureRedirect: '/',
                                                      failureFlash: 'Unable to authenticate user.'}),
           (req, res) => res.redirect('/'));

module.exports = router;
