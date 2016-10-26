'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathJoin = require('../helpers/pathJoin');

var _pathJoin2 = _interopRequireDefault(_pathJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FixedInterests = function () {
  function FixedInterests(client) {
    _classCallCheck(this, FixedInterests);

    this._client = client;
  }

  _createClass(FixedInterests, [{
    key: 'list',
    value: function list() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var network = _ref.network;

      return this._client.get((0, _pathJoin2.default)(network, '/fixed_interests')).then(function (json) {
        return json.data.fixed_interests;
      });
    }
  }, {
    key: 'select',
    value: function select() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var fixed_interests = _ref2.fixed_interests;
      var network = _ref2.network;

      return this._client.post((0, _pathJoin2.default)(network, '/fixed_interests/select'), { fixed_interests: fixed_interests });
      then(function (json) {
        return json.data;
      });
    }
  }]);

  return FixedInterests;
}();

exports.default = FixedInterests;