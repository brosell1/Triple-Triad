webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ "./components/panel.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
var _jsxFileName = "/home/benr@packtpub.net/Documents/triple-triad/components/board.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var boardStyle = {
  width: 156
};

var Board = function Board(props) {
  return __jsx("div", {
    style: boardStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.board.map(function (item, index) {
    return __jsx(_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      index: index,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stats: item.card.stats,
      player: item.player,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=index.js.8ad1315bc845da4f3aaa.hot-update.js.map