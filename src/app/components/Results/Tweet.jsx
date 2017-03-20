'use strict';

import React from 'react';

const Tweet = ({status}) =>
  <div className="tweet">

  </div>


Tweet.propTypes = {
  status: React.PropTypes.shape({
    created_at: React.PropTypes.string,
    id: React.PropTypes.string,
    place: React.PropTypes.object,
    profile_image_url_https: React.PropTypes.string,
    text: React.PropTypes.string,
    user: React.PropTypes.string
  }).isRequired
};

export default Tweet;