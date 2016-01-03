'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (0, _home2.default)(_react2.default);
var app = (0, _express2.default)();

app.use(_express2.default.static('src/build'));

var html = function html(root) {
  return '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="initial-scale=1" />\n    <title>TODO: pass down as props</title>\n  </head>\n  <body>\n    <div id="root">' + root + '</div>\n    <script src="/bundle.js"></script>\n  </body>\n</html>';
};

app.get('/', function (req, res) {
  res.send(html(_server2.default.renderToString(_react2.default.createElement(Home, null))));
});

app.listen(3000);
//# sourceMappingURL=server.js.map