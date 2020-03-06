webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/benr@packtpub.net/Documents/triple-triad/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var northStyle = {
  position: 'absolute',
  bottom: 35,
  left: '50%',
  transform: 'translateX(-50%)'
};
var eastStyle = {
  position: 'absolute',
  bottom: 20,
  right: 5
};
var southStyle = {
  position: 'absolute',
  bottom: 5,
  left: '50%',
  transform: 'translateX(-50%)'
};
var westStyle = {
  position: 'absolute',
  bottom: 20,
  left: 5
};
var player1 = {
  backgroundColor: '#acbefb',
  position: 'relative',
  height: '100%',
  width: '100%'
};
var player2 = {
  backgroundColor: '#ffcccb',
  position: 'relative',
  height: '100%',
  width: '100%'
};
var inactive = {
  display: 'none'
};

var Card = function Card(props) {
  return __jsx("div", {
    className: "card",
    style: props.player === 1 ? player1 : props.player === 2 ? player2 : inactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    style: northStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.stats.north), __jsx("span", {
    style: eastStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.stats.east), __jsx("span", {
    style: southStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.stats.south), __jsx("span", {
    style: westStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.stats.west));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.0ac80582fa57daa56a56.hot-update.js.map