'use strict';

import React from 'react';

import SplashPage from './components/Splash/SplashPage.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null,
      user: null
    }
  }

  render() {
    return (
      <main>
        { !this.state.loggedIn ? <SplashPage/> : <div>I'm logged In!</div> }
      </main>
    )
  }
}
