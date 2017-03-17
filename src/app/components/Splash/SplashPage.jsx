'use strict';

import React from 'react';

import twlogin from '../../../assets/images/sign-in-with-twitter-link.png'

const SplashPage = () =>
  <section id="splash-page">
    <div id="splash-content">
      <h1>TrendSeeker</h1>
      <p>Find #trending topics in your area. Join the conversation!</p>
      <a id="twitter-login" href="twitter/login">
        <div>
          <img src={twlogin} />
        </div>
      </a>
    </div>
  </section>

export default SplashPage;