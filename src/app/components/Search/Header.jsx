'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const Header = ({user}) =>
  <header id="header">
    <div id="title">#TweetSeeker</div>
    <div id="logout-wrapper">
      <img src={user.photos[0].value} />
      <a className="login-button" href="twitter/logout">
        <div id="logout">
          Log Out
        </div>
      </a>
    </div>
  </header>

Header.propTypes = {
  user: userPropType.isRequired
};

export default Header;
