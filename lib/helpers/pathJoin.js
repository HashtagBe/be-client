'use strict';

exports.__esModule = true;
exports.default = pathJoin;
function pathJoin() {
  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  return paths.filter(function (p) {
    return !!p;
  }).map(function (p) {
    return p.replace(/\/$/ig, '');
  }).join('/');
}