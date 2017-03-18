'use strict';

import React from 'react';

import Header from './Header.jsx';

const SearchPage = ({user}) =>
  <section id="search-page">
    <Header user={user}/>
    <p>{user.username} is Logged in</p>
  </section>

SearchPage.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    displayName: React.PropTypes.string.isRequired,
    photos: React.PropTypes.array.isRequired
  }).isRequired
};

export default SearchPage;
