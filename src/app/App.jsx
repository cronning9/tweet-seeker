'use strict';

import React from 'react';

import SplashPage from './components/Splash/SplashPage.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    console.log("here");
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
      <main>
        { !this.state.loggedIn ? <SplashPage/> : <div>I'm logged In!</div> }
      </main>
    )
  }
}
