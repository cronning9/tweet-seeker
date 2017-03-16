'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const twitter = require('./middleware/twitter');

const SESSION_SECRET = process.env.SESSION_SECRET;
const CLIENT_KEY = process.env.CLIENT_KEY;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = 'http://localhost:3000/twitter/auth';

passport.use(new TwitterStrategy({
  consumerKey: CLIENT_KEY,
  consumerSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL
}, (token, tokenSecret, profile, callback) => callback(null, profile)));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/twitter', twitter);

app.get('/', (req, res) => {
  try {
    res.send(path.join(__dirname, 'public', 'index.html'));
  } catch(err) {
    throw new Error(err);
  }
});

app.listen(3000, () => console.log("listening on 3000..."));
