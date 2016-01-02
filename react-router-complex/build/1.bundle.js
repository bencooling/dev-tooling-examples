webpackJsonp([1],{

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./About": 217,
		"./About.js": 217,
		"./Blog": 218,
		"./Blog.js": 218,
		"./Home": 219,
		"./Home.js": 219,
		"./Post": 220,
		"./Post.js": 220
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 216;


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  return (// require.ensure needs module.exports apparently
	    // export default () =>
	    _react2.default.createElement(
	      'h2',
	      null,
	      'About'
	    )
	  );
	};

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  return (// require.ensure needs module.exports apparently
	    // export default () =>
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Blog'
	    )
	  );
	};

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  return (// require.ensure needs module.exports apparently
	    // export default () =>
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Home'
	    )
	  );
	};

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (_ref) {
	  var params = _ref.params;
	  return (// require.ensure needs module.exports apparently
	    // export default () =>
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Blog Post: ',
	      params.postId
	    )
	  );
	};

/***/ }

});