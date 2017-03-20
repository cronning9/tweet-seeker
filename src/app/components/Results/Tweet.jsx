'use strict';

import React from 'react';

const Tweet = ({status}) => {
  const parseDate = dateString => {
    const arr = dateString.split(' ');
    return `${arr[0]} ${arr[1]} ${arr[2]}, ${arr[arr.length - 1]}`
  };

  return (
    <section className="tweet">
      <header>
        <div className="tweeter">
          <a href={"https://www.twitter.com/" + status.user }>
            <div className="link-content">
              <img src={status.profile_image_url_https}/>
              <h5>@{status.user}</h5>
            </div>
          </a>
        </div>
        <div className="tweet-meta">
          <h5>{parseDate(status.created_at)}</h5>
          <h5>{status.place.full_name}</h5>
        </div>
      </header>
      <div>
        <p>{status.text}</p>
      </div>
    </section>
  )
}

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