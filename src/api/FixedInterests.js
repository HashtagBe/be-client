export default class FixedInterests {
  constructor(client, network) {
    this._client = client;
    this._network = network;
  }

  get(id) {
    return this._client.get(`${this._network}/fixed_interests/${id}`)
    .then(json => json.data.interest);
  }

  list() {
    return this._client.get(`${this._network}/fixed_interests`)
    .then(json => json.data.interests);
  }
}
