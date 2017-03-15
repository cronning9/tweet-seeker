'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const twitter = require('./middleware/twitter');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twitter', twitter);

app.get('/', (req, res) => {
  try {
    res.send(path.join(__dirname, 'public', 'index.html'));
  } catch(err) {
    throw new Error(err);
  }
});

app.listen(3000, () => console.log("listening on 3000..."));
