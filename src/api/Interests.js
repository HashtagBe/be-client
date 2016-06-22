import join from '../helpers/pathJoin';

export default class Interests {
  constructor(client) {
    this._client = client;
  }

  get({ interest, network } = {}) {
    return this._client.get(join(network, 'interests', encodeURIComponent(interest)))
    .then(json => json.data.interest);
  }

  list({ network } = {}) {
    return this._client.get(join(network, '/interests'))
    .then(json => json.data.interests);
  }

  follow({ interest, network } = {}) {
    return this._client.post(join(network, 'actions/follow_interest'), { interest })
    .then(json => json.data);
  }

  unfollow({ interest, network } = {}) {
    return this._client.post(join(network, 'actions/unfollow_interest'), { interest })
    .then(json => json.data);
  }
}
