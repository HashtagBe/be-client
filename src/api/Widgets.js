import queryDegoodifier from '../helpers/queryDegoodifier';
import join from '../helpers/pathJoin';

export default class Widgets {
  constructor(client) {
    this._client = client;
  }

  _list(path, params) {
    return this._client.get(join(params.network, path), { params: queryDegoodifier(params, true) })
      .then(json => json.data);
  }

  list(params = {}) {
    return this._list('content', params);
  }

  timeline(params = {}) {
    return this._list('timeline', params);
  }

  search(params = {}) {
    return this._list('search', params);
  }

  save({ widget_id, network } = {}) {
    return this._client.post(join(network, 'actions/save_widget'), { widget_id })
    .then(json => json.data);
  }

  unsave({ widget_id, network } = {}) {
    return this._client.post(join(network, 'actions/unsave_widget'), { widget_id })
    .then(json => json.data);
  }

  accept({ widget_id, network } = {}) {
    return this._client.post(join(network, 'actions/accept_invitation'), { widget_id })
    .then(json => json.data);
  }

  decline({ widget_id, network } = {}) {
    return this._client.post(join(network, 'actions/decline_invitation'), { widget_id })
    .then(json => json.data);
  }
}
