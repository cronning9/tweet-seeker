'use strict';

import React from 'react';

import SplashPage from './components/Splash/SplashPage.jsx';
import SearchPage from './components/Search/SearchPage.jsx';

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
      <main>
        { !this.state.loggedIn ? <SplashPage/> : <SearchPage user={this.state.user}/> }
      </main>
    )
  }
}
