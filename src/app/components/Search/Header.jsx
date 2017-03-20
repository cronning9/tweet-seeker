'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const Header = ({user, clearState}) =>
  <header id="header">
    <div id="title">#TweetSeeker</div>
    <div id="logout-wrapper">
      <img src={user.photos[0].value} />
      <a className="login-button" href="twitter/logout" onClick={clearState}>
        <div id="logout">
          Log Out
        </div>
      </a>
    </div>
  </header>

Header.propTypes = {
  user: userPropType.isRequired,
  clearState: React.PropTypes.func.isRequired
};

export default Header;
