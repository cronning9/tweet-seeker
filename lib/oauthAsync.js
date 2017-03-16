'use strict';

class OauthAsync {
  constructor(oauth) {
    this.oauth = oauth;
  }

  // The two get***Token methods accept the same callback -- however, I haven't found
  // an elegant way of passing the Promise wrapper's resolve/reject to an externally-defined
  // callback.
  // TODO: DRY up token requests.
  getRequestToken() {
    return new Promise((resolve, reject) => {
      const tokens = {};
      this.oauth.getOAuthRequestToken((err, token, tokenSecret, results) => {
        if (err) console.error(err);
        if (!results || !results['oauth_callback_confirmed']) {
          reject("There seems to have been a problem with your request");
        }
        tokens.requestToken = token;
        tokens.tokenSecret = tokenSecret;
        resolve(tokens);
      });
    });
  }

  getAccessToken(oauthToken, oauthTokenSecret, oauthVerifier) {
    return new Promise((resolve, reject) => {
      const tokens = {};
      this.oauth.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier,
        (err, token, tokenSecret, results) => {
          if (err) console.error(err);
          if (!results) {
            reject("There seems to have been a problem with your request");
          }
          tokens.accessToken = token;
          tokens.accessTokenSecret = tokenSecret;
          resolve(tokens);
        });
    });
  }
}

module.exports = OauthAsync;
