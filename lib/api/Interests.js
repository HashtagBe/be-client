"use strict";

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interests = function () {
  function Interests(client) {
    _classCallCheck(this, Interests);

    this._client = client;
  }

  _createClass(Interests, [{
    key: "get",
    value: function get(id, network) {
      return this._client.get(network + "/interests/" + encodeURIComponent(id)).then(function (json) {
        return json.data.interest;
      });
    }
  }, {
    key: "list",
    value: function list(network) {
      return this._client.get(network + "/interests").then(function (json) {
        return json.data.interests;
      });
    }
  }, {
    key: "follow",
    value: function follow(interest, network) {
      return this._client.post("/" + network + "/actions/follow_interest", { interest: interest }).then(function (json) {
        return json.data;
      });
    }
  }, {
    key: "unfollow",
    value: function unfollow(interest, network) {
      return this._client.post("/" + network + "/actions/unfollow_interest", { interest: interest }).then(function (json) {
        return json.data;
      });
    }
  }]);

  return Interests;
}();

exports.default = Interests;