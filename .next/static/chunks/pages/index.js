_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./components/TabNav.tsx":
/*!*******************************!*\
  !*** ./components/TabNav.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\TabNav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: rgb(194,194,181);\n    width: 100%;\n    text-align: center;\n    font-size: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var LinkStyle = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"])(_templateObject());
_c = LinkStyle;

var TabNav = function TabNav() {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding: '4px 1px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: '28px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 1 / 3,
    marginLeft: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      fontWeight: 'bold',
      color: '#7DA752',
      backgroundColor: 'rgba(125,167,82,0.2)',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: {
      width: '100%',
      textAlign: 'center',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Prevention")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 1 / 3,
    mx: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Symptoms")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 1 / 3,
    marginRight: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Diagnosis")));
};

_c2 = TabNav;
/* harmony default export */ __webpack_exports__["default"] = (TabNav);

var _c, _c2;

$RefreshReg$(_c, "LinkStyle");
$RefreshReg$(_c2, "TabNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/TabStories.tsx":
/*!***********************************!*\
  !*** ./components/TabStories.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\TabStories.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var CardImage = function CardImage() {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: 'https://via.placeholder.com/100',
    sx: {
      width: '100px',
      height: '100px',
      borderRadius: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

_c = CardImage;

var CardText = function CardText(_ref) {
  var heading = _ref.heading,
      body = _ref.body,
      link = _ref.link;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 2 / 3,
    sx: {
      // fontSize: '12px',
      marginRight: '16px',
      boxSizing: 'border-box' // overflowWrap: 'break-word'

    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: {
      my: '8px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '12px',
      color: 'rgb(121,130,130)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, body), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    sx: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      cursor: 'pointer',
      color: '#7DA752'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, link, " \u2192"));
};

_c2 = CardText;
var Data = [{
  id: '1',
  heading: 'Wear a facemask',
  body: 'You should wear facemask when you are around other people',
  link: '153 Discussions'
}, {
  id: '2',
  heading: 'Avoid close contact',
  body: 'Put distance between yourself and other people',
  link: '127 Discussions'
}];

var TabStories = function TabStories() {
  // const textHeadingOne = 'Wear a facemask';
  // const textHeadingTwo = 'Avoid close contact';
  // const textBodyOne = 'You should wear facemask when you are around other people';
  // const textBodyTwo = 'Put distance between yourself and other people';
  // const textLinkOne = '153 Discussions';
  // const textLinkTwo = '127 Discussions';
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, Data.map(function (props) {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      marginBottom: '15px',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      sx: {
        padding: '10px',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: '16px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, __jsx(CardImage, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }), __jsx(CardText, {
      heading: props.heading,
      body: props.body,
      link: props.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    })));
  }));
};

_c3 = TabStories;
/* harmony default export */ __webpack_exports__["default"] = (TabStories);

var _c, _c2, _c3;

$RefreshReg$(_c, "CardImage");
$RefreshReg$(_c2, "CardText");
$RefreshReg$(_c3, "TabStories");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)jsx.*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"].bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ __webpack_exports__["default"] = (newStyled);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@styled-system/background/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/background/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "./node_modules/@styled-system/border/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/border/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: border, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (border);


/***/ }),

/***/ "./node_modules/@styled-system/color/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/color/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: color, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@styled-system/core/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/core/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: merge, get, createParser, createStyleFunction, system, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return createStyleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "system", function() { return system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

var merge = function merge(a, b) {
  var result = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(result, (_assign = {}, _assign[key] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign2;

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign2 = {}, _assign2[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign3 = {}, _assign3[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};


/***/ }),

/***/ "./node_modules/@styled-system/css/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@styled-system/css/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: get, responsive, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@styled-system/flexbox/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/flexbox/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: flexbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return flexbox; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);


/***/ }),

/***/ "./node_modules/@styled-system/grid/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/grid/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (grid);


/***/ }),

/***/ "./node_modules/@styled-system/layout/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/layout/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");


var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@styled-system/position/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@styled-system/position/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./node_modules/@styled-system/shadow/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/shadow/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: shadow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var shadow = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (shadow);


/***/ }),

/***/ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@styled-system/should-forward-prop/dist/index.esm.js ***!
  \***************************************************************************/
/*! exports provided: props, createShouldForwardProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShouldForwardProp", function() { return createShouldForwardProp; });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");



var all = Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["buttonStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"]);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
    return Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) && !regex.test(prop);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createShouldForwardProp(props));


/***/ }),

/***/ "./node_modules/@styled-system/space/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/space/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: margin, padding, space, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.margin);
var padding = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.padding);
var space = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"])(margin, padding);
/* harmony default export */ __webpack_exports__["default"] = (space);


/***/ }),

/***/ "./node_modules/@styled-system/typography/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/typography/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: typography, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (typography);


/***/ }),

/***/ "./node_modules/@styled-system/variant/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/variant/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: variant, default, buttonStyle, textStyle, colorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js");


var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parser;
};
/* harmony default export */ __webpack_exports__["default"] = (variant);
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKite%5CDesktop%5CCorona-App%5Ccorona-app-yarn%20-%20sb%20init%5Cpages%5Cindex.tsx!./":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKite%5CDesktop%5CCorona-App%5Ccorona-app-yarn%20-%20sb%20init%5Cpages%5Cindex.tsx ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/rebass/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/rebass/dist/index.esm.js ***!
  \***********************************************/
/*! exports provided: Box, Flex, Text, Heading, Link, Button, Image, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflexbox */ "./node_modules/reflexbox/dist/index.js");
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return reflexbox__WEBPACK_IMPORTED_MODULE_1__["Flex"]; });

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Text = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    tx: "text"
  }, props));
});
var Heading = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    as: "h2",
    tx: "text",
    variant: "heading"
  }, props, {
    __css: {
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  }));
});
var Link = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    as: "a",
    variant: "link"
  }, props));
});
var Button = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    as: "button",
    tx: "buttons",
    variant: "primary"
  }, props, {
    __css: {
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4
    }
  }));
});
var Image = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    as: "img"
  }, props, {
    __css: {
      maxWidth: '100%',
      height: 'auto'
    }
  }));
});
var Card = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    ref: ref,
    variant: "card"
  }, props));
});


/***/ }),

/***/ "./node_modules/reflexbox/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/reflexbox/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.Box = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = _interopRequireDefault(__webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js"));

var _styledSystem = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");

var _css = _interopRequireWildcard(__webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js"));

var _shouldForwardProp = _interopRequireDefault(__webpack_require__(/*! @styled-system/should-forward-prop */ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sx = function sx(props) {
  return (0, _css["default"])(props.sx)(props.theme);
};

var base = function base(props) {
  return (0, _css["default"])(props.__css)(props.theme);
};

var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      _ref$tx = _ref.tx,
      tx = _ref$tx === void 0 ? 'variants' : _ref$tx;
  return (0, _css["default"])((0, _css.get)(theme, tx + '.' + variant, (0, _css.get)(theme, variant)))(theme);
};

var Box = (0, _styled["default"])('div', {
  shouldForwardProp: _shouldForwardProp["default"]
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, sx, function (props) {
  return props.css;
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.typography, _styledSystem.color, _styledSystem.flexbox));
exports.Box = Box;
var Flex = (0, _styled["default"])(Box)({
  display: 'flex'
});
exports.Flex = Flex;

/***/ }),

/***/ "./node_modules/styled-system/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/styled-system/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, createParser, createStyleFunction, compose, system, margin, padding, space, color, layout, typography, flexbox, border, background, position, grid, shadow, boxShadow, textShadow, variant, buttonStyle, textStyle, colorStyle, borders, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return verticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowX", function() { return overflowX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowY", function() { return overflowY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return backgroundPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return backgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/layout */ "./node_modules/@styled-system/layout/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/typography */ "./node_modules/@styled-system/typography/dist/index.esm.js");
/* harmony import */ var _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/flexbox */ "./node_modules/@styled-system/flexbox/dist/index.esm.js");
/* harmony import */ var _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/grid */ "./node_modules/@styled-system/grid/dist/index.esm.js");
/* harmony import */ var _styled_system_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/border */ "./node_modules/@styled-system/border/dist/index.esm.js");
/* harmony import */ var _styled_system_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/background */ "./node_modules/@styled-system/background/dist/index.esm.js");
/* harmony import */ var _styled_system_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-system/position */ "./node_modules/@styled-system/position/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"]; });

/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["margin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["padding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["typography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["flexbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "background", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["background"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["grid"]; });

/* harmony import */ var _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styled-system/shadow */ "./node_modules/@styled-system/shadow/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["shadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-system/variant */ "./node_modules/@styled-system/variant/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["variant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["buttonStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["textStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["colorStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

 // v4 api shims






















var width = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].width,
    height = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].height,
    minWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minWidth,
    minHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minHeight,
    maxWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxWidth,
    maxHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxHeight,
    size = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].size,
    verticalAlign = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].verticalAlign,
    display = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].display,
    overflow = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflow,
    overflowX = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowX,
    overflowY = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowY;
var opacity = _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["default"].opacity;
var fontSize = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize,
    fontFamily = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily,
    fontWeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontWeight,
    lineHeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeight,
    textAlign = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].textAlign,
    fontStyle = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontStyle,
    letterSpacing = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].letterSpacing;
var alignItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignItems,
    alignContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignContent,
    justifyItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyItems,
    justifyContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyContent,
    flexWrap = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexWrap,
    flexDirection = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexDirection,
    flex = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flex,
    flexGrow = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexGrow,
    flexShrink = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexShrink,
    flexBasis = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexBasis,
    justifySelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifySelf,
    alignSelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignSelf,
    order = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].order;
var gridGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridGap,
    gridColumnGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumnGap,
    gridRowGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRowGap,
    gridColumn = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumn,
    gridRow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRow,
    gridAutoFlow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoFlow,
    gridAutoColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoColumns,
    gridAutoRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoRows,
    gridTemplateColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateColumns,
    gridTemplateRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateRows,
    gridTemplateAreas = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateAreas,
    gridArea = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridArea;
var borderWidth = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderWidth,
    borderStyle = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderStyle,
    borderColor = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderColor,
    borderTop = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderTop,
    borderRight = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRight,
    borderBottom = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderBottom,
    borderLeft = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderLeft,
    borderRadius = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRadius;
var backgroundImage = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundImage,
    backgroundSize = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundSize,
    backgroundPosition = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundPosition,
    backgroundRepeat = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundRepeat;
var zIndex = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].zIndex,
    top = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].top,
    right = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].right,
    bottom = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].bottom,
    left = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].left;

 // v4 style API shim

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"])({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parse;
};


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var _components_TabNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TabNav */ "./components/TabNav.tsx");
/* harmony import */ var _components_TabStories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TabStories */ "./components/TabStories.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var HomePage = function HomePage() {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      width: '375px',
      mx: 'auto',
      p: '15px',
      backgroundColor: 'rgb(243,239,234)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_TabNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_components_TabStories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKite%5CDesktop%5CCorona-App%5Ccorona-app-yarn%20-%20sb%20init%5Cpages%5Cindex.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJOYXYudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYlN0b3JpZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvY29yZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2Nzcy9kaXN0L2Nzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L3NlcmlhbGl6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NoZWV0L2Rpc3Qvc2hlZXQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsZWQtYmFzZS9kaXN0L3N0eWxlZC1iYXNlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGVkL2Rpc3Qvc3R5bGVkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGlzL2Rpc3Qvc3R5bGlzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC93ZWFrLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYm9yZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb3JlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY3NzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZmxleGJveC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2dyaWQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9sYXlvdXQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9wb3NpdGlvbi9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3NoYWRvdy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3AvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zcGFjZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS92YXJpYW50L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmViYXNzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmbGV4Ym94L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtc3lzdGVtL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGlua1N0eWxlIiwic3R5bGVkIiwiTGluayIsIlRhYk5hdiIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJ3aWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiQ2FyZEltYWdlIiwiaGVpZ2h0IiwiQ2FyZFRleHQiLCJoZWFkaW5nIiwiYm9keSIsImxpbmsiLCJtYXJnaW5SaWdodCIsImJveFNpemluZyIsIm15IiwiRGF0YSIsImlkIiwiVGFiU3RvcmllcyIsIm1hcCIsInByb3BzIiwiSG9tZVBhZ2UiLCJteCIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLCtEQUFNLENBQUNDLDJDQUFELENBQVQsbUJBQWY7S0FBTUYsUzs7QUFTTixJQUFNRyxNQUFN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LEM7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDUDtBQUNOOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1REFBTTs7QUFFekIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtFO0FBQ1U7QUFDbkM7QUFDMEI7QUFDZDtBQUNUO0FBQ2I7QUFDZTs7QUFFOUMsMEJBQTBCLDJEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOERBQVc7QUFDaEQsbUJBQW1CLDJEQUFhLEdBQUc7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0osU0FBUyx3REFBVTtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwwRUFBbUI7QUFDbkMsR0FBRztBQUNIO0FBQ0E7O0FBRUEsbUJBQW1CLDBFQUFlOztBQUVsQyxNQUFNLEtBQXFDO0FBQzNDOztBQUVBO0FBQ0EsbUJBQW1CLDBFQUFlLDRDQUE0QztBQUM5RTtBQUNBOztBQUVBLGNBQWMsbUVBQVk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixNQUFxQztBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMkRBQWE7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELElBQUksSUFBcUM7QUFDekM7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLG1EQUFhO0FBQ3hCOztBQUVBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxJQUFxQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsR0FBRzs7O0FBR0gsU0FBUyxtREFBYTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCLHVCQUF1QiwwRUFBZTtBQUN0QyxhQUFhLDJEQUFhO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLG1CQUFtQiwwRUFBZTtBQUNsQyxTQUFTLDJEQUFhO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJFQUFjOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIseURBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQVk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQSxtQkFBbUIsb0RBQUc7QUFDdEIsNENBQTRDOztBQUU1QztBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxTQUFTO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBFQUFtQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDJEQUFhO0FBQ3RCOztBQUVBO0FBQ0EseUJBQXlCLGFBQW9CO0FBQzdDO0FBQ0E7O0FBRUEseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQSx1QkFBdUIsMEVBQWU7O0FBRXRDO0FBQ0EsUUFBUSxtRUFBWTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQW9CO0FBQzdDO0FBQ0E7O0FBRUEsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRTRGOzs7Ozs7Ozs7Ozs7O0FDeFg3RjtBQUFBO0FBQXFEOztBQUVyRDtBQUNBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUEsU0FBUywwRUFBZTtBQUN4Qjs7QUFFZSxrRUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVm5CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdER2QjtBQUFBO0FBQXVDOztBQUV2QyxrN0hBQWs3SDs7QUFFbDdILFlBQVksZ0VBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZHJCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ1J2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0U7QUFDRjs7QUFFdkMsZ1JBQWdSLHVDQUF1QztBQUN2VDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZ0VBQU87QUFDOUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHlEQUFRO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQsY0FBYyxLQUFxQztBQUNuRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxJQUFxQztBQUN4RCxxUEFBcVAsWUFBWSxrSUFBa0ksYUFBYTtBQUNoWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RCxTQUFTO0FBQ1Qsc0ZBQXNGO0FBQ3RGO0FBQ0EsT0FBTztBQUNQLGdEQUFnRCxhQUFvQjtBQUNwRTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBOztBQUVBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLEdBQUcsT0FBTztBQUM3Qzs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLHFFQUFxRTtBQUNyRSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdILGlCQUFpQixpQkFBaUI7QUFDbEM7O0FBRUE7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsNkRBQVU7O0FBRXZCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7O0FDalUzQjtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLGFBQWE7O0FBRXJCLGlDQUFpQyxvQ0FBb0M7O0FBRXJFLHlCQUF5Qix1QkFBdUIsRUFBRTtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQW9CO0FBQ3ZFO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUN0SXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUM5QjtBQUNXO0FBQ2M7QUFDSTtBQUNkOztBQUVyRCwrQkFBK0IsOERBQVc7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsK0NBQStDLENBQUMsNEVBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLHlDQUF5QyxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQ3BnQixnUkFBZ1IsdUNBQXVDOztBQUV2VDtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsVUFBVSxLQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFNBQVM7QUFDckIsWUFBWSxLQUFxQztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxpQkFBaUIsc0VBQWdCO0FBQ2pDLGFBQWEsMkRBQWEsQ0FBQywwREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDBFQUFtQjtBQUN6QyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx5QkFBeUIsMEVBQWU7QUFDeEMsb0JBQW9CLG1FQUFZO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTs7QUFFQSxrQkFBa0IsMkRBQWE7O0FBRS9CO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQW9CO0FBQ2pFO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrRUFBK0UsZUFBZSxJQUFJO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbks1QjtBQUFBO0FBQTBDOztBQUUxQztBQUNBOztBQUVBLGdCQUFnQiw0REFBTTtBQUN0QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVnpCO0FBQUE7QUFDQTtBQUNBLHlLQUF5SyxPQUFPO0FBQ2hMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRixxQ0FBcUMseUNBQXlDO0FBQ2hLOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpTUFBaU07QUFDak07O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELDZEQUE2RCxPQUFPO0FBQ3BIO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RtQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRDVCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7QUN2QzdDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNmM0I7QUFBQTtBQUFBO0FBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpQkFBaUIsa0VBQU07QUFDZix5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDYjFCO0FBQUE7QUFBQTtBQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sYUFBYSxrRUFBTTtBQUNYLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoSXRCO0FBQUE7QUFBQTtBQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ08sWUFBWSxrRUFBTTtBQUNWLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQzVCO0FBQ1AsZUFBZSxvREFBTSxHQUFHOztBQUV4QjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBTSxzQkFBc0IsaUJBQWlCLG9EQUFNO0FBQ3ZEOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxvREFBTTtBQUNaLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sb0RBQU07QUFDWixLQUFLO0FBQ0w7O0FBRUEsTUFBTSxvREFBTSx1QkFBdUIsb0JBQW9CLG9EQUFNLEdBQUc7QUFDaEU7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxvREFBTTtBQUNaLEtBQUs7QUFDTDs7QUFFQTtBQUNBLE1BQU0sb0RBQU0sdUJBQXVCLG9CQUFvQixvREFBTSxHQUFHO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUs7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQU07QUFDVixHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck5BO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRTNUO0FBQ087QUFDUDs7QUFFQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUMsQ0FBQyxJQUFJO0FBQ0U7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdEQUFnRDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGtCQUFrQjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGtFQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0Tm5CO0FBQUE7QUFBQTtBQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGNBQWMsa0VBQU07QUFDWixzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEJ2QjtBQUFBO0FBQUE7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFdBQVcsa0VBQU07QUFDVCxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0JwQjtBQUFBO0FBQUE7QUFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsK0RBQUc7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGFBQWEsa0VBQU07QUFDWCxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0N0QjtBQUFBO0FBQUE7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxlQUFlLGtFQUFNO0FBQ2IsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hDeEI7QUFBQTtBQUFBO0FBQTZDO0FBQ3RDLGFBQWEsa0VBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1U7QUFDa0g7QUFDbkssVUFBVSw2REFBTyxDQUFDLG1EQUFLLEVBQUUsd0RBQVUsRUFBRSxtREFBSyxFQUFFLG9EQUFNLEVBQUUscURBQU8sRUFBRSxvREFBTSxFQUFFLHdEQUFVLEVBQUUsc0RBQVEsRUFBRSxrREFBSSxFQUFFLG9EQUFNLEVBQUUseURBQVcsRUFBRSx1REFBUyxFQUFFLHdEQUFVO0FBQ3BJO0FBQ0E7QUFDUDtBQUNBLFNBQVMsZ0VBQU87QUFDaEIsV0FBVyxzRUFBVztBQUN0QixHQUFHO0FBQ0g7QUFDZSw2RkFBOEIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1g5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsK0RBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsY0FBYywrREFBRzs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sYUFBYSxrRUFBTTtBQUNuQixjQUFjLGtFQUFNO0FBQ3BCLFlBQVksbUVBQU87QUFDWCxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUhyQjtBQUFBO0FBQUE7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ08saUJBQWlCLGtFQUFNO0FBQ2YseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQzlCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDbkI7QUFDOUI7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGtFQUFHLENBQUMsK0RBQUc7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxhQUFhLCtEQUFHO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixlQUFlLHdFQUFZO0FBQzNCO0FBQ0E7QUFDZSxzRUFBTyxFQUFDO0FBQ2hCO0FBQ1A7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4Q1ksc0NBQXNDLHNCQUFzQjtBQUN6RSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtRjtBQUMxRztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMseUZBQTRCO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsOEVBQTJCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdjNEYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxpRkFBNEI7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFalI7QUFDSjtBQUNqQjtBQUNkLFdBQVcsd0RBQVU7QUFDNUIsU0FBUyw0Q0FBSyxlQUFlLDZDQUFHO0FBQ2hDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNNLGNBQWMsd0RBQVU7QUFDL0IsU0FBUyw0Q0FBSyxlQUFlLDZDQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ00sV0FBVyx3REFBVTtBQUM1QixTQUFTLDRDQUFLLGVBQWUsNkNBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDTSxhQUFhLHdEQUFVO0FBQzlCLFNBQVMsNENBQUssZUFBZSw2Q0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDTSxZQUFZLHdEQUFVO0FBQzdCLFNBQVMsNENBQUssZUFBZSw2Q0FBRztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDTSxXQUFXLHdEQUFVO0FBQzVCLFNBQVMsNENBQUssZUFBZSw2Q0FBRztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4RVk7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQscUNBQXFDLG1CQUFPLENBQUMsa0ZBQWlCOztBQUU5RCxvQkFBb0IsbUJBQU8sQ0FBQyxxRUFBZTs7QUFFM0MsbUNBQW1DLG1CQUFPLENBQUMsK0VBQW9COztBQUUvRCxnREFBZ0QsbUJBQU8sQ0FBQywrR0FBb0M7O0FBRTVGLHFDQUFxQyxnREFBZ0QsMkJBQTJCLGlFQUFpRSxjQUFjLEdBQUcsY0FBYzs7QUFFaE4sdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsd0NBQXdDLCtCQUErQix1QkFBdUIsRUFBRSxpQkFBaUIsbUJBQW1CLHNGQUFzRix1QkFBdUIsc0RBQXNELHFGQUFxRixzQ0FBc0MsMENBQTBDLEVBQUUsT0FBTyx3QkFBd0IsRUFBRSxFQUFFLEVBQUUsRUFBRSx5QkFBeUIsYUFBYSx3QkFBd0IsRUFBRSxlQUFlOztBQUV0cEIsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG9COzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7O0FBRTdCO0FBQ0Y7QUFDVTtBQUNOO0FBQ047QUFDSTtBQUNRO0FBQ0o7QUFDK0M7QUFDaEM7QUFDakI7QUFDRTtBQUNRO0FBQ047QUFDRjtBQUNRO0FBQ0o7QUFDUjtBQUNJO0FBQ3FDO0FBQ0M7QUFDckYsWUFBWSw2REFBTTtBQUNsQixhQUFhLDZEQUFNO0FBQ25CLGVBQWUsNkRBQU07QUFDckIsZ0JBQWdCLDZEQUFNO0FBQ3RCLGVBQWUsNkRBQU07QUFDckIsZ0JBQWdCLDZEQUFNO0FBQ3RCLFdBQVcsNkRBQU07QUFDakIsb0JBQW9CLDZEQUFNO0FBQzFCLGNBQWMsNkRBQU07QUFDcEIsZUFBZSw2REFBTTtBQUNyQixnQkFBZ0IsNkRBQU07QUFDdEIsZ0JBQWdCLDZEQUFNO0FBQ3RCLGNBQWMsNERBQUs7QUFDbkIsZUFBZSxpRUFBVTtBQUN6QixpQkFBaUIsaUVBQVU7QUFDM0IsaUJBQWlCLGlFQUFVO0FBQzNCLGlCQUFpQixpRUFBVTtBQUMzQixnQkFBZ0IsaUVBQVU7QUFDMUIsZ0JBQWdCLGlFQUFVO0FBQzFCLG9CQUFvQixpRUFBVTtBQUM5QixpQkFBaUIsOERBQU87QUFDeEIsbUJBQW1CLDhEQUFPO0FBQzFCLG1CQUFtQiw4REFBTztBQUMxQixxQkFBcUIsOERBQU87QUFDNUIsZUFBZSw4REFBTztBQUN0QixvQkFBb0IsOERBQU87QUFDM0IsV0FBVyw4REFBTztBQUNsQixlQUFlLDhEQUFPO0FBQ3RCLGlCQUFpQiw4REFBTztBQUN4QixnQkFBZ0IsOERBQU87QUFDdkIsa0JBQWtCLDhEQUFPO0FBQ3pCLGdCQUFnQiw4REFBTztBQUN2QixZQUFZLDhEQUFPO0FBQ25CLGNBQWMsMkRBQUk7QUFDbEIsb0JBQW9CLDJEQUFJO0FBQ3hCLGlCQUFpQiwyREFBSTtBQUNyQixpQkFBaUIsMkRBQUk7QUFDckIsY0FBYywyREFBSTtBQUNsQixtQkFBbUIsMkRBQUk7QUFDdkIsc0JBQXNCLDJEQUFJO0FBQzFCLG1CQUFtQiwyREFBSTtBQUN2QiwwQkFBMEIsMkRBQUk7QUFDOUIsdUJBQXVCLDJEQUFJO0FBQzNCLHdCQUF3QiwyREFBSTtBQUM1QixlQUFlLDJEQUFJO0FBQ25CLGtCQUFrQiw2REFBTTtBQUN4QixrQkFBa0IsNkRBQU07QUFDeEIsa0JBQWtCLDZEQUFNO0FBQ3hCLGdCQUFnQiw2REFBTTtBQUN0QixrQkFBa0IsNkRBQU07QUFDeEIsbUJBQW1CLDZEQUFNO0FBQ3pCLGlCQUFpQiw2REFBTTtBQUN2QixtQkFBbUIsNkRBQU07QUFDekIsc0JBQXNCLGlFQUFVO0FBQ2hDLHFCQUFxQixpRUFBVTtBQUMvQix5QkFBeUIsaUVBQVU7QUFDbkMsdUJBQXVCLGlFQUFVO0FBQ2pDLGFBQWEsK0RBQVE7QUFDckIsVUFBVSwrREFBUTtBQUNsQixZQUFZLCtEQUFRO0FBQ3BCLGFBQWEsK0RBQVE7QUFDckIsV0FBVywrREFBUTtBQUN3QztBQVF0Qjs7QUFFOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsY0FBYyx3RUFBWTtBQUMxQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFNBQ0ksTUFBQywwQ0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNBakIsV0FBSyxFQUFFLE9BRFA7QUFFQWtCLFFBQUUsRUFBRSxNQUZKO0FBR0FDLE9BQUMsRUFBRSxNQUhIO0FBSUExQixxQkFBZSxFQUFFO0FBSmpCLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQVlILENBYkQ7O0tBQU13QixRO0FBZVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcblxyXG5jb25zdCBMaW5rU3R5bGUgPSBzdHlsZWQoTGluaylgXHJcbiAgICBjb2xvcjogcmdiKDE5NCwxOTQsMTgxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IFRhYk5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHggMXB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI4cHgnLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17MSAvIDN9IG1hcmdpbkxlZnQ9ezF9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzdEQTc1MicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMjUsMTY3LDgyLDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHN4PXt7d2lkdGg6JzEwMCUnLHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICBQcmV2ZW50aW9uXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbXg9ezF9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmtTdHlsZT5TeW1wdG9tczwvTGlua1N0eWxlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17MSAvIDN9IG1hcmdpblJpZ2h0PXsxfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rU3R5bGU+RGlhZ25vc2lzPC9MaW5rU3R5bGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcblxyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHdpZHRoPXsxLzN9IG1hcmdpblJpZ2h0PXsnMTVweCd9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCd9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcbmNvbnN0IENhcmRUZXh0ID0gKHtoZWFkaW5nLCBib2R5LCBsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHdpZHRoPXsyLzN9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250RmFtaWx5PXsnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZid9IGZvbnRTaXplPXsnMTZweCd9PntoZWFkaW5nfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigxMjEsMTMwLDEzMCknLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6J3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM3REE3NTInXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpbmt9ICYjODU5NDtcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgaGVhZGluZzogJ1dlYXIgYSBmYWNlbWFzaycsXHJcbiAgICAgICAgYm9keTogJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgbGluazogJzE1MyBEaXNjdXNzaW9ucycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgaGVhZGluZzogJ0F2b2lkIGNsb3NlIGNvbnRhY3QnLFxyXG4gICAgICAgIGJvZHk6ICdQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICBsaW5rOiAnMTI3IERpc2N1c3Npb25zJyxcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBUYWJTdG9yaWVzID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgdGV4dEhlYWRpbmdPbmUgPSAnV2VhciBhIGZhY2VtYXNrJztcclxuICAgIC8vIGNvbnN0IHRleHRIZWFkaW5nVHdvID0gJ0F2b2lkIGNsb3NlIGNvbnRhY3QnO1xyXG4gICAgLy8gY29uc3QgdGV4dEJvZHlPbmUgPSAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJztcclxuICAgIC8vIGNvbnN0IHRleHRCb2R5VHdvID0gJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnO1xyXG4gICAgLy8gY29uc3QgdGV4dExpbmtPbmUgPSAnMTUzIERpc2N1c3Npb25zJztcclxuICAgIC8vIGNvbnN0IHRleHRMaW5rVHdvID0gJzEyNyBEaXNjdXNzaW9ucyc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICB7RGF0YS5tYXAoKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG1hcmdpbkJvdHRvbT17JzE1cHgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtwcm9wcy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3Byb3BzLmJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17cHJvcHMubGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlN0b3JpZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBTdHlsaXMgZnJvbSAnQGVtb3Rpb24vc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMvdHJlZS9tYXN0ZXIvcGx1Z2lucy9ydWxlLXNoZWV0XG4vLyBpbmxpbmVkIHRvIGF2b2lkIHVtZCB3cmFwcGVyIGFuZCBwZWVyRGVwIHdhcm5pbmdzL2luc3RhbGxpbmcgc3R5bGlzXG4vLyBzaW5jZSB3ZSB1c2Ugc3R5bGlzIGFmdGVyIGNsb3N1cmUgY29tcGlsZXJcbnZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xudmFyIG5lZWRsZSA9IGRlbGltaXRlciArICd9JztcblxuZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICBpZiAoYmxvY2spIHtcbiAgICBTaGVldC5jdXJyZW50Lmluc2VydChibG9jayArICd9Jyk7XG4gIH1cbn1cblxudmFyIFNoZWV0ID0ge1xuICBjdXJyZW50OiBudWxsXG59O1xudmFyIHJ1bGVTaGVldCA9IGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gIHN3aXRjaCAoY29udGV4dCkge1xuICAgIC8vIHByb3BlcnR5XG4gICAgY2FzZSAxOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKGNvbnRlbnQuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIEBpbXBvcnRcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoY29udGVudCArICc7Jyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgbFxuXG4gICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgICAgICAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgICAgICAgICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gc2VsZWN0b3JcblxuICAgIGNhc2UgMjpcbiAgICAgIHtcbiAgICAgICAgaWYgKG5zID09PSAwKSByZXR1cm4gY29udGVudCArIGRlbGltaXRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gYXQtcnVsZVxuXG4gICAgY2FzZSAzOlxuICAgICAge1xuICAgICAgICBzd2l0Y2ggKG5zKSB7XG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgU2hlZXQuY3VycmVudC5pbnNlcnQoc2VsZWN0b3JzWzBdICsgY29udGVudCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBjYXNlIC0yOlxuICAgICAge1xuICAgICAgICBjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KTtcbiAgICAgIH1cbiAgfVxufTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSBvcHRpb25zID0ge307XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleSB8fCAnY3NzJztcbiAgdmFyIHN0eWxpc09wdGlvbnM7XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzdHlsaXNPcHRpb25zID0ge1xuICAgICAgcHJlZml4OiBvcHRpb25zLnByZWZpeFxuICAgIH07XG4gIH1cblxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhzdHlsaXNPcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuXG4gIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvbi1cIiArIGtleSk7IC8vICRGbG93Rml4TWVcblxuICAgICAgYXR0cmliLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAge1xuICAgIHN0eWxpcy51c2Uob3B0aW9ucy5zdHlsaXNQbHVnaW5zKShydWxlU2hlZXQpO1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICB2YXIgbmFtZSA9IHNlcmlhbGl6ZWQubmFtZTtcbiAgICAgIFNoZWV0LmN1cnJlbnQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwID0gc2VyaWFsaXplZC5tYXA7XG4gICAgICAgIFNoZWV0LmN1cnJlbnQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBtYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yLCBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtuYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmY3MzcxYTRjZDdlNjAwOWVmNjFkMGFcbiAgICB2YXIgY29tbWVudFN0YXJ0ID0gL1xcL1xcKi9nO1xuICAgIHZhciBjb21tZW50RW5kID0gL1xcKlxcLy9nO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdoaWxlIChjb21tZW50U3RhcnQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICBjb21tZW50RW5kLmxhc3RJbmRleCA9IGNvbW1lbnRTdGFydC5sYXN0SW5kZXg7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSBjb21tZW50RW5kLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBzdHlsZXMgaGF2ZSBhbiB1bnRlcm1pbmF0ZWQgY29tbWVudCAoXCIvKlwiIHdpdGhvdXQgY29ycmVzcG9uZGluZyBcIiovXCIpLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMpIHtcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmbGFnID0gJ2Vtb3Rpb24tZGlzYWJsZS1zZXJ2ZXItcmVuZGVyaW5nLXVuc2FmZS1zZWxlY3Rvci13YXJuaW5nLXBsZWFzZS1kby1ub3QtdXNlLXRoaXMtdGhlLXdhcm5pbmctZXhpc3RzLWZvci1hLXJlYXNvbic7XG4gICAgICAgICAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGNvbnRlbnQubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmVSZWdFeHAgPSBuZXcgUmVnRXhwKHVuc2FmZVBzZXVkb0NsYXNzICsgXCIuKlxcXFwvXFxcXCogXCIgKyBmbGFnICsgXCIgXFxcXCpcXFxcL1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlID0gaWdub3JlUmVnRXhwLnRlc3QoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3MgJiYgIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeVxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBjc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBjcmVhdGVDYWNoZSgpIDogbnVsbCk7XG52YXIgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEVtb3Rpb25DYWNoZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICAgIH0pO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gZm9yd2FyZFJlZihyZW5kZXIpO1xufTtcblxuLy8gdGh1cyB3ZSBvbmx5IG5lZWQgdG8gcmVwbGFjZSB3aGF0IGlzIGEgdmFsaWQgY2hhcmFjdGVyIGZvciBKUywgYnV0IG5vdCBmb3IgQ1NTXG5cbnZhciBzYW5pdGl6ZUlkZW50aWZpZXIgPSBmdW5jdGlvbiBzYW5pdGl6ZUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICByZXR1cm4gaWRlbnRpZmllci5yZXBsYWNlKC9cXCQvZywgJy0nKTtcbn07XG5cbnZhciB0eXBlUHJvcE5hbWUgPSAnX19FTU9USU9OX1RZUEVfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgbGFiZWxQcm9wTmFtZSA9ICdfX0VNT1RJT05fTEFCRUxfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGNhY2hlLCBwcm9wcywgdGhlbWUsIHJlZikge1xuICB2YXIgY3NzUHJvcCA9IHRoZW1lID09PSBudWxsID8gcHJvcHMuY3NzIDogcHJvcHMuY3NzKHRoZW1lKTsgLy8gc28gdGhhdCB1c2luZyBgY3NzYCBmcm9tIGBlbW90aW9uYCBhbmQgcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBjc3MgcHJvcCB3b3Jrc1xuICAvLyBub3QgcGFzc2luZyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBzZXJpYWxpemVTdHlsZXMgYmVjYXVzZSBpdCB3b3VsZFxuICAvLyBtYWtlIGNlcnRhaW4gYmFiZWwgb3B0aW1pc2F0aW9ucyBub3QgcG9zc2libGVcblxuICBpZiAodHlwZW9mIGNzc1Byb3AgPT09ICdzdHJpbmcnICYmIGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNzc1Byb3AgPSBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBwcm9wc1t0eXBlUHJvcE5hbWVdO1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtjc3NQcm9wXTtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMoY2FjaGUucmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICB2YXIgbGFiZWxGcm9tU3RhY2sgPSBwcm9wc1tsYWJlbFByb3BOYW1lXTtcblxuICAgIGlmIChsYWJlbEZyb21TdGFjaykge1xuICAgICAgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc2VyaWFsaXplZCwgJ2xhYmVsOicgKyBsYWJlbEZyb21TdGFjayArICc7J10pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBydWxlcyA9IGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKTtcbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB2YXIgZWxlID0gY3JlYXRlRWxlbWVudCh0eXBlLCBuZXdQcm9wcyk7XG5cbiAgcmV0dXJuIGVsZTtcbn07XG5cbnZhciBFbW90aW9uID1cbi8qICNfX1BVUkVfXyAqL1xud2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgLy8gdXNlIENvbnRleHQucmVhZCBmb3IgdGhlIHRoZW1lIHdoZW4gaXQncyBzdGFibGVcbiAgaWYgKHR5cGVvZiBwcm9wcy5jc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIG51bGwsIHJlZik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn0gLy8gJEZsb3dGaXhNZVxuXG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vY3NzJyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKGVycm9yLnN0YWNrKSB7XG4gICAgICAvLyBjaHJvbWVcbiAgICAgIHZhciBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC9hdCAoPzpPYmplY3RcXC58TW9kdWxlXFwufClqc3guKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXokXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXokXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlO1xudmFyIEdsb2JhbCA9XG4vKiAjX19QVVJFX18gKi9cbndpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzKHRoZW1lKV0pO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICAgICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICAgICAgY2FjaGU6IGNhY2hlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGNhY2hlOiBjYWNoZVxuICB9KTtcbn0pO1xuXG4vLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xudmFyIElubmVyR2xvYmFsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyR2xvYmFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lckdsb2JhbChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJHbG9iYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCItZ2xvYmFsXCIsXG4gICAgICBub25jZTogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5jb250YWluZXJcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsgdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIj1cXFwiXCIgKyB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGVldC50YWdzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gdGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlcmlhbGl6ZWQubmFtZSAhPT0gdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMkMSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKHRoaXMucHJvcHMuY2FjaGUsIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGVldC50YWdzW3RoaXMuc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5jYWNoZS5pbnNlcnQoXCJcIiwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLCB0aGlzLnNoZWV0LCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSW5uZXJHbG9iYWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgQ2xhc3NOYW1lcyA9IHdpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0KSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIGhhc1JlbmRlcmVkID0gZmFsc2U7XG5cbiAgICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc3MgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjb250ZXh0LnJlZ2lzdGVyZWQpO1xuXG4gICAgICB7XG4gICAgICAgIGluc2VydFN0eWxlcyhjb250ZXh0LCBzZXJpYWxpemVkLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZXh0LmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICAgIH07XG5cbiAgICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZShjb250ZXh0LnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gICAgfTtcblxuICAgIHZhciBjb250ZW50ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBjeDogY3gsXG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9O1xuICAgIHZhciBlbGUgPSBwcm9wcy5jaGlsZHJlbihjb250ZW50KTtcbiAgICBoYXNSZW5kZXJlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gZWxlO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyLCBDbGFzc05hbWVzLCBHbG9iYWwsIFRoZW1lQ29udGV4dCwganN4LCBrZXlmcmFtZXMsIHdpdGhFbW90aW9uQ2FjaGUgfTtcbiIsImltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiAmJiBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XG4gICAgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiAhY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvLztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShfdGFnLCBiZWZvcmUpO1xuICAgICAgdGhpcy50YWdzLnB1c2goX3RhZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHJlYWxseSBob3QgcGF0aFxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxuICAgICAgICAvLyBhcyB0aGUgc2Vjb25kIGNoYXJhY3RlciB3aWxsIGhhcHBlbiBsZXNzIG9mdGVuIHRoYW5cbiAgICAgICAgLy8gaGF2aW5nIFwiQFwiIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZXJlIHdpbGwgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgdGhpcyBtZWFucyB0aGF0IHRoZSBAaW1wb3J0IHJ1bGVzIHdpbGxcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcbiAgICAgICAgLy8gYmUgdGhlIGZpcnN0IG9uZXMgaW4gcHJvZCBhbmQgZ2VuZXJhbGx5IGxhdGVyIGluIGRldlxuICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCByZWFsbHkgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkIHRob3VnaFxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cbiAgICAgICAgLy8gc28gd2hpbGUgdGhpcyBjb3VsZCBiZSB0ZWNobmljYWxseSBjb3JyZWN0IHRoZW4gaXQgd291bGQgYmUgc2xvd2VyIGFuZCBsYXJnZXJcbiAgICAgICAgLy8gZm9yIGEgdGlueSBiaXQgb2YgY29ycmVjdG5lc3MgdGhhdCB3b24ndCBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc1Byb3BWYWxpZCBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUsIFRoZW1lQ29udGV4dCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIHRlc3RPbWl0UHJvcHNPblN0cmluZ1RhZyA9IGlzUHJvcFZhbGlkO1xuXG52YXIgdGVzdE9taXRQcm9wc09uQ29tcG9uZW50ID0gZnVuY3Rpb24gdGVzdE9taXRQcm9wc09uQ29tcG9uZW50KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSAndGhlbWUnICYmIGtleSAhPT0gJ2lubmVyUmVmJztcbn07XG5cbnZhciBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AodGFnKSB7XG4gIHJldHVybiB0eXBlb2YgdGFnID09PSAnc3RyaW5nJyAmJiAvLyA5NiBpcyBvbmUgbGVzcyB0aGFuIHRoZSBjaGFyIGNvZGVcbiAgLy8gZm9yIFwiYVwiIHNvIHRoaXMgaXMgY2hlY2tpbmcgdGhhdFxuICAvLyBpdCdzIGEgbG93ZXJjYXNlIGNoYXJhY3RlclxuICB0YWcuY2hhckNvZGVBdCgwKSA+IDk2ID8gdGVzdE9taXRQcm9wc09uU3RyaW5nVGFnIDogdGVzdE9taXRQcm9wc09uQ29tcG9uZW50O1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG5cbnZhciBjcmVhdGVTdHlsZWQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZWQodGFnLCBvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgdHJ5aW5nIHRvIGNyZWF0ZSBhIHN0eWxlZCBlbGVtZW50IHdpdGggYW4gdW5kZWZpbmVkIGNvbXBvbmVudC5cXG5Zb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIGltcG9ydCBpdC4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaWRlbnRpZmllck5hbWU7XG4gIHZhciBzaG91bGRGb3J3YXJkUHJvcDtcbiAgdmFyIHRhcmdldENsYXNzTmFtZTtcblxuICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWRlbnRpZmllck5hbWUgPSBvcHRpb25zLmxhYmVsO1xuICAgIHRhcmdldENsYXNzTmFtZSA9IG9wdGlvbnMudGFyZ2V0O1xuICAgIHNob3VsZEZvcndhcmRQcm9wID0gdGFnLl9fZW1vdGlvbl9mb3J3YXJkUHJvcCAmJiBvcHRpb25zLnNob3VsZEZvcndhcmRQcm9wID8gZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICByZXR1cm4gdGFnLl9fZW1vdGlvbl9mb3J3YXJkUHJvcChwcm9wTmFtZSkgJiYgLy8gJEZsb3dGaXhNZVxuICAgICAgb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcChwcm9wTmFtZSk7XG4gICAgfSA6IG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3A7XG4gIH1cblxuICB2YXIgaXNSZWFsID0gdGFnLl9fZW1vdGlvbl9yZWFsID09PSB0YWc7XG4gIHZhciBiYXNlVGFnID0gaXNSZWFsICYmIHRhZy5fX2Vtb3Rpb25fYmFzZSB8fCB0YWc7XG5cbiAgaWYgKHR5cGVvZiBzaG91bGRGb3J3YXJkUHJvcCAhPT0gJ2Z1bmN0aW9uJyAmJiBpc1JlYWwpIHtcbiAgICBzaG91bGRGb3J3YXJkUHJvcCA9IHRhZy5fX2Vtb3Rpb25fZm9yd2FyZFByb3A7XG4gIH1cblxuICB2YXIgZGVmYXVsdFNob3VsZEZvcndhcmRQcm9wID0gc2hvdWxkRm9yd2FyZFByb3AgfHwgZ2V0RGVmYXVsdFNob3VsZEZvcndhcmRQcm9wKGJhc2VUYWcpO1xuICB2YXIgc2hvdWxkVXNlQXMgPSAhZGVmYXVsdFNob3VsZEZvcndhcmRQcm9wKCdhcycpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBzdHlsZXMgPSBpc1JlYWwgJiYgdGFnLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCA/IHRhZy5fX2Vtb3Rpb25fc3R5bGVzLnNsaWNlKDApIDogW107XG5cbiAgICBpZiAoaWRlbnRpZmllck5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3R5bGVzLnB1c2goXCJsYWJlbDpcIiArIGlkZW50aWZpZXJOYW1lICsgXCI7XCIpO1xuICAgIH1cblxuICAgIGlmIChhcmdzWzBdID09IG51bGwgfHwgYXJnc1swXS5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3R5bGVzLnB1c2guYXBwbHkoc3R5bGVzLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnc1swXVswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMucHVzaChhcmdzWzBdWzBdKTtcbiAgICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICAgIHZhciBpID0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmdzWzBdW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlcy5wdXNoKGFyZ3NbaV0sIGFyZ3NbMF1baV0pO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZTogd2UgbmVlZCB0byBjYXN0IFN0YXRlbGVzc0Z1bmN0aW9uYWxDb21wb25lbnQgdG8gb3VyIFByaXZhdGVTdHlsZWRDb21wb25lbnQgY2xhc3NcblxuXG4gICAgdmFyIFN0eWxlZCA9IHdpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0LCByZWYpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHZhciBmaW5hbFRhZyA9IHNob3VsZFVzZUFzICYmIHByb3BzLmFzIHx8IGJhc2VUYWc7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgdmFyIGNsYXNzSW50ZXJwb2xhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIG1lcmdlZFByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLnRoZW1lID09IG51bGwpIHtcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBtZXJnZWRQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXJnZWRQcm9wcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjb250ZXh0LnJlZ2lzdGVyZWQsIGNsYXNzSW50ZXJwb2xhdGlvbnMsIHByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHN0eWxlcy5jb25jYXQoY2xhc3NJbnRlcnBvbGF0aW9ucyksIGNvbnRleHQucmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpO1xuICAgICAgICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgdHlwZW9mIGZpbmFsVGFnID09PSAnc3RyaW5nJyk7XG4gICAgICAgIGNsYXNzTmFtZSArPSBjb250ZXh0LmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaW5hbFNob3VsZEZvcndhcmRQcm9wID0gc2hvdWxkVXNlQXMgJiYgc2hvdWxkRm9yd2FyZFByb3AgPT09IHVuZGVmaW5lZCA/IGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcChmaW5hbFRhZykgOiBkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3A7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVXNlQXMgJiYgX2tleSA9PT0gJ2FzJykgY29udGludWU7XG5cbiAgICAgICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgICAgICBmaW5hbFNob3VsZEZvcndhcmRQcm9wKF9rZXkpKSB7XG4gICAgICAgICAgICBuZXdQcm9wc1tfa2V5XSA9IHByb3BzW19rZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgbmV3UHJvcHMucmVmID0gcmVmIHx8IHByb3BzLmlubmVyUmVmO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb3BzLmlubmVyUmVmKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGlubmVyUmVmYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uLCBwbGVhc2UgdXNlIHRoZSBgcmVmYCBwcm9wIGluc3RlYWQnICsgKGlkZW50aWZpZXJOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IFwiIGluIHRoZSB1c2FnZSBvZiBgXCIgKyBpZGVudGlmaWVyTmFtZSArIFwiYFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlID0gY3JlYXRlRWxlbWVudChmaW5hbFRhZywgbmV3UHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBTdHlsZWQuZGlzcGxheU5hbWUgPSBpZGVudGlmaWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gaWRlbnRpZmllck5hbWUgOiBcIlN0eWxlZChcIiArICh0eXBlb2YgYmFzZVRhZyA9PT0gJ3N0cmluZycgPyBiYXNlVGFnIDogYmFzZVRhZy5kaXNwbGF5TmFtZSB8fCBiYXNlVGFnLm5hbWUgfHwgJ0NvbXBvbmVudCcpICsgXCIpXCI7XG4gICAgU3R5bGVkLmRlZmF1bHRQcm9wcyA9IHRhZy5kZWZhdWx0UHJvcHM7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9yZWFsID0gU3R5bGVkO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fYmFzZSA9IGJhc2VUYWc7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9zdHlsZXMgPSBzdHlsZXM7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9mb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHlsZWQsICd0b1N0cmluZycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRhcmdldENsYXNzTmFtZSA9PT0gdW5kZWZpbmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUic7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZTogY29lcmNlIHVuZGVmaW5lZCB0byBzdHJpbmdcblxuXG4gICAgICAgIHJldHVybiBcIi5cIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFN0eWxlZC53aXRoQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5leHRUYWcsIG5leHRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3R5bGVkKG5leHRUYWcsIG5leHRPcHRpb25zICE9PSB1bmRlZmluZWQgPyBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zIHx8IHt9LCB7fSwgbmV4dE9wdGlvbnMpIDogb3B0aW9ucykuYXBwbHkodm9pZCAwLCBzdHlsZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3R5bGVkO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3R5bGVkO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQtYmFzZSc7XG5cbnZhciB0YWdzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5cbnZhciBuZXdTdHlsZWQgPSBzdHlsZWQuYmluZCgpO1xudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gIG5ld1N0eWxlZFt0YWdOYW1lXSA9IG5ld1N0eWxlZCh0YWdOYW1lKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBuZXdTdHlsZWQ7XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSAmJiBjYWNoZS5jb21wYXQgIT09IHVuZGVmaW5lZCkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoXCIuXCIgKyBjbGFzc05hbWUsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfTtcbiIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGNhY2hlLmdldChhcmcpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBmdW5jKGFyZyk7XG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2Vha01lbW9pemU7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJhY2tncm91bmQ6IHRydWUsXG4gIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgYmFja2dyb3VuZFNpemU6IHRydWUsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogdHJ1ZSxcbiAgYmFja2dyb3VuZFJlcGVhdDogdHJ1ZVxufTtcbmNvbmZpZy5iZ0ltYWdlID0gY29uZmlnLmJhY2tncm91bmRJbWFnZTtcbmNvbmZpZy5iZ1NpemUgPSBjb25maWcuYmFja2dyb3VuZFNpemU7XG5jb25maWcuYmdQb3NpdGlvbiA9IGNvbmZpZy5iYWNrZ3JvdW5kUG9zaXRpb247XG5jb25maWcuYmdSZXBlYXQgPSBjb25maWcuYmFja2dyb3VuZFJlcGVhdDtcbmV4cG9ydCB2YXIgYmFja2dyb3VuZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYm9yZGVyOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXInLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlcldpZHRoJyxcbiAgICBzY2FsZTogJ2JvcmRlcldpZHRocydcbiAgfSxcbiAgYm9yZGVyU3R5bGU6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclN0eWxlJyxcbiAgICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbiAgfSxcbiAgYm9yZGVyQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckNvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0JyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyTGVmdDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyTGVmdCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJYOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJMZWZ0JywgJ2JvcmRlclJpZ2h0J10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJZOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJUb3AnLCAnYm9yZGVyQm90dG9tJ10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9XG59O1xuY29uZmlnLmJvcmRlclRvcFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlclRvcENvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclRvcFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlclRvcExlZnRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tV2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tQ29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tQ29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tU3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tU3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0V2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlckxlZnRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0Q29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyTGVmdFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0U3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmV4cG9ydCB2YXIgYm9yZGVyID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBib3JkZXI7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdjb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIHByb3BlcnR5OiAnYmFja2dyb3VuZENvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgb3BhY2l0eTogdHJ1ZVxufTtcbmNvbmZpZy5iZyA9IGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG5leHBvcnQgdmFyIGNvbG9yID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBjb2xvcjtcbiIsImltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5leHBvcnQgdmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICB2YXIgcmVzdWx0ID0gYXNzaWduKHt9LCBhLCBiKTtcblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIHZhciBfYXNzaWduO1xuXG4gICAgaWYgKCFhW2tleV0gfHwgdHlwZW9mIGJba2V5XSAhPT0gJ29iamVjdCcpIGNvbnRpbnVlO1xuICAgIGFzc2lnbihyZXN1bHQsIChfYXNzaWduID0ge30sIF9hc3NpZ25ba2V5XSA9IGFzc2lnbihhW2tleV0sIGJba2V5XSksIF9hc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyBzb3J0IG9iamVjdC12YWx1ZSByZXNwb25zaXZlIHN0eWxlc1xuXG52YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQob2JqKSB7XG4gIHZhciBuZXh0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYiwgdW5kZWZpbmVkLCB7XG4gICAgICBudW1lcmljOiB0cnVlLFxuICAgICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICAgIH0pO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBuZXh0W2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBicmVha3BvaW50czogWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuICsgJ2VtJztcbiAgfSlcbn07XG5cbnZhciBjcmVhdGVNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gY3JlYXRlTWVkaWFRdWVyeShuKSB7XG4gIHJldHVybiBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IFwiICsgbiArIFwiKVwiO1xufTtcblxudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUobiwgc2NhbGUpIHtcbiAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG59O1xuXG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmosIGtleSwgZGVmLCBwLCB1bmRlZikge1xuICBrZXkgPSBrZXkgJiYga2V5LnNwbGl0ID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcblxuICBmb3IgKHAgPSAwOyBwIDwga2V5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW2tleVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmID8gZGVmIDogb2JqO1xufTtcbmV4cG9ydCB2YXIgY3JlYXRlUGFyc2VyID0gZnVuY3Rpb24gY3JlYXRlUGFyc2VyKGNvbmZpZykge1xuICB2YXIgY2FjaGUgPSB7fTtcblxuICB2YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShwcm9wcykge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgc2hvdWxkU29ydCA9IGZhbHNlO1xuICAgIHZhciBpc0NhY2hlRGlzYWJsZWQgPSBwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5kaXNhYmxlU3R5bGVkU3lzdGVtQ2FjaGU7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmICghY29uZmlnW2tleV0pIGNvbnRpbnVlO1xuICAgICAgdmFyIHN4ID0gY29uZmlnW2tleV07XG4gICAgICB2YXIgcmF3ID0gcHJvcHNba2V5XTtcbiAgICAgIHZhciBzY2FsZSA9IGdldChwcm9wcy50aGVtZSwgc3guc2NhbGUsIHN4LmRlZmF1bHRzKTtcblxuICAgICAgaWYgKHR5cGVvZiByYXcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNhY2hlLmJyZWFrcG9pbnRzID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5icmVha3BvaW50cyB8fCBnZXQocHJvcHMudGhlbWUsICdicmVha3BvaW50cycsIGRlZmF1bHRzLmJyZWFrcG9pbnRzKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXcpKSB7XG4gICAgICAgICAgY2FjaGUubWVkaWEgPSAhaXNDYWNoZURpc2FibGVkICYmIGNhY2hlLm1lZGlhIHx8IFtudWxsXS5jb25jYXQoY2FjaGUuYnJlYWtwb2ludHMubWFwKGNyZWF0ZU1lZGlhUXVlcnkpKTtcbiAgICAgICAgICBzdHlsZXMgPSBtZXJnZShzdHlsZXMsIHBhcnNlUmVzcG9uc2l2ZVN0eWxlKGNhY2hlLm1lZGlhLCBzeCwgc2NhbGUsIHJhdywgcHJvcHMpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYXcgIT09IG51bGwpIHtcbiAgICAgICAgICBzdHlsZXMgPSBtZXJnZShzdHlsZXMsIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChjYWNoZS5icmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcsIHByb3BzKSk7XG4gICAgICAgICAgc2hvdWxkU29ydCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXNzaWduKHN0eWxlcywgc3gocmF3LCBzY2FsZSwgcHJvcHMpKTtcbiAgICB9IC8vIHNvcnQgb2JqZWN0LWJhc2VkIHJlc3BvbnNpdmUgc3R5bGVzXG5cblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICBzdHlsZXMgPSBzb3J0KHN0eWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfTtcblxuICBwYXJzZS5jb25maWcgPSBjb25maWc7XG4gIHBhcnNlLnByb3BOYW1lcyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIHBhcnNlLmNhY2hlID0gY2FjaGU7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gayAhPT0gJ2NvbmZpZyc7XG4gIH0pO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIF9jcmVhdGVQYXJzZXI7XG5cbiAgICAgIHBhcnNlW2tleV0gPSBjcmVhdGVQYXJzZXIoKF9jcmVhdGVQYXJzZXIgPSB7fSwgX2NyZWF0ZVBhcnNlcltrZXldID0gY29uZmlnW2tleV0sIF9jcmVhdGVQYXJzZXIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZTtcbn07XG5cbnZhciBwYXJzZVJlc3BvbnNpdmVTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZVN0eWxlKG1lZGlhUXVlcmllcywgc3gsIHNjYWxlLCByYXcsIF9wcm9wcykge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHJhdy5zbGljZSgwLCBtZWRpYVF1ZXJpZXMubGVuZ3RoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG5cbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICBhc3NpZ24oc3R5bGVzLCBzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfYXNzaWduMjtcblxuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24yID0ge30sIF9hc3NpZ24yW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VSZXNwb25zaXZlT2JqZWN0KGJyZWFrcG9pbnRzLCBzeCwgc2NhbGUsIHJhdywgX3Byb3BzKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcmF3KSB7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBicmVha3BvaW50c1trZXldO1xuICAgIHZhciB2YWx1ZSA9IHJhd1trZXldO1xuICAgIHZhciBzdHlsZSA9IHN4KHZhbHVlLCBzY2FsZSwgX3Byb3BzKTtcblxuICAgIGlmICghYnJlYWtwb2ludCkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjM7XG5cbiAgICAgIHZhciBtZWRpYSA9IGNyZWF0ZU1lZGlhUXVlcnkoYnJlYWtwb2ludCk7XG4gICAgICBhc3NpZ24oc3R5bGVzLCAoX2Fzc2lnbjMgPSB7fSwgX2Fzc2lnbjNbbWVkaWFdID0gYXNzaWduKHt9LCBzdHlsZXNbbWVkaWFdLCBzdHlsZSksIF9hc3NpZ24zKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlU3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRnVuY3Rpb24oX3JlZikge1xuICB2YXIgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcyxcbiAgICAgIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIF9yZWYkdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gZ2V0VmFsdWUgOiBfcmVmJHRyYW5zZm9ybSxcbiAgICAgIGRlZmF1bHRTY2FsZSA9IF9yZWYuZGVmYXVsdFNjYWxlO1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBbcHJvcGVydHldO1xuXG4gIHZhciBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSwgX3Byb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBuID0gdHJhbnNmb3JtKHZhbHVlLCBzY2FsZSwgX3Byb3BzKTtcbiAgICBpZiAobiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmVzdWx0W3Byb3BdID0gbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHN4LnNjYWxlID0gc2NhbGU7XG4gIHN4LmRlZmF1bHRzID0gZGVmYXVsdFNjYWxlO1xuICByZXR1cm4gc3g7XG59OyAvLyBuZXcgdjUgQVBJXG5cbmV4cG9ydCB2YXIgc3lzdGVtID0gZnVuY3Rpb24gc3lzdGVtKGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSB7fTtcbiAgfVxuXG4gIHZhciBjb25maWcgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNvbmYgPSBhcmdzW2tleV07XG5cbiAgICBpZiAoY29uZiA9PT0gdHJ1ZSkge1xuICAgICAgLy8gc2hvcnRjdXQgZGVmaW5pdGlvblxuICAgICAgY29uZmlnW2tleV0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKHtcbiAgICAgICAgcHJvcGVydHk6IGtleSxcbiAgICAgICAgc2NhbGU6IGtleVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdba2V5XSA9IGNvbmY7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnW2tleV0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKGNvbmYpO1xuICB9KTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbmV4cG9ydCB2YXIgY29tcG9zZSA9IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIHZhciBjb25maWcgPSB7fTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyc2VycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJzZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICBpZiAoIXBhcnNlciB8fCAhcGFyc2VyLmNvbmZpZykgcmV0dXJuO1xuICAgIGFzc2lnbihjb25maWcsIHBhcnNlci5jb25maWcpO1xuICB9KTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvZGx2XG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmosIGtleSwgZGVmLCBwLCB1bmRlZikge1xuICBrZXkgPSBrZXkgJiYga2V5LnNwbGl0ID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcblxuICBmb3IgKHAgPSAwOyBwIDwga2V5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW2tleVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmID8gZGVmIDogb2JqO1xufTtcbnZhciBkZWZhdWx0QnJlYWtwb2ludHMgPSBbNDAsIDUyLCA2NF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBuICsgJ2VtJztcbn0pO1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgYWxpYXNlcyA9IHtcbiAgYmc6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICBtOiAnbWFyZ2luJyxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBteDogJ21hcmdpblgnLFxuICBteTogJ21hcmdpblknLFxuICBwOiAncGFkZGluZycsXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIHB4OiAncGFkZGluZ1gnLFxuICBweTogJ3BhZGRpbmdZJ1xufTtcbnZhciBtdWx0aXBsZXMgPSB7XG4gIG1hcmdpblg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBtYXJnaW5ZOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgcGFkZGluZ1g6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHBhZGRpbmdZOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBzaXplOiBbJ3dpZHRoJywgJ2hlaWdodCddXG59O1xudmFyIHNjYWxlcyA9IHtcbiAgY29sb3I6ICdjb2xvcnMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJDb2xvcjogJ2NvbG9ycycsXG4gIG1hcmdpbjogJ3NwYWNlJyxcbiAgbWFyZ2luVG9wOiAnc3BhY2UnLFxuICBtYXJnaW5SaWdodDogJ3NwYWNlJyxcbiAgbWFyZ2luQm90dG9tOiAnc3BhY2UnLFxuICBtYXJnaW5MZWZ0OiAnc3BhY2UnLFxuICBtYXJnaW5YOiAnc3BhY2UnLFxuICBtYXJnaW5ZOiAnc3BhY2UnLFxuICBwYWRkaW5nOiAnc3BhY2UnLFxuICBwYWRkaW5nVG9wOiAnc3BhY2UnLFxuICBwYWRkaW5nUmlnaHQ6ICdzcGFjZScsXG4gIHBhZGRpbmdCb3R0b206ICdzcGFjZScsXG4gIHBhZGRpbmdMZWZ0OiAnc3BhY2UnLFxuICBwYWRkaW5nWDogJ3NwYWNlJyxcbiAgcGFkZGluZ1k6ICdzcGFjZScsXG4gIHRvcDogJ3NwYWNlJyxcbiAgcmlnaHQ6ICdzcGFjZScsXG4gIGJvdHRvbTogJ3NwYWNlJyxcbiAgbGVmdDogJ3NwYWNlJyxcbiAgZ3JpZEdhcDogJ3NwYWNlJyxcbiAgZ3JpZENvbHVtbkdhcDogJ3NwYWNlJyxcbiAgZ3JpZFJvd0dhcDogJ3NwYWNlJyxcbiAgZ2FwOiAnc3BhY2UnLFxuICBjb2x1bW5HYXA6ICdzcGFjZScsXG4gIHJvd0dhcDogJ3NwYWNlJyxcbiAgZm9udEZhbWlseTogJ2ZvbnRzJyxcbiAgZm9udFNpemU6ICdmb250U2l6ZXMnLFxuICBmb250V2VpZ2h0OiAnZm9udFdlaWdodHMnLFxuICBsaW5lSGVpZ2h0OiAnbGluZUhlaWdodHMnLFxuICBsZXR0ZXJTcGFjaW5nOiAnbGV0dGVyU3BhY2luZ3MnLFxuICBib3JkZXI6ICdib3JkZXJzJyxcbiAgYm9yZGVyVG9wOiAnYm9yZGVycycsXG4gIGJvcmRlclJpZ2h0OiAnYm9yZGVycycsXG4gIGJvcmRlckJvdHRvbTogJ2JvcmRlcnMnLFxuICBib3JkZXJMZWZ0OiAnYm9yZGVycycsXG4gIGJvcmRlcldpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJUb3BDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlclRvcFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyQm90dG9tV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJCb3R0b21Db2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckJvdHRvbVN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyTGVmdFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyTGVmdENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyTGVmdFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmlnaHRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclJpZ2h0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJSaWdodFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgb3V0bGluZUNvbG9yOiAnY29sb3JzJyxcbiAgYm94U2hhZG93OiAnc2hhZG93cycsXG4gIHRleHRTaGFkb3c6ICdzaGFkb3dzJyxcbiAgekluZGV4OiAnekluZGljZXMnLFxuICB3aWR0aDogJ3NpemVzJyxcbiAgbWluV2lkdGg6ICdzaXplcycsXG4gIG1heFdpZHRoOiAnc2l6ZXMnLFxuICBoZWlnaHQ6ICdzaXplcycsXG4gIG1pbkhlaWdodDogJ3NpemVzJyxcbiAgbWF4SGVpZ2h0OiAnc2l6ZXMnLFxuICBmbGV4QmFzaXM6ICdzaXplcycsXG4gIHNpemU6ICdzaXplcycsXG4gIC8vIHN2Z1xuICBmaWxsOiAnY29sb3JzJyxcbiAgc3Ryb2tlOiAnY29sb3JzJ1xufTtcblxudmFyIHBvc2l0aXZlT3JOZWdhdGl2ZSA9IGZ1bmN0aW9uIHBvc2l0aXZlT3JOZWdhdGl2ZShzY2FsZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgPj0gMCkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyh2YWx1ZSk7XG4gIHZhciBuID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuICBpZiAodHlwZW9mIG4gPT09ICdzdHJpbmcnKSByZXR1cm4gJy0nICsgbjtcbiAgcmV0dXJuIG4gKiAtMTtcbn07XG5cbnZhciB0cmFuc2Zvcm1zID0gWydtYXJnaW4nLCAnbWFyZ2luVG9wJywgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsICdtYXJnaW5MZWZ0JywgJ21hcmdpblgnLCAnbWFyZ2luWScsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjdXJyXSA9IHBvc2l0aXZlT3JOZWdhdGl2ZSwgX2V4dGVuZHMyKSk7XG59LCB7fSk7XG5leHBvcnQgdmFyIHJlc3BvbnNpdmUgPSBmdW5jdGlvbiByZXNwb25zaXZlKHN0eWxlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIG5leHQgPSB7fTtcbiAgICB2YXIgYnJlYWtwb2ludHMgPSBnZXQodGhlbWUsICdicmVha3BvaW50cycsIGRlZmF1bHRCcmVha3BvaW50cyk7XG4gICAgdmFyIG1lZGlhUXVlcmllcyA9IFtudWxsXS5jb25jYXQoYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygc3R5bGVzW2tleV0gPT09ICdmdW5jdGlvbicgPyBzdHlsZXNba2V5XSh0aGVtZSkgOiBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1lZGlhID0gbWVkaWFRdWVyaWVzW2ldO1xuXG4gICAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRbbWVkaWFdID0gbmV4dFttZWRpYV0gfHwge307XG4gICAgICAgIGlmICh2YWx1ZVtpXSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgbmV4dFttZWRpYV1ba2V5XSA9IHZhbHVlW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9O1xufTtcbmV4cG9ydCB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VGhlbWUsIHt9LCBwcm9wcy50aGVtZSB8fCBwcm9wcyk7XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIG9iaiA9IHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nID8gYXJncyh0aGVtZSkgOiBhcmdzO1xuICAgIHZhciBzdHlsZXMgPSByZXNwb25zaXZlKG9iaikodGhlbWUpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHggPSBzdHlsZXNba2V5XTtcbiAgICAgIHZhciB2YWwgPSB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyA/IHgodGhlbWUpIDogeDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICAgIHZhciB2YXJpYW50ID0gY3NzKGdldCh0aGVtZSwgdmFsKSkodGhlbWUpO1xuICAgICAgICByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7fSwgdmFyaWFudCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gY3NzKHZhbCkodGhlbWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3AgPSBnZXQoYWxpYXNlcywga2V5LCBrZXkpO1xuICAgICAgdmFyIHNjYWxlTmFtZSA9IGdldChzY2FsZXMsIHByb3ApO1xuICAgICAgdmFyIHNjYWxlID0gZ2V0KHRoZW1lLCBzY2FsZU5hbWUsIGdldCh0aGVtZSwgcHJvcCwge30pKTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnZXQodHJhbnNmb3JtcywgcHJvcCwgZ2V0KTtcbiAgICAgIHZhciB2YWx1ZSA9IHRyYW5zZm9ybShzY2FsZSwgdmFsLCB2YWwpO1xuXG4gICAgICBpZiAobXVsdGlwbGVzW3Byb3BdKSB7XG4gICAgICAgIHZhciBkaXJzID0gbXVsdGlwbGVzW3Byb3BdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYWxpZ25JdGVtczogdHJ1ZSxcbiAgYWxpZ25Db250ZW50OiB0cnVlLFxuICBqdXN0aWZ5SXRlbXM6IHRydWUsXG4gIGp1c3RpZnlDb250ZW50OiB0cnVlLFxuICBmbGV4V3JhcDogdHJ1ZSxcbiAgZmxleERpcmVjdGlvbjogdHJ1ZSxcbiAgLy8gaXRlbVxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleEJhc2lzOiB0cnVlLFxuICBqdXN0aWZ5U2VsZjogdHJ1ZSxcbiAgYWxpZ25TZWxmOiB0cnVlLFxuICBvcmRlcjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZmxleGJveCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZmxleGJveDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZ3JpZEdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZEdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkQ29sdW1uR2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkQ29sdW1uR2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRSb3dHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRSb3dHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9GbG93OiB0cnVlLFxuICBncmlkQXV0b0NvbHVtbnM6IHRydWUsXG4gIGdyaWRBdXRvUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlXG59O1xuZXhwb3J0IHZhciBncmlkID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuIiwiaW1wb3J0IHsgc3lzdGVtLCBnZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmICFpc05hTihuKTtcbn07XG5cbnZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sICFpc051bWJlcihuKSB8fCBuID4gMSA/IG4gOiBuICogMTAwICsgJyUnKTtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIHdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICd3aWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcycsXG4gICAgdHJhbnNmb3JtOiBnZXRXaWR0aFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2hlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21pbldpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtaW5IZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21pbkhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4V2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21heFdpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtYXhIZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21heEhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgc2l6ZToge1xuICAgIHByb3BlcnRpZXM6IFsnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgb3ZlcmZsb3c6IHRydWUsXG4gIG92ZXJmbG93WDogdHJ1ZSxcbiAgb3ZlcmZsb3dZOiB0cnVlLFxuICBkaXNwbGF5OiB0cnVlLFxuICB2ZXJ0aWNhbEFsaWduOiB0cnVlXG59O1xuZXhwb3J0IHZhciBsYXlvdXQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIHpJbmRleDoge1xuICAgIHByb3BlcnR5OiAnekluZGV4JyxcbiAgICBzY2FsZTogJ3pJbmRpY2VzJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwcm9wZXJ0eTogJ3RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICByaWdodDoge1xuICAgIHByb3BlcnR5OiAncmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbGVmdDoge1xuICAgIHByb3BlcnR5OiAnbGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuZXhwb3J0IHZhciBwb3NpdGlvbiA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB2YXIgc2hhZG93ID0gc3lzdGVtKHtcbiAgYm94U2hhZG93OiB7XG4gICAgcHJvcGVydHk6ICdib3hTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfSxcbiAgdGV4dFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAndGV4dFNoYWRvdycsXG4gICAgc2NhbGU6ICdzaGFkb3dzJ1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvdztcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IHsgY29tcG9zZSwgc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xudmFyIGFsbCA9IGNvbXBvc2Uoc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSk7XG5leHBvcnQgdmFyIHByb3BzID0gYWxsLnByb3BOYW1lcztcbmV4cG9ydCB2YXIgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIiArIHByb3BzLmpvaW4oJ3wnKSArIFwiKSRcIik7XG4gIHJldHVybiBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIGlzUHJvcFZhbGlkKHByb3ApICYmICFyZWdleC50ZXN0KHByb3ApO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcyk7XG4iLCJpbXBvcnQgeyBnZXQsIHN5c3RlbSwgY29tcG9zZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldE1hcmdpbiA9IGZ1bmN0aW9uIGdldE1hcmdpbihuLCBzY2FsZSkge1xuICBpZiAoIWlzTnVtYmVyKG4pKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG4gIH1cblxuICB2YXIgaXNOZWdhdGl2ZSA9IG4gPCAwO1xuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyhuKTtcbiAgdmFyIHZhbHVlID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuXG4gIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmUgPyAnLScgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpO1xufTtcblxudmFyIGNvbmZpZ3MgPSB7fTtcbmNvbmZpZ3MubWFyZ2luID0ge1xuICBtYXJnaW46IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbicsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Ub3A6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblRvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5SaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Cb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luTGVmdDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5YOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5ZOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5tYXJnaW4ubSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbjtcbmNvbmZpZ3MubWFyZ2luLm10ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luVG9wO1xuY29uZmlncy5tYXJnaW4ubXIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5SaWdodDtcbmNvbmZpZ3MubWFyZ2luLm1iID0gY29uZmlncy5tYXJnaW4ubWFyZ2luQm90dG9tO1xuY29uZmlncy5tYXJnaW4ubWwgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5MZWZ0O1xuY29uZmlncy5tYXJnaW4ubXggPSBjb25maWdzLm1hcmdpbi5tYXJnaW5YO1xuY29uZmlncy5tYXJnaW4ubXkgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5ZO1xuY29uZmlncy5wYWRkaW5nID0ge1xuICBwYWRkaW5nOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdUb3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1JpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0JvdHRvbToge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0JvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nTGVmdDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1g6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1k6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MucGFkZGluZy5wID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmc7XG5jb25maWdzLnBhZGRpbmcucHQgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1RvcDtcbmNvbmZpZ3MucGFkZGluZy5wciA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nUmlnaHQ7XG5jb25maWdzLnBhZGRpbmcucGIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0JvdHRvbTtcbmNvbmZpZ3MucGFkZGluZy5wbCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nTGVmdDtcbmNvbmZpZ3MucGFkZGluZy5weCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWDtcbmNvbmZpZ3MucGFkZGluZy5weSA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWTtcbmV4cG9ydCB2YXIgbWFyZ2luID0gc3lzdGVtKGNvbmZpZ3MubWFyZ2luKTtcbmV4cG9ydCB2YXIgcGFkZGluZyA9IHN5c3RlbShjb25maWdzLnBhZGRpbmcpO1xuZXhwb3J0IHZhciBzcGFjZSA9IGNvbXBvc2UobWFyZ2luLCBwYWRkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IHNwYWNlO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZm9udEZhbWlseToge1xuICAgIHByb3BlcnR5OiAnZm9udEZhbWlseScsXG4gICAgc2NhbGU6ICdmb250cydcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICBzY2FsZTogJ2ZvbnRTaXplcycsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5mb250U2l6ZXNcbiAgfSxcbiAgZm9udFdlaWdodDoge1xuICAgIHByb3BlcnR5OiAnZm9udFdlaWdodCcsXG4gICAgc2NhbGU6ICdmb250V2VpZ2h0cydcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbGluZUhlaWdodCcsXG4gICAgc2NhbGU6ICdsaW5lSGVpZ2h0cydcbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIHByb3BlcnR5OiAnbGV0dGVyU3BhY2luZycsXG4gICAgc2NhbGU6ICdsZXR0ZXJTcGFjaW5ncydcbiAgfSxcbiAgdGV4dEFsaWduOiB0cnVlLFxuICBmb250U3R5bGU6IHRydWVcbn07XG5leHBvcnQgdmFyIHR5cG9ncmFwaHkgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHk7XG4iLCJpbXBvcnQgeyBnZXQsIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuZXhwb3J0IHZhciB2YXJpYW50ID0gZnVuY3Rpb24gdmFyaWFudChfcmVmKSB7XG4gIHZhciBfY29uZmlnO1xuXG4gIHZhciBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBwcm9wID0gX3JlZiRwcm9wID09PSB2b2lkIDAgPyAndmFyaWFudCcgOiBfcmVmJHByb3AsXG4gICAgICBfcmVmJHZhcmlhbnRzID0gX3JlZi52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX3JlZiR2YXJpYW50cyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHZhcmlhbnRzLFxuICAgICAga2V5ID0gX3JlZi5rZXk7XG4gIHZhciBzeDtcblxuICBpZiAoT2JqZWN0LmtleXModmFyaWFudHMpLmxlbmd0aCkge1xuICAgIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlLCBwcm9wcykge1xuICAgICAgcmV0dXJuIGNzcyhnZXQoc2NhbGUsIHZhbHVlLCBudWxsKSkocHJvcHMudGhlbWUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUpIHtcbiAgICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCBudWxsKTtcbiAgICB9O1xuICB9XG5cbiAgc3guc2NhbGUgPSBzY2FsZSB8fCBrZXk7XG4gIHN4LmRlZmF1bHRzID0gdmFyaWFudHM7XG4gIHZhciBjb25maWcgPSAoX2NvbmZpZyA9IHt9LCBfY29uZmlnW3Byb3BdID0gc3gsIF9jb25maWcpO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgdmFyaWFudDtcbmV4cG9ydCB2YXIgYnV0dG9uU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnYnV0dG9ucydcbn0pO1xuZXhwb3J0IHZhciB0ZXh0U3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAndGV4dFN0eWxlcycsXG4gIHByb3A6ICd0ZXh0U3R5bGUnXG59KTtcbmV4cG9ydCB2YXIgY29sb3JTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdjb2xvclN0eWxlcycsXG4gIHByb3A6ICdjb2xvcnMnXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcS2l0ZVxcXFxEZXNrdG9wXFxcXENvcm9uYS1BcHBcXFxcY29yb25hLWFwcC15YXJuIC0gc2IgaW5pdFxcXFxwYWdlc1xcXFxpbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEzLjEnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSAncmVmbGV4Ym94JztcbmV4cG9ydCB7IEJveCwgRmxleCB9O1xuZXhwb3J0IHZhciBUZXh0ID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICB0eDogXCJ0ZXh0XCJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuZXhwb3J0IHZhciBIZWFkaW5nID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJoMlwiLFxuICAgIHR4OiBcInRleHRcIixcbiAgICB2YXJpYW50OiBcImhlYWRpbmdcIlxuICB9LCBwcm9wcywge1xuICAgIF9fY3NzOiB7XG4gICAgICBmb250U2l6ZTogNCxcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xuICAgIH1cbiAgfSkpO1xufSk7XG5leHBvcnQgdmFyIExpbmsgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcImFcIixcbiAgICB2YXJpYW50OiBcImxpbmtcIlxuICB9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgdmFyIEJ1dHRvbiA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwiYnV0dG9uXCIsXG4gICAgdHg6IFwiYnV0dG9uc1wiLFxuICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiXG4gIH0sIHByb3BzLCB7XG4gICAgX19jc3M6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgcHg6IDMsXG4gICAgICBweTogMixcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogNFxuICAgIH1cbiAgfSkpO1xufSk7XG5leHBvcnQgdmFyIEltYWdlID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpbWdcIlxuICB9LCBwcm9wcywge1xuICAgIF9fY3NzOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICB9XG4gIH0pKTtcbn0pO1xuZXhwb3J0IHZhciBDYXJkID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICB2YXJpYW50OiBcImNhcmRcIlxuICB9LCBwcm9wcykpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRmxleCA9IGV4cG9ydHMuQm94ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3N0eWxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKSk7XG5cbnZhciBfc3R5bGVkU3lzdGVtID0gcmVxdWlyZShcInN0eWxlZC1zeXN0ZW1cIik7XG5cbnZhciBfY3NzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiKSk7XG5cbnZhciBfc2hvdWxkRm9yd2FyZFByb3AgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc3ggPSBmdW5jdGlvbiBzeChwcm9wcykge1xuICByZXR1cm4gKDAsIF9jc3NbXCJkZWZhdWx0XCJdKShwcm9wcy5zeCkocHJvcHMudGhlbWUpO1xufTtcblxudmFyIGJhc2UgPSBmdW5jdGlvbiBiYXNlKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX2Nzc1tcImRlZmF1bHRcIl0pKHByb3BzLl9fY3NzKShwcm9wcy50aGVtZSk7XG59O1xuXG52YXIgdmFyaWFudCA9IGZ1bmN0aW9uIHZhcmlhbnQoX3JlZikge1xuICB2YXIgdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIF9yZWYkdHggPSBfcmVmLnR4LFxuICAgICAgdHggPSBfcmVmJHR4ID09PSB2b2lkIDAgPyAndmFyaWFudHMnIDogX3JlZiR0eDtcbiAgcmV0dXJuICgwLCBfY3NzW1wiZGVmYXVsdFwiXSkoKDAsIF9jc3MuZ2V0KSh0aGVtZSwgdHggKyAnLicgKyB2YXJpYW50LCAoMCwgX2Nzcy5nZXQpKHRoZW1lLCB2YXJpYW50KSkpKHRoZW1lKTtcbn07XG5cbnZhciBCb3ggPSAoMCwgX3N0eWxlZFtcImRlZmF1bHRcIl0pKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBfc2hvdWxkRm9yd2FyZFByb3BbXCJkZWZhdWx0XCJdXG59KSh7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBtYXJnaW46IDAsXG4gIG1pbldpZHRoOiAwXG59LCBiYXNlLCB2YXJpYW50LCBzeCwgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jc3M7XG59LCAoMCwgX3N0eWxlZFN5c3RlbS5jb21wb3NlKShfc3R5bGVkU3lzdGVtLnNwYWNlLCBfc3R5bGVkU3lzdGVtLmxheW91dCwgX3N0eWxlZFN5c3RlbS50eXBvZ3JhcGh5LCBfc3R5bGVkU3lzdGVtLmNvbG9yLCBfc3R5bGVkU3lzdGVtLmZsZXhib3gpKTtcbmV4cG9ydHMuQm94ID0gQm94O1xudmFyIEZsZXggPSAoMCwgX3N0eWxlZFtcImRlZmF1bHRcIl0pKEJveCkoe1xuICBkaXNwbGF5OiAnZmxleCdcbn0pO1xuZXhwb3J0cy5GbGV4ID0gRmxleDsiLCJpbXBvcnQgeyBjcmVhdGVTdHlsZUZ1bmN0aW9uLCBjcmVhdGVQYXJzZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJzsgLy8gdjQgYXBpIHNoaW1zXG5cbmltcG9ydCBsYXlvdXQgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vbGF5b3V0JztcbmltcG9ydCBjb2xvciBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb2xvcic7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICdAc3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5JztcbmltcG9ydCBmbGV4Ym94IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2ZsZXhib3gnO1xuaW1wb3J0IGdyaWQgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZ3JpZCc7XG5pbXBvcnQgYm9yZGVyIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICdAc3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICdAc3R5bGVkLXN5c3RlbS9wb3NpdGlvbic7XG5leHBvcnQgeyBnZXQsIGNyZWF0ZVBhcnNlciwgY3JlYXRlU3R5bGVGdW5jdGlvbiwgY29tcG9zZSwgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgeyBtYXJnaW4sIHBhZGRpbmcsIHNwYWNlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc3BhY2UnO1xuZXhwb3J0IHsgY29sb3IgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb2xvcic7XG5leHBvcnQgeyBsYXlvdXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9sYXlvdXQnO1xuZXhwb3J0IHsgdHlwb2dyYXBoeSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHknO1xuZXhwb3J0IHsgZmxleGJveCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2ZsZXhib3gnO1xuZXhwb3J0IHsgYm9yZGVyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYm9yZGVyJztcbmV4cG9ydCB7IGJhY2tncm91bmQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kJztcbmV4cG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vcG9zaXRpb24nO1xuZXhwb3J0IHsgZ3JpZCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2dyaWQnO1xuZXhwb3J0IHsgc2hhZG93IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hhZG93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm94U2hhZG93LCBkZWZhdWx0IGFzIHRleHRTaGFkb3cgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaGFkb3cnO1xuZXhwb3J0IHsgdmFyaWFudCwgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3ZhcmlhbnQnO1xudmFyIHdpZHRoID0gbGF5b3V0LndpZHRoLFxuICAgIGhlaWdodCA9IGxheW91dC5oZWlnaHQsXG4gICAgbWluV2lkdGggPSBsYXlvdXQubWluV2lkdGgsXG4gICAgbWluSGVpZ2h0ID0gbGF5b3V0Lm1pbkhlaWdodCxcbiAgICBtYXhXaWR0aCA9IGxheW91dC5tYXhXaWR0aCxcbiAgICBtYXhIZWlnaHQgPSBsYXlvdXQubWF4SGVpZ2h0LFxuICAgIHNpemUgPSBsYXlvdXQuc2l6ZSxcbiAgICB2ZXJ0aWNhbEFsaWduID0gbGF5b3V0LnZlcnRpY2FsQWxpZ24sXG4gICAgZGlzcGxheSA9IGxheW91dC5kaXNwbGF5LFxuICAgIG92ZXJmbG93ID0gbGF5b3V0Lm92ZXJmbG93LFxuICAgIG92ZXJmbG93WCA9IGxheW91dC5vdmVyZmxvd1gsXG4gICAgb3ZlcmZsb3dZID0gbGF5b3V0Lm92ZXJmbG93WTtcbnZhciBvcGFjaXR5ID0gY29sb3Iub3BhY2l0eTtcbnZhciBmb250U2l6ZSA9IHR5cG9ncmFwaHkuZm9udFNpemUsXG4gICAgZm9udEZhbWlseSA9IHR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250V2VpZ2h0ID0gdHlwb2dyYXBoeS5mb250V2VpZ2h0LFxuICAgIGxpbmVIZWlnaHQgPSB0eXBvZ3JhcGh5LmxpbmVIZWlnaHQsXG4gICAgdGV4dEFsaWduID0gdHlwb2dyYXBoeS50ZXh0QWxpZ24sXG4gICAgZm9udFN0eWxlID0gdHlwb2dyYXBoeS5mb250U3R5bGUsXG4gICAgbGV0dGVyU3BhY2luZyA9IHR5cG9ncmFwaHkubGV0dGVyU3BhY2luZztcbnZhciBhbGlnbkl0ZW1zID0gZmxleGJveC5hbGlnbkl0ZW1zLFxuICAgIGFsaWduQ29udGVudCA9IGZsZXhib3guYWxpZ25Db250ZW50LFxuICAgIGp1c3RpZnlJdGVtcyA9IGZsZXhib3guanVzdGlmeUl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50ID0gZmxleGJveC5qdXN0aWZ5Q29udGVudCxcbiAgICBmbGV4V3JhcCA9IGZsZXhib3guZmxleFdyYXAsXG4gICAgZmxleERpcmVjdGlvbiA9IGZsZXhib3guZmxleERpcmVjdGlvbixcbiAgICBmbGV4ID0gZmxleGJveC5mbGV4LFxuICAgIGZsZXhHcm93ID0gZmxleGJveC5mbGV4R3JvdyxcbiAgICBmbGV4U2hyaW5rID0gZmxleGJveC5mbGV4U2hyaW5rLFxuICAgIGZsZXhCYXNpcyA9IGZsZXhib3guZmxleEJhc2lzLFxuICAgIGp1c3RpZnlTZWxmID0gZmxleGJveC5qdXN0aWZ5U2VsZixcbiAgICBhbGlnblNlbGYgPSBmbGV4Ym94LmFsaWduU2VsZixcbiAgICBvcmRlciA9IGZsZXhib3gub3JkZXI7XG52YXIgZ3JpZEdhcCA9IGdyaWQuZ3JpZEdhcCxcbiAgICBncmlkQ29sdW1uR2FwID0gZ3JpZC5ncmlkQ29sdW1uR2FwLFxuICAgIGdyaWRSb3dHYXAgPSBncmlkLmdyaWRSb3dHYXAsXG4gICAgZ3JpZENvbHVtbiA9IGdyaWQuZ3JpZENvbHVtbixcbiAgICBncmlkUm93ID0gZ3JpZC5ncmlkUm93LFxuICAgIGdyaWRBdXRvRmxvdyA9IGdyaWQuZ3JpZEF1dG9GbG93LFxuICAgIGdyaWRBdXRvQ29sdW1ucyA9IGdyaWQuZ3JpZEF1dG9Db2x1bW5zLFxuICAgIGdyaWRBdXRvUm93cyA9IGdyaWQuZ3JpZEF1dG9Sb3dzLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBncmlkLmdyaWRUZW1wbGF0ZUNvbHVtbnMsXG4gICAgZ3JpZFRlbXBsYXRlUm93cyA9IGdyaWQuZ3JpZFRlbXBsYXRlUm93cyxcbiAgICBncmlkVGVtcGxhdGVBcmVhcyA9IGdyaWQuZ3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgZ3JpZEFyZWEgPSBncmlkLmdyaWRBcmVhO1xudmFyIGJvcmRlcldpZHRoID0gYm9yZGVyLmJvcmRlcldpZHRoLFxuICAgIGJvcmRlclN0eWxlID0gYm9yZGVyLmJvcmRlclN0eWxlLFxuICAgIGJvcmRlckNvbG9yID0gYm9yZGVyLmJvcmRlckNvbG9yLFxuICAgIGJvcmRlclRvcCA9IGJvcmRlci5ib3JkZXJUb3AsXG4gICAgYm9yZGVyUmlnaHQgPSBib3JkZXIuYm9yZGVyUmlnaHQsXG4gICAgYm9yZGVyQm90dG9tID0gYm9yZGVyLmJvcmRlckJvdHRvbSxcbiAgICBib3JkZXJMZWZ0ID0gYm9yZGVyLmJvcmRlckxlZnQsXG4gICAgYm9yZGVyUmFkaXVzID0gYm9yZGVyLmJvcmRlclJhZGl1cztcbnZhciBiYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZSxcbiAgICBiYWNrZ3JvdW5kU2l6ZSA9IGJhY2tncm91bmQuYmFja2dyb3VuZFNpemUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kUG9zaXRpb24sXG4gICAgYmFja2dyb3VuZFJlcGVhdCA9IGJhY2tncm91bmQuYmFja2dyb3VuZFJlcGVhdDtcbnZhciB6SW5kZXggPSBwb3NpdGlvbi56SW5kZXgsXG4gICAgdG9wID0gcG9zaXRpb24udG9wLFxuICAgIHJpZ2h0ID0gcG9zaXRpb24ucmlnaHQsXG4gICAgYm90dG9tID0gcG9zaXRpb24uYm90dG9tLFxuICAgIGxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3JkZXJzIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYm9yZGVyJztcbmV4cG9ydCB7IHdpZHRoLCBoZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQsIHNpemUsIHZlcnRpY2FsQWxpZ24sIGRpc3BsYXksIG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSAvLyBjb2xvclxuLCBvcGFjaXR5IC8vIHR5cG9ncmFwaHlcbiwgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRXZWlnaHQsIGxpbmVIZWlnaHQsIHRleHRBbGlnbiwgZm9udFN0eWxlLCBsZXR0ZXJTcGFjaW5nIC8vIGZsZXhib3hcbiwgYWxpZ25JdGVtcywgYWxpZ25Db250ZW50LCBqdXN0aWZ5SXRlbXMsIGp1c3RpZnlDb250ZW50LCBmbGV4V3JhcCwgZmxleERpcmVjdGlvbiwgZmxleCwgZmxleEdyb3csIGZsZXhTaHJpbmssIGZsZXhCYXNpcywganVzdGlmeVNlbGYsIGFsaWduU2VsZiwgb3JkZXIgLy8gZ3JpZFxuLCBncmlkR2FwLCBncmlkQ29sdW1uR2FwLCBncmlkUm93R2FwLCBncmlkQ29sdW1uLCBncmlkUm93LCBncmlkQXV0b0Zsb3csIGdyaWRBdXRvQ29sdW1ucywgZ3JpZEF1dG9Sb3dzLCBncmlkVGVtcGxhdGVDb2x1bW5zLCBncmlkVGVtcGxhdGVSb3dzLCBncmlkVGVtcGxhdGVBcmVhcywgZ3JpZEFyZWEgLy8gYm9yZGVyXG4sIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGJvcmRlclRvcCwgYm9yZGVyUmlnaHQsIGJvcmRlckJvdHRvbSwgYm9yZGVyTGVmdCwgYm9yZGVyUmFkaXVzIC8vIGJhY2tncm91bmRcbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0IC8vIHBvc2l0aW9uXG4sIHpJbmRleCwgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH07IC8vIHY0IHN0eWxlIEFQSSBzaGltXG5cbmV4cG9ydCB2YXIgc3R5bGUgPSBmdW5jdGlvbiBzdHlsZShfcmVmKSB7XG4gIHZhciBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgY3NzUHJvcGVydHkgPSBfcmVmLmNzc1Byb3BlcnR5LFxuICAgICAgYWxpYXMgPSBfcmVmLmFsaWFzLFxuICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICB0cmFuc2Zvcm1WYWx1ZSA9IF9yZWYudHJhbnNmb3JtVmFsdWUsXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBwcm9wZXJ0aWVzID0gX3JlZi5wcm9wZXJ0aWVzO1xuICB2YXIgY29uZmlnID0ge307XG4gIGNvbmZpZ1twcm9wXSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oe1xuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgcHJvcGVydHk6IGNzc1Byb3BlcnR5IHx8IHByb3AsXG4gICAgc2NhbGU6IGtleSxcbiAgICBkZWZhdWx0U2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtVmFsdWVcbiAgfSk7XG4gIGlmIChhbGlhcykgY29uZmlnW2FsaWFzXSA9IGNvbmZpZ1twcm9wXTtcbiAgdmFyIHBhcnNlID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZTtcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL1RhYk5hdic7XHJcbmltcG9ydCBUYWJTdG9yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiU3Rvcmllcyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczNzVweCcsXHJcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywyMzksMjM0KSdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxUYWJOYXYvPlxyXG4gICAgICAgICAgICA8VGFiU3Rvcmllcy8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==