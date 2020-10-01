webpackHotUpdate_N_E("pages/index",{

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

 // import imgOne from '../images/wear-masks.png';
// import imgTwo from './images/avoid-crowds.jpg';
// const imgOne = require('../images/wear-masks.png');

var CardImage = function CardImage(_ref) {
  var value = _ref.value;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: value,
    sx: {
      width: '100px',
      height: '100px',
      borderRadius: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

_c = CardImage;

var CardText = function CardText(_ref2) {
  var heading = _ref2.heading,
      body = _ref2.body,
      link = _ref2.link;
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
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: '16px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: '12px',
    my: '8px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, body), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, link));
};

_c2 = CardText;

var TabStories = function TabStories() {
  var textHeadingOne = 'Wear a facemask';
  var textHeadingTwo = 'Avoid close contact';
  var textBodyOne = 'You should wear facemask when you are around other people';
  var textBodyTwo = 'Put distance between yourself and other people';
  var textLinkOne = '153 Discussions';
  var textLinkTwo = '127 Discussions';
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    marginBottom: '15px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
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
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(CardImage, {
    value: imgOne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(CardText, {
    heading: textHeadingOne,
    body: textBodyOne,
    link: textLinkOne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      padding: '10px',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(CardText, {
    heading: textHeadingTwo,
    body: textBodyTwo,
    link: textLinkTwo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJTdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiQ2FyZFRleHQiLCJoZWFkaW5nIiwiYm9keSIsImxpbmsiLCJtYXJnaW5SaWdodCIsImJveFNpemluZyIsIlRhYlN0b3JpZXMiLCJ0ZXh0SGVhZGluZ09uZSIsInRleHRIZWFkaW5nVHdvIiwidGV4dEJvZHlPbmUiLCJ0ZXh0Qm9keVR3byIsInRleHRMaW5rT25lIiwidGV4dExpbmtUd28iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyIsImltZ09uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYTtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUMzQixTQUNJLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsSUFBRSxDQUFkO0FBQWlCLGVBQVcsRUFBRSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFPLE9BQUcsRUFBRUEsS0FBWjtBQUNJLE1BQUUsRUFBRTtBQUNBQyxXQUFLLEVBQUUsT0FEUDtBQUVBQyxZQUFNLEVBQUUsT0FGUjtBQUdBQyxrQkFBWSxFQUFFO0FBSGQsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQVdILENBWkQ7O0tBQU1KLFM7O0FBYU4sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBMkI7QUFBQSxNQUF6QkMsT0FBeUIsU0FBekJBLE9BQXlCO0FBQUEsTUFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLElBQVUsU0FBVkEsSUFBVTtBQUN4QyxTQUNJLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsSUFBRSxDQUFkO0FBQ0ksTUFBRSxFQUFFO0FBQ0E7QUFDQUMsaUJBQVcsRUFBRSxNQUZiO0FBR0FDLGVBQVMsRUFBRSxZQUhYLENBSUE7O0FBSkEsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT1EsTUFBQyw4Q0FBRDtBQUFTLFlBQVEsRUFBRSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCSixPQUE1QixDQVBSLEVBUVEsTUFBQywyQ0FBRDtBQUFNLFlBQVEsRUFBRSxNQUFoQjtBQUF3QixNQUFFLEVBQUUsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0MsSUFBcEMsQ0FSUixFQVNRLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxJQUFQLENBVFIsQ0FESjtBQWNILENBZkQ7O01BQU1ILFE7O0FBaUJOLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsTUFBTUMsY0FBYyxHQUFHLGlCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxxQkFBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsMkRBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGdEQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxpQkFBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsaUJBQXBCO0FBRUEsU0FDSSxNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQU0sZ0JBQVksRUFBRSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBZSxFQUFFLE1BRmI7QUFHSkMsZ0JBQVUsRUFBRSxRQUhSO0FBSUpoQixrQkFBWSxFQUFFO0FBSlYsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxTQUFEO0FBQVcsU0FBSyxFQUFFaUIsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUksTUFBQyxRQUFEO0FBQ0ksV0FBTyxFQUFFVCxjQURiO0FBRUksUUFBSSxFQUFFRSxXQUZWO0FBR0ksUUFBSSxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKLENBREosRUFnQkksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNKRSxhQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBZSxFQUFFLE1BRmI7QUFHSkMsZ0JBQVUsRUFBRSxRQUhSO0FBSUpoQixrQkFBWSxFQUFFO0FBSlYsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUksTUFBQyxRQUFEO0FBQ0ksV0FBTyxFQUFFUyxjQURiO0FBRUksUUFBSSxFQUFFRSxXQUZWO0FBR0ksUUFBSSxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKLENBaEJKLENBREo7QUFrQ0gsQ0ExQ0Q7O01BQU1OLFU7QUE0Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlNzYyYzU1N2UzMzlmZDEyY2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgQ2FyZCwgSW1hZ2UsIEhlYWRpbmcsIFRleHQsIExpbmsgfSBmcm9tICdyZWJhc3MnO1xyXG4vLyBpbXBvcnQgaW1nT25lIGZyb20gJy4uL2ltYWdlcy93ZWFyLW1hc2tzLnBuZyc7XHJcbi8vIGltcG9ydCBpbWdUd28gZnJvbSAnLi9pbWFnZXMvYXZvaWQtY3Jvd2RzLmpwZyc7XHJcblxyXG4vLyBjb25zdCBpbWdPbmUgPSByZXF1aXJlKCcuLi9pbWFnZXMvd2Vhci1tYXNrcy5wbmcnKTtcclxuXHJcbmNvbnN0IENhcmRJbWFnZSA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezEvM30gbWFyZ2luUmlnaHQ9eycxNXB4J30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IENhcmRUZXh0ID0gKHtoZWFkaW5nLCBib2R5LCBsaW5rfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHdpZHRoPXsyLzN9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17JzE2cHgnfT57aGVhZGluZ308L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17JzEycHgnfSBteT17JzhweCd9Pntib2R5fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxMaW5rPntsaW5rfTwvTGluaz5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRhYlN0b3JpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGluZ09uZSA9ICdXZWFyIGEgZmFjZW1hc2snO1xyXG4gICAgY29uc3QgdGV4dEhlYWRpbmdUd28gPSAnQXZvaWQgY2xvc2UgY29udGFjdCc7XHJcbiAgICBjb25zdCB0ZXh0Qm9keU9uZSA9ICdZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGUnO1xyXG4gICAgY29uc3QgdGV4dEJvZHlUd28gPSAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZSc7XHJcbiAgICBjb25zdCB0ZXh0TGlua09uZSA9ICcxNTMgRGlzY3Vzc2lvbnMnO1xyXG4gICAgY29uc3QgdGV4dExpbmtUd28gPSAnMTI3IERpc2N1c3Npb25zJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxDYXJkIG1hcmdpbkJvdHRvbT17JzE1cHgnfT5cclxuICAgICAgICAgICAgICAgIDxGbGV4IFxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2UgdmFsdWU9e2ltZ09uZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXt0ZXh0SGVhZGluZ09uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17dGV4dEJvZHlPbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3RleHRMaW5rT25lfS8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENhcmRJbWFnZSB2YWx1ZT17aW1nVHdvfS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXt0ZXh0SGVhZGluZ1R3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17dGV4dEJvZHlUd299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3RleHRMaW5rVHdvfS8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiU3RvcmllczsiXSwic291cmNlUm9vdCI6IiJ9