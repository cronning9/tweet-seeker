'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const SearchPage = ({user}) =>
  <section id="search-page">
    <section id="searchbar">
      <h1>Find what's trending nearby</h1>
      <input type="text" placeholder="Look up a hashtag"/><div id="button">Submit</div>
    </section>
  </section>

SearchPage.propTypes = {
  user: userPropType.isRequired
};

export default SearchPage;