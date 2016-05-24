import queryDegoodifier from '../helpers/queryDegoodifier';

export default class Widgets {
  constructor(client) {
    this._client = client;
  }

  list(params, network) {
    const path = `/${network}/${params.timeline ? 'timeline' : 'content'}`;
    return this._client.get(path, { params: queryDegoodifier(params, true) })
      .then(json => json.data);
  }

  save(widget_id, network) {
    return this._client.post(`/${network}/actions/save_widget`, { widget_id })
    .then(json => json.data);
  }

  unsave(widget_id, network) {
    return this._client.post(`/${network}/actions/unsave_widget`, { widget_id })
    .then(json => json.data);
  }

  accept(widget_id, network) {
    return this._client.post(`/${network}/actions/accept_invitation`, { widget_id })
    .then(json => json.data);
  }

  decline(widget_id, network) {
    return this._client.post(`/${network}/actions/decline_invitation`, { widget_id })
    .then(json => json.data);
  }
}
