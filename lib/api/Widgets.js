'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryDegoodifier = require('../helpers/queryDegoodifier');

var _queryDegoodifier2 = _interopRequireDefault(_queryDegoodifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widgets = function () {
  function Widgets(client, network) {
    _classCallCheck(this, Widgets);

    this._client = client;
    this._network = network;
  }

  _createClass(Widgets, [{
    key: 'list',
    value: function list(params) {
      var path = '/' + this._network + '/' + (params.timeline ? 'timeline' : 'content');
      return this._client.get(path, { params: (0, _queryDegoodifier2.default)(params, true) }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'save',
    value: function save(widget_id) {
      return this._client.post('/' + this._network + '/actions/save_widget', { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'unsave',
    value: function unsave(widget_id) {
      return this._client.post('/' + this._network + '/actions/unsave_widget', { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'accept',
    value: function accept(widget_id) {
      return this._client.post('/' + this._network + '/actions/accept_invitation', { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'decline',
    value: function decline(widget_id) {
      return this._client.post('/' + this._network + '/actions/decline_invitation', { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }]);

  return Widgets;
}();

exports.default = Widgets;