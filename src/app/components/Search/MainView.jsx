'use strict';

import React from 'react';

import Header from './Header.jsx';
import SearchPage from './SearchPage.jsx'

import userPropType from '../util/userShape.js';

const MainView = ({user}) =>
  <main id="logged-in">
    <Header user={user}/>
    <SearchPage user={user}/>
  </main>

MainView.propTypes = {
  user: userPropType.isRequired
};

export default MainView;
