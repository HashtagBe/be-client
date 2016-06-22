'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryDegoodifier = require('../helpers/queryDegoodifier');

var _queryDegoodifier2 = _interopRequireDefault(_queryDegoodifier);

var _pathJoin = require('../helpers/pathJoin');

var _pathJoin2 = _interopRequireDefault(_pathJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widgets = function () {
  function Widgets(client) {
    _classCallCheck(this, Widgets);

    this._client = client;
  }

  _createClass(Widgets, [{
    key: '_list',
    value: function _list(path, params) {
      return this._client.get((0, _pathJoin2.default)(params.network, path), { params: (0, _queryDegoodifier2.default)(params, true) }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'list',
    value: function list() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._list('content', params);
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._list('timeline', params);
    }
  }, {
    key: 'search',
    value: function search() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._list('search', params);
    }
  }, {
    key: 'save',
    value: function save() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var widget_id = _ref.widget_id;
      var network = _ref.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/save_widget'), { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'unsave',
    value: function unsave() {
      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var widget_id = _ref2.widget_id;
      var network = _ref2.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/unsave_widget'), { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'accept',
    value: function accept() {
      var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var widget_id = _ref3.widget_id;
      var network = _ref3.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/accept_invitation'), { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'decline',
    value: function decline() {
      var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var widget_id = _ref4.widget_id;
      var network = _ref4.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/decline_invitation'), { widget_id: widget_id }).then(function (json) {
        return json.data;
      });
    }
  }]);

  return Widgets;
}();

exports.default = Widgets;