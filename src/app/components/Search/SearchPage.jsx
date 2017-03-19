'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const SearchPage = ({user}) => {
  let coordinates;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(pos => coordinates = pos,
                                             err => console.warn(err));
  } else {
    console.log("No location available");
    console.log(navigator);
  }

  return (
    <section id="search-page">
      <section id="searchbar">
        <h1>Find what's trending nearby</h1>
        <input id="hashtag" type="text" placeholder="Look up a hashtag"/>
        <div className="button">Submit</div>
      </section>
    </section>
  );
}

SearchPage.propTypes = {
  user: userPropType.isRequired
};

export default SearchPage;