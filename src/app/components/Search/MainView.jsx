'use strict';

import React from 'react';

import Header from './Header.jsx';
import SearchPage from './SearchPage.jsx';
import ResultsPage from '../Results/ResultsPage.jsx';

import userPropType from '../util/userShape.js';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      searchResults: { }
    };

    this.searchTweets = this.searchTweets.bind(this);
    this.clearSearchData = this.clearSearchData.bind(this);
  }

  searchTweets(query, geocode) {
    fetch(`twitter/search?q=${encodeURIComponent(query)}&geocode[latitude]=${encodeURIComponent(geocode.latitude)}` +
          `&geocode[longitude]=${encodeURIComponent(geocode.longitude)}`,
      {
        method: 'GET',
        credentials: 'same-origin'
      }).then(res => res.json())
        .then(json => {
          this.setState({
            data: true,
            searchResults: json
          });
        });
  }

  clearSearchData() {
    this.setState({
      data: false,
      searchResults: { }
    })
  }

  render() {
    console.log(this.state);
    return (
      <main id="logged-in">
        <Header user={this.props.user} clearSearchData={this.clearSearchData} />
        { this.state.data ?
          <ResultsPage user={this.props.user}
                       results={this.state.searchResults}
                       clearSearchData={this.clearSearchData}/> :
          <SearchPage user={this.props.user} searchTweets={this.searchTweets} />
        }
      </main>
    )
  }
}

MainView.propTypes = {
  user: userPropType.isRequired
};
