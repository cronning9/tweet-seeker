'use strict';

import React from 'react';

import twlogin from '../../../assets/images/sign-in-with-twitter-link.png'

const SplashPage = () =>
  <main id="splash-page">
    <div id="splash-content">
      <h1>#TweetSeeker</h1>
      <p>Find #trending topics in your area. Join the conversation!</p>
      <a className="login-button" href="twitter/login">
        <div>
          <img src={twlogin} />
        </div>
      </a>
    </div>
  </main>

export default SplashPage;