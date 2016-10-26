import join from '../helpers/pathJoin';

export default class FixedInterests {
  constructor(client) {
    this._client = client;
  }

  list({ network } = {}) {
    return this._client.get(join(network, '/fixed_interests'))
      .then(json => json.data.fixed_interests);
  }

  select({ fixed_interests, network } = {}) {
    return this._client.post(join(network, '/fixed_interests/select'), { fixed_interests })
    then(json => json.data)
  }
}
