'use strict';

import React from 'react';

import userPropType from '../util/userShape.js';

const SearchPage = ({user}) => {
  const constructSearch = (q, coords) => {
    const query = q;
    const geocode = coords;
    fetch('twitter/search', {
      method: 'GET',
      credentials: 'same-origin'
    }).then(res => res.json()).then(json => console.log(json));
  };

  const submitSearch = event => constructSearch(document.getElementById('hashtag-input').value, coordinates);

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
        <h1>Find what's trending nearby</h1>
        <input id="hashtag-input" type="text" placeholder="Look up a hashtag"/>
        <div className="button" onClick={submitSearch}>Submit</div>
      </section>
    </section>
  )
}

SearchPage.propTypes = {
  user: userPropType.isRequired
};

export default SearchPage;