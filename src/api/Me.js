export default class Me {
  constructor(client) {
    this._client = client;
  }

  get() {
    return this._client.get('/me')
      .then(json => json.data);
  }
}
