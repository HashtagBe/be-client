export default class Interests {
  constructor(client) {
    this._client = client;
  }

  get(id, network) {
    return this._client.get(`${network}/interests/${encodeURIComponent(id)}`)
    .then(json => json.data.interest);
  }

  list(network) {
    return this._client.get(`${network}/interests`)
    .then(json => json.data.interests);
  }

  follow(interest, network) {
    return this._client.post(`/${network}/actions/follow_interest`, { interest })
    .then(json => json.data);
  }

  unfollow(interest, network) {
    return this._client.post(`/${network}/actions/unfollow_interest`, { interest })
    .then(json => json.data);
  }
}
