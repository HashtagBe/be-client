import queryDegoodifier from '../helpers/queryDegoodifier';

export default class Widgets {
  constructor(client, network) {
    this._client = client;
    this._network = network;
  }

  list(params) {
    const path = `/${this._network}/${params.timeline ? 'timeline' : 'content'}`;
    return this._client.get(path, { params: queryDegoodifier(params, true) })
      .then(json => json.data);
  }

  save(widget_id) {
    return this._client.post(`/${this._network}/actions/save_widget`, { widget_id })
    .then(json => json.data);
  }

  unsave(widget_id) {
    return this._client.post(`/${this._network}/actions/unsave_widget`, { widget_id })
    .then(json => json.data);
  }

  accept(widget_id) {
    return this._client.post(`/${this._network}/actions/accept_invitation`, { widget_id })
    .then(json => json.data);
  }

  decline(widget_id) {
    return this._client.post(`/${this._network}/actions/decline_invitation`, { widget_id })
    .then(json => json.data);
  }
}
