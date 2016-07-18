import axios from 'axios';

import { Interests, Widgets, Me, Actions } from './api';

const DEFAULT_ORIGIN = 'https://network.hashtag.be';

const ACCESS_TOKEN_HEADER = 'X-Be-Access-Token';
const CLIENT_TYPE_HEADER = 'X-Be-Client-Type';

class BeClient {
  constructor(config = {}, tokenStorage) {
    this._client = axios.create({
      baseURL: `${config.origin || DEFAULT_ORIGIN}/api/v3/`,
      headers: { [CLIENT_TYPE_HEADER]: config.type },
    });

    if (config.requestInterceptor) this._client.interceptors.request.use(config.requestInterceptor, config.errorInterceptor);
    if (config.responseInterceptor) this._client.interceptors.response.use(config.responseInterceptor, config.errorInterceptor);

    this._tokenStorage = tokenStorage;
    if (tokenStorage && tokenStorage.get()) this.authenticate(tokenStorage.get());

    this.interests = new Interests(this._client);
    this.widgets = new Widgets(this._client);
    this.me = new Me(this._client);
    this.actions = new Actions(this._client);
  }

  authenticate(token) {
    if (this._tokenStorage) this._tokenStorage.set(token);
    this._client.defaults.headers[ACCESS_TOKEN_HEADER] = token;
    return Promise.resolve();
  }

  login(email, password) {
    return this._client.post('/session', { email, password })
      .then(json => {
        if (!json.data.token) return Promise.reject(new Error('Invalid auth response'));

        this.authenticate(json.data.token);
        return json.data.token;
      });
  }

  logout() {
    return this._client.delete('/session').then((json) => {
      if (this._tokenStorage) this._tokenStorage.clear();
      delete this._client.defaults.headers[ACCESS_TOKEN_HEADER];
      return json;
    });
  }
}

export default BeClient;
module.exports = BeClient;
