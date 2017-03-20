'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const SearchPage = ({user, searchTweets}) => {
  const submitSearch = event => searchTweets(document.getElementById('hashtag-input').value, coordinates);

  let coordinates;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(pos => coordinates = { latitude: pos.coords.latitude,
                                                                    longitude: pos.coords.longitude },
                                             err => console.warn(err));
  } else {
    console.log("No location available");
    console.log(navigator);
  }

  return (
    <section id="search-page">
      <section id="searchbar">
        <h1>Find out who's tweeting nearby</h1>
        <input id="hashtag-input" type="text" placeholder="Interested in a hashtag, word, or phrase?"/>
        <div className="button" onClick={submitSearch}>Submit</div>
      </section>
    </section>
  )
}

SearchPage.propTypes = {
  user: userPropType.isRequired,
  searchTweets: React.PropTypes.func.isRequired
};

export default SearchPage;
