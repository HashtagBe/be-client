export default class Interests {
  constructor(client, network) {
    this._client = client;
    this._network = network;
  }

  get(id) {
    return this._client.get(`${this._network}/interests/${id}`)
    .then(json => json.data.interest);
  }

  list() {
    return this._client.get(`${this._network}/interests`)
    .then(json => json.data.interests);
  }

  follow(interest) {
    return this._client.post(`/${this._network}/actions/follow_interest`, { interest })
    .then(json => json.data);
  }

  unfollow(interest) {
    return this._client.post(`/${this._network}/actions/unfollow_interest`, { interest })
    .then(json => json.data);
  }
}
