'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions(client) {
    _classCallCheck(this, Actions);

    this._client = client;
  }

  _createClass(Actions, [{
    key: 'create',
    value: function create(action, _ref) {
      var network = _ref.network;

      var params = _objectWithoutProperties(_ref, ['network']);

      var basePath = network ? '/' + network : '';
      return this._client.post(basePath + '/actions/' + action, params).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'openWidget',
    value: function openWidget(_ref2) {
      var widget_id = _ref2.widget_id;
      var network = _ref2.network;

      return this.create('open_widget', { network: network, widget_id: widget_id });
    }
  }, {
    key: 'clickWidgetInterest',
    value: function clickWidgetInterest(_ref3) {
      var interest = _ref3.interest;
      var widget_id = _ref3.widget_id;
      var network = _ref3.network;

      return this.create('click_widget_interest', { network: network, interest: interest, widget_id: widget_id });
    }
  }, {
    key: 'pageVisit',
    value: function pageVisit(params) {
      return this.create('visit', params);
    }
  }]);

  return Actions;
}();

exports.default = Actions;