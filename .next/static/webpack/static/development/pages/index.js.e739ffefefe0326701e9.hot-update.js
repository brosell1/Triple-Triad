webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/deck.js":
/*!****************************!*\
  !*** ./components/deck.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ "./components/panel.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
var _jsxFileName = "/home/benr@packtpub.net/Documents/triple-triad/components/deck.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var deckStyle = {
  width: 156,
  textAlign: 'center',
  lineHeight: 0,
  margin: '0px 20px'
};
var headerStyle = {
  lineHeight: '37px'
};

var Deck = function Deck(props) {
  return __jsx("div", {
    style: deckStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Player ", props.player + 1), props.deck.map(function (item, index) {
    return __jsx(_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: props.onClick,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stats: item.stats,
      player: props.player + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ })

})
//# sourceMappingURL=index.js.e739ffefefe0326701e9.hot-update.js.map