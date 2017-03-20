'use strict';

import React from 'react';

import userPropType from '../util/userShape';

const ResultsPage = ({user, results}) => {
  return <h2>Hello world</h2>
};

ResultsPage.propTypes = {
  user: userPropType.isRequired,
  // the shape of this may vary if we support different query types
  results: React.PropTypes.object.isRequired
};

export default ResultsPage;
