'use strict';

import React from 'react';

import SplashPage from './components/Splash/SplashPage.jsx';
import LoggedIn from './components/Search/LoggedIn.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    fetch('twitter/get-user', {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.loggedIn) {
          this.setState(json)
        }
      })
  }

  render() {
    return (
      <div id="main">
        { !this.state.loggedIn ? <SplashPage/> : <LoggedIn user={this.state.user}/> }
      </div>
    )
  }
}
