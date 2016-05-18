export default class Actions {
  constructor(client, network) {
    this._client = client;
    this._network = network;
  }

  create(action, params) {
    return this._client.post(`/${this._network}/actions/${action}`, params)
    .then(json => json.data);
  }

  openWidget(widget_id) {
    return this.create('open_widget', { widget_id });
  }

  clickWidgetInterest(interest, widget_id) {
    return this.create('click_widget_interest', { interest, widget_id });
  }

  pageVisit(url, interests) {
    return this.create('visit', { url, interests });
  }
}
