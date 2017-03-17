'use strict';

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <h2>TrendSeeker</h2>
        <div id="login">
          <a href="twitter/login"><button id="login-button">Log in with Twitter</button></a>
        </div>
      </main>
    )
  }
}
