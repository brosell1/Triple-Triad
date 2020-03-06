webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board */ "./components/board.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deck */ "./components/deck.js");





var _jsxFileName = "/home/benr@packtpub.net/Documents/triple-triad/components/game.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var flex = {
  display: 'flex'
};
var player1Deck = [];

var Game = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Game, _React$Component);

  function Game(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Game).call(this, props));
    _this.state = {
      player1: {
        deck: [{
          name: 'Tonberry',
          rarity: 1,
          tribe: null,
          stats: {
            north: 2,
            east: 2,
            south: 7,
            west: 2
          }
        }, {
          name: 'Namazu',
          rarity: 1,
          tribe: 'Beastman',
          stats: {
            north: 1,
            east: 6,
            south: 1,
            west: 5
          }
        }, {
          name: 'Adamantoise',
          rarity: 2,
          tribe: null,
          stats: {
            north: 5,
            east: 7,
            south: 4,
            west: 4
          }
        }, {
          name: 'Ultros & Typhon',
          rarity: 2,
          tribe: null,
          stats: {
            north: 2,
            east: 3,
            south: 6,
            west: 7
          }
        }, {
          name: 'Garuda',
          rarity: 3,
          tribe: 'Primal',
          stats: {
            north: 7,
            east: 6,
            south: 1,
            west: 7
          }
        }]
      },
      player2: {
        deck: [{
          name: 'Chocobo',
          rarity: 1,
          tribe: null,
          stats: {
            north: 3,
            east: 7,
            south: 2,
            west: 1
          }
        }, {
          name: 'Moogle',
          rarity: 1,
          tribe: 'Beastman',
          stats: {
            north: 2,
            east: 1,
            south: 3,
            west: 7
          }
        }, {
          name: 'Delivery Moogle',
          rarity: 2,
          tribe: 'Beastman',
          stats: {
            north: 5,
            east: 5,
            south: 6,
            west: 3
          }
        }, {
          name: 'Moglin',
          rarity: 3,
          tribe: 'Beastman',
          stats: {
            north: 8,
            east: 5,
            south: 4,
            west: 5
          }
        }, {
          name: 'Good King Moggle Mog XII',
          rarity: 3,
          tribe: 'Primal',
          stats: {
            north: 7,
            east: 6,
            south: 7,
            west: 1
          }
        }]
      },
      board: Array(9).fill({
        player: null,
        card: {
          name: null,
          rarity: null,
          tribe: null,
          stats: {
            north: null,
            east: null,
            south: null,
            west: null
          }
        }
      })
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_deck__WEBPACK_IMPORTED_MODULE_7__["default"], {
        player: 1,
        deck: this.state.player1.deck,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(_board__WEBPACK_IMPORTED_MODULE_6__["default"], {
        board: this.state.board,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(_deck__WEBPACK_IMPORTED_MODULE_7__["default"], {
        player: 2,
        deck: this.state.player2.deck,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.0ce3b620461146e49590.hot-update.js.map