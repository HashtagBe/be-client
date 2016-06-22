import join from '../helpers/pathJoin';

export default class Actions {
  constructor(client) {
    this._client = client;
  }

  create({ action, network, ...params } = {}) {
    return this._client.post(join(network, 'actions', action), params)
    .then(json => json.data);
  }

  openWidget(params = {}) {
    return this.create({ action: 'open_widget', ...params });
  }

  clickWidgetInterest(params = {}) {
    return this.create({ action: 'click_widget_interest', ...params });
  }

  pageVisit(params = {}) {
    return this.create({ action: 'visit', ...params });
  }
}
