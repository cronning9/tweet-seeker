'use strict';

import React from 'react';

const Tweet = ({status}) => {
  const parseDate = dateString => {
    const arr = dateString.split(' ');
    return `${arr[0]} ${arr[1]} ${arr[2]}, ${arr[arr.length - 1]}`
  };

  const findTopParent = event => {
    let tweet = event.target.parentElement;
    while (!tweet || tweet.className !== "tweet") {
      tweet = tweet.parentElement;
    }

    return tweet;
  }

  const showDropdown = event => {
    let tweet = findTopParent(event);
    tweet.getElementsByClassName('retweet-dropdown')[0].style.display = 'block';
  };

  const sendRetweet = event => {
    // can't access events asynchronously in react -- https://facebook.github.io/react/docs/events.html#event-pooling
    const tweetElement = findTopParent(event);
    const retweetConfirmation = tweetElement.getElementsByClassName('retweet-confirmation')[0];
    const retweetFailure = tweetElement.getElementsByClassName('retweet-failure')[0];

    fetch(`twitter/retweet?id=${status.id}`,
      {
        method: 'POST',
        credentials: 'same-origin'
      }).then(res => res.json())
        .then(json => {
          console.log(json);
          if (json.sent) {
            retweetConfirmation.style.display = 'block';
          } else {
            retweetFailure.style.display = 'block';
          }
          tweetElement.getElementsByClassName('retweet-dropdown')[0].style.display = 'none';

        });
  };

  const hideDropdown = event => event.target.parentElement.style.display = 'none';

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
        <div className="button" onClick={sendRetweet}>Yes</div><div className="button" onClick={hideDropdown}>No</div>
      </div>
      <div className="retweet-response retweet-confirmation">
        <p>Retweet was a success!</p>
      </div>
      <div className="retweet-response retweet-failure">
        <p>Retweet failed. Contact the site administrator or try again.</p>
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