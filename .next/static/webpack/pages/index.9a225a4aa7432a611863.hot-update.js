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
  }), __jsx("img", {
    src: '../images/wear-masks.png',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: '16px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: '12px',
    my: '8px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, body), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    marginBottom: '15px',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(CardImage, {
    value: 'imgOne',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(CardText, {
    heading: textHeadingOne,
    body: textBodyOne,
    link: textLinkOne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(CardImage, {
    value: 'imgTwo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx(CardText, {
    heading: textHeadingTwo,
    body: textBodyTwo,
    link: textLinkTwo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJTdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJDYXJkSW1hZ2UiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiQ2FyZFRleHQiLCJoZWFkaW5nIiwiYm9keSIsImxpbmsiLCJtYXJnaW5SaWdodCIsImJveFNpemluZyIsIlRhYlN0b3JpZXMiLCJ0ZXh0SGVhZGluZ09uZSIsInRleHRIZWFkaW5nVHdvIiwidGV4dEJvZHlPbmUiLCJ0ZXh0Qm9keVR3byIsInRleHRMaW5rT25lIiwidGV4dExpbmtUd28iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYTtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUMzQixTQUNJLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsSUFBRSxDQUFkO0FBQWlCLGVBQVcsRUFBRSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFPLE9BQUcsRUFBRUEsS0FBWjtBQUNJLE1BQUUsRUFBRTtBQUNBQyxXQUFLLEVBQUUsT0FEUDtBQUVBQyxZQUFNLEVBQUUsT0FGUjtBQUdBQyxrQkFBWSxFQUFFO0FBSGQsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFRSTtBQUFLLE9BQUcsRUFBRSwwQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQVlILENBYkQ7O0tBQU1KLFM7O0FBY04sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBMkI7QUFBQSxNQUF6QkMsT0FBeUIsU0FBekJBLE9BQXlCO0FBQUEsTUFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLElBQVUsU0FBVkEsSUFBVTtBQUN4QyxTQUNJLE1BQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsSUFBRSxDQUFkO0FBQ0ksTUFBRSxFQUFFO0FBQ0E7QUFDQUMsaUJBQVcsRUFBRSxNQUZiO0FBR0FDLGVBQVMsRUFBRSxZQUhYLENBSUE7O0FBSkEsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT1EsTUFBQyw4Q0FBRDtBQUFTLFlBQVEsRUFBRSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCSixPQUE1QixDQVBSLEVBUVEsTUFBQywyQ0FBRDtBQUFNLFlBQVEsRUFBRSxNQUFoQjtBQUF3QixNQUFFLEVBQUUsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0MsSUFBcEMsQ0FSUixFQVNRLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxJQUFQLENBVFIsQ0FESjtBQWNILENBZkQ7O01BQU1ILFE7O0FBaUJOLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsTUFBTUMsY0FBYyxHQUFHLGlCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxxQkFBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsMkRBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGdEQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxpQkFBcEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsaUJBQXBCO0FBRUEsU0FDSSxNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQU0sZ0JBQVksRUFBRSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBZSxFQUFFLE1BRmI7QUFHSkMsZ0JBQVUsRUFBRSxRQUhSO0FBSUpoQixrQkFBWSxFQUFFO0FBSlYsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxTQUFEO0FBQVcsU0FBSyxFQUFFLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJLE1BQUMsUUFBRDtBQUNJLFdBQU8sRUFBRVEsY0FEYjtBQUVJLFFBQUksRUFBRUUsV0FGVjtBQUdJLFFBQUksRUFBRUUsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESixDQURKLEVBZ0JJLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFDSSxNQUFFLEVBQUU7QUFDSkUsYUFBTyxFQUFFLE1BREw7QUFFSkMscUJBQWUsRUFBRSxNQUZiO0FBR0pDLGdCQUFVLEVBQUUsUUFIUjtBQUlKaEIsa0JBQVksRUFBRTtBQUpWLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsU0FBRDtBQUFXLFNBQUssRUFBRSxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLFFBQUQ7QUFDSSxXQUFPLEVBQUVTLGNBRGI7QUFFSSxRQUFJLEVBQUVFLFdBRlY7QUFHSSxRQUFJLEVBQUVFLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREosQ0FoQkosQ0FESjtBQWtDSCxDQTFDRDs7TUFBTU4sVTtBQTRDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWEyMjVhNGFhNzQzMmE2MTE4NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbi8vIGltcG9ydCBpbWdPbmUgZnJvbSAnLi4vaW1hZ2VzL3dlYXItbWFza3MucG5nJztcclxuLy8gaW1wb3J0IGltZ1R3byBmcm9tICcuL2ltYWdlcy9hdm9pZC1jcm93ZHMuanBnJztcclxuXHJcbi8vIGNvbnN0IGltZ09uZSA9IHJlcXVpcmUoJy4uL2ltYWdlcy93ZWFyLW1hc2tzLnBuZycpO1xyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gKHt2YWx1ZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17MS8zfSBtYXJnaW5SaWdodD17JzE1cHgnfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vaW1hZ2VzL3dlYXItbWFza3MucG5nJ30+PC9pbWc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuY29uc3QgQ2FyZFRleHQgPSAoe2hlYWRpbmcsIGJvZHksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezIvM31cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIC8vIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgICAgICAvLyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPXsnMTZweCd9PntoZWFkaW5nfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMTJweCd9IG15PXsnOHB4J30+e2JvZHl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpbms+e2xpbmt9PC9MaW5rPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgVGFiU3RvcmllcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRleHRIZWFkaW5nT25lID0gJ1dlYXIgYSBmYWNlbWFzayc7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGluZ1R3byA9ICdBdm9pZCBjbG9zZSBjb250YWN0JztcclxuICAgIGNvbnN0IHRleHRCb2R5T25lID0gJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZSc7XHJcbiAgICBjb25zdCB0ZXh0Qm9keVR3byA9ICdQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlJztcclxuICAgIGNvbnN0IHRleHRMaW5rT25lID0gJzE1MyBEaXNjdXNzaW9ucyc7XHJcbiAgICBjb25zdCB0ZXh0TGlua1R3byA9ICcxMjcgRGlzY3Vzc2lvbnMnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPENhcmQgbWFyZ2luQm90dG9tPXsnMTVweCd9PlxyXG4gICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSB2YWx1ZT17J2ltZ09uZSd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17dGV4dEhlYWRpbmdPbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RleHRCb2R5T25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt0ZXh0TGlua09uZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSB2YWx1ZT17J2ltZ1R3byd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17dGV4dEhlYWRpbmdUd299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RleHRCb2R5VHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt0ZXh0TGlua1R3b30vPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlN0b3JpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==