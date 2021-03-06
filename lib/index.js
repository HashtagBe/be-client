'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _api = require('./api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_ORIGIN = 'https://network.hashtag.be';

var ACCESS_TOKEN_HEADER = 'X-Be-Access-Token';
var CLIENT_TYPE_HEADER = 'X-Be-Client-Type';

var BeClient = function () {
  function BeClient() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var tokenStorage = arguments[1];

    _classCallCheck(this, BeClient);

    this._client = _axios2.default.create({
      baseURL: (config.origin || DEFAULT_ORIGIN) + '/api/v3/',
      headers: _defineProperty({}, CLIENT_TYPE_HEADER, config.type)
    });

    if (config.requestInterceptor) this._client.interceptors.request.use(config.requestInterceptor, config.errorInterceptor);
    if (config.responseInterceptor) this._client.interceptors.response.use(config.responseInterceptor, config.errorInterceptor);

    this._tokenStorage = tokenStorage;
    if (tokenStorage && tokenStorage.get()) this.authenticate(tokenStorage.get());

    this.interests = new _api.Interests(this._client);
    this.widgets = new _api.Widgets(this._client);
    this.me = new _api.Me(this._client);
    this.actions = new _api.Actions(this._client);
    this.fixedInterests = new _api.FixedInterests(this._client);
  }

  _createClass(BeClient, [{
    key: 'authenticate',
    value: function authenticate(token) {
      if (this._tokenStorage) this._tokenStorage.set(token);
      this._client.defaults.headers[ACCESS_TOKEN_HEADER] = token;
      return Promise.resolve();
    }
  }, {
    key: 'login',
    value: function login(email, password) {
      var _this = this;

      return this._client.post('/session', { email: email, password: password }).then(function (json) {
        if (!json.data.token) return Promise.reject(new Error('Invalid auth response'));

        _this.authenticate(json.data.token);
        return json.data.token;
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      var _this2 = this;

      return this._client.delete('/session').then(function (json) {
        if (_this2._tokenStorage) _this2._tokenStorage.clear();
        delete _this2._client.defaults.headers[ACCESS_TOKEN_HEADER];
        return json;
      });
    }
  }]);

  return BeClient;
}();

exports.default = BeClient;

module.exports = BeClient;