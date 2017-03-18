'use strict';

import React from 'react';

const Header = ({user}) =>
  <header id="header">
    <div id="title">#TweetSeeker</div>
    <a className="login-button" href="twitter/logout">
      <img src={user.photos[0].value} />
      <div id="logout">
        Log Out
      </div>
    </a>
  </header>

Header.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    displayName: React.PropTypes.string.isRequired,
    photos: React.PropTypes.array.isRequired
  }).isRequired
};

export default Header;
