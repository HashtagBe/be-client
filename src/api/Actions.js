export default class Actions {
  constructor(client) {
    this._client = client;
  }

  create(action, { network, ...params }) {
    const basePath = network ? `/${network}` : '';
    return this._client.post(`${basePath}/actions/${action}`, params)
    .then(json => json.data);
  }

  openWidget({ widget_id, network }) {
    return this.create('open_widget', { network, widget_id });
  }

  clickWidgetInterest({ interest, widget_id, network }) {
    return this.create('click_widget_interest', { network, interest, widget_id });
  }

  pageVisit(params) {
    return this.create('visit', params);
  }
}
