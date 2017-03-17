'use strict';

import React from 'react';

const SearchPage = ({user}) =>
  <section id="search-page">
    <p>{user.username} is logged in</p>
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