"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FixedInterests = function () {
  function FixedInterests(client, network) {
    _classCallCheck(this, FixedInterests);

    this._client = client;
    this._network = network;
  }

  _createClass(FixedInterests, [{
    key: "get",
    value: function get(id) {
      return this._client.get(this._network + "/fixed_interests/" + id).then(function (json) {
        return json.data.interest;
      });
    }
  }, {
    key: "list",
    value: function list() {
      return this._client.get(this._network + "/fixed_interests").then(function (json) {
        return json.data.interests;
      });
    }
  }]);

  return FixedInterests;
}();

exports.default = FixedInterests;