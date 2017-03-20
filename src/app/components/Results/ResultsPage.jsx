'use strict';

import React from 'react';

import userPropType from '../util/userShape';

const ResultsPage = ({user, results}) =>
  <section id="results-page">
    <div id="flex-container">
      <div className="results-header">
        <h1>Results for: <span>{results.search_metadata.query}</span></h1>
        <h4>Search completed in: <span>{results.search_metadata.completed_in}</span>seconds</h4>
      </div>
      <section className="results">

      </section>
    </div>
  </section>

ResultsPage.propTypes = {
  user: userPropType.isRequired,
  // the shape of this may vary if we support different query types
  results: React.PropTypes.object.isRequired
};

export default ResultsPage;
