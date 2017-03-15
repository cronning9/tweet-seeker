'use strict';

class OauthAsync {
  constructor(oauth) {
    this.oauth = oauth;
  }

  getRequestToken() {
    return new Promise((resolve, reject) => {
      const tokens = {};
      this.oauth.getOAuthRequestToken((err, token, tokenSecret, results) => {
        if (err) console.error(err);
        if (!results || !results['oauth_callback_confirmed']) {
          reject("There seems to have been a problem with your request");
        }

        tokens.appToken = token;
        tokens.appSecret = tokenSecret;
        resolve(tokens);
      });
    });
  }
}

module.exports = OauthAsync;