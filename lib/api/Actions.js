'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathJoin = require('../helpers/pathJoin');

var _pathJoin2 = _interopRequireDefault(_pathJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions(client) {
    _classCallCheck(this, Actions);

    this._client = client;
  }

  _createClass(Actions, [{
    key: 'create',
    value: function create() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var action = _ref.action;
      var network = _ref.network;

      var params = _objectWithoutProperties(_ref, ['action', 'network']);

      return this._client.post((0, _pathJoin2.default)(network, 'actions', action), params).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'openWidget',
    value: function openWidget() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.create(_extends({ action: 'open_widget' }, params));
    }
  }, {
    key: 'clickWidgetInterest',
    value: function clickWidgetInterest() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.create(_extends({ action: 'click_widget_interest' }, params));
    }
  }, {
    key: 'pageVisit',
    value: function pageVisit() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.create(_extends({ action: 'visit' }, params));
    }
  }]);

  return Actions;
}();

exports.default = Actions;