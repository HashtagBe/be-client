'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions(client, network) {
    _classCallCheck(this, Actions);

    this._client = client;
    this._network = network;
  }

  _createClass(Actions, [{
    key: 'create',
    value: function create(action, params) {
      return this._client.post('/' + this._network + '/actions/' + action, params).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'openWidget',
    value: function openWidget(widget_id) {
      return this.create('open_widget', { widget_id: widget_id });
    }
  }, {
    key: 'clickWidgetInterest',
    value: function clickWidgetInterest(interest, widget_id) {
      return this.create('click_widget_interest', { interest: interest, widget_id: widget_id });
    }
  }, {
    key: 'pageVisit',
    value: function pageVisit(url, interests) {
      return this.create('visit', { url: url, interests: interests });
    }
  }]);

  return Actions;
}();

exports.default = Actions;