'use strict';

import React from 'react';

import Tweet from './Tweet.jsx';

import userPropType from '../util/userShape';

const ResultsPage = ({user, results, clearSearchData}) =>
  <section id="results-page">
    <div id="flex-container">
      <div className="results-header">
        <h1>{results.statuses.length} Results for: <span>{decodeURIComponent(results.search_metadata.query)}</span></h1>
        <h4>Search completed in: <span>{results.search_metadata.completed_in}</span>seconds</h4>
      </div>
      <button className="button" onClick={clearSearchData}>Perform a new search</button>
      <section className="results">
        { results.statuses.map(result => <Tweet status={result} key={result.id}/>) }
      </section>
    </div>
  </section>

ResultsPage.propTypes = {
  user: userPropType.isRequired,
  // the shape of this may vary if we support different query types
  results: React.PropTypes.object.isRequired,
  clearSearchData: React.PropTypes.func.isRequired
};

export default ResultsPage;
