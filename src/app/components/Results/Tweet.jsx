'use strict';

import React from 'react';

const Tweet = ({status}) => {
  const parseDate = dateString => {
    const arr = dateString.split(' ');
    return `${arr[0]} ${arr[1]} ${arr[2]}, ${arr[arr.length - 1]}`
  };

  const showDropdown = event => {
    let tweet = event.target.parentElement;
    while (!tweet || tweet.className !== "tweet") {
      tweet = tweet.parentElement;
    }
    tweet.getElementsByClassName('retweet-dropdown')[0].style.display = 'block';
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
      <div className="buttons">
        <div onClick={showDropdown}><i className="fa fa3 fa-retweet" aria-hidden="true"></i> Retweet</div>
      </div>
      <div className="retweet-dropdown">
        <p>Are you sure you want to retweet this?</p>
        <div className="button">Yes</div><div className="button">No</div>
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