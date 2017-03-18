'use strict';

import React from 'react';

const userPropType = React.PropTypes.shape({
  id: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photos: React.PropTypes.array.isRequired
});

export default userPropType;