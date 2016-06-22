'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathJoin = require('../helpers/pathJoin');

var _pathJoin2 = _interopRequireDefault(_pathJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interests = function () {
  function Interests(client) {
    _classCallCheck(this, Interests);

    this._client = client;
  }

  _createClass(Interests, [{
    key: 'get',
    value: function get() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var interest = _ref.interest;
      var network = _ref.network;

      return this._client.get((0, _pathJoin2.default)(network, 'interests', encodeURIComponent(interest))).then(function (json) {
        return json.data.interest;
      });
    }
  }, {
    key: 'list',
    value: function list() {
      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var network = _ref2.network;

      return this._client.get((0, _pathJoin2.default)(network, '/interests')).then(function (json) {
        return json.data.interests;
      });
    }
  }, {
    key: 'follow',
    value: function follow() {
      var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var interest = _ref3.interest;
      var network = _ref3.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/follow_interest'), { interest: interest }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: 'unfollow',
    value: function unfollow() {
      var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var interest = _ref4.interest;
      var network = _ref4.network;

      return this._client.post((0, _pathJoin2.default)(network, 'actions/unfollow_interest'), { interest: interest }).then(function (json) {
        return json.data;
      });
    }
  }]);

  return Interests;
}();

exports.default = Interests;