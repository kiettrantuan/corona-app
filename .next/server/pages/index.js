module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TabNav.tsx":
/*!*******************************!*\
  !*** ./components/TabNav.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\TabNav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const NavLink = ({
  value
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    sx: {
      display: 'inline-block',
      lineHeight: '40px',
      margin: 'auto',
      width: '100%',
      textAlign: 'center',
      color: 'gray',
      backgroundColor: '#fff',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, value);
};

const TabNav = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      padding: '4px 1px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: '28px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginLeft: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(NavLink, {
    value: 'Prevention',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    mx: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(NavLink, {
    value: 'Symptoms',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(NavLink, {
    value: 'Diagnosis',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TabNav);

/***/ }),

/***/ "./components/TabStories.tsx":
/*!***********************************!*\
  !*** ./components/TabStories.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\TabStories.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // import imgOne from '../images/wear-masks.png';
// import imgTwo from './images/avoid-crowds.jpg';
// const imgOne = require('../images/wear-masks.png');

const CardImage = ({
  value
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

const CardText = ({
  heading,
  body,
  link
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 2 / 3,
    sx: {
      // fontSize: '12px',
      marginRight: '16px',
      boxSizing: 'border-box' // overflowWrap: 'break-word'

    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: '16px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: '12px',
    my: '8px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, body), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, link));
};

const TabStories = () => {
  const textHeadingOne = 'Wear a facemask';
  const textHeadingTwo = 'Avoid close contact';
  const textBodyOne = 'You should wear facemask when you are around other people';
  const textBodyTwo = 'Put distance between yourself and other people';
  const textLinkOne = '153 Discussions';
  const textLinkTwo = '127 Discussions';
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    marginBottom: '15px',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(CardImage, {
    value: 'imgOne',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(CardText, {
    heading: textHeadingOne,
    body: textBodyOne,
    link: textLinkOne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(CardImage, {
    value: 'imgTwo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx(CardText, {
    heading: textHeadingTwo,
    body: textBodyTwo,
    link: textLinkTwo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TabStories);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TabNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TabNav */ "./components/TabNav.tsx");
/* harmony import */ var _components_TabStories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TabStories */ "./components/TabStories.tsx");
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const HomePage = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      width: '375px',
      mx: 'auto',
      p: '15px',
      backgroundColor: '#e8e8e8'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Container", __jsx(_components_TabNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(_components_TabStories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJOYXYudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFiU3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmViYXNzXCIiXSwibmFtZXMiOlsiTmF2TGluayIsInZhbHVlIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJ3aWR0aCIsInRleHRBbGlnbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiVGFiTmF2IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImFsaWduSXRlbXMiLCJDYXJkSW1hZ2UiLCJoZWlnaHQiLCJDYXJkVGV4dCIsImhlYWRpbmciLCJib2R5IiwibGluayIsIm1hcmdpblJpZ2h0IiwiYm94U2l6aW5nIiwiVGFiU3RvcmllcyIsInRleHRIZWFkaW5nT25lIiwidGV4dEhlYWRpbmdUd28iLCJ0ZXh0Qm9keU9uZSIsInRleHRCb2R5VHdvIiwidGV4dExpbmtPbmUiLCJ0ZXh0TGlua1R3byIsIkhvbWVQYWdlIiwibXgiLCJwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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eEIscUJBQWUsRUFBRTtBQUpqQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUUksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKO0FBYUgsQ0FkRDs7QUFnQmVzQix1RUFBZixFOzs7Ozs7Ozs7OztBQ3JCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3gsIFRleHQsIExpbmsgfSBmcm9tICdyZWJhc3MnO1xyXG5cclxuXHJcbmNvbnN0IE5hdkxpbmsgPSAoe3ZhbHVlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRhYk5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHggMXB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI4cHgnLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17MSAvIDN9IG1hcmdpbkxlZnQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdmFsdWU9eydQcmV2ZW50aW9uJ30vPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17MSAvIDN9IG14PXsxfT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHZhbHVlPXsnU3ltcHRvbXMnfS8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luUmlnaHQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdmFsdWU9eydEaWFnbm9zaXMnfS8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbi8vIGltcG9ydCBpbWdPbmUgZnJvbSAnLi4vaW1hZ2VzL3dlYXItbWFza3MucG5nJztcclxuLy8gaW1wb3J0IGltZ1R3byBmcm9tICcuL2ltYWdlcy9hdm9pZC1jcm93ZHMuanBnJztcclxuXHJcbi8vIGNvbnN0IGltZ09uZSA9IHJlcXVpcmUoJy4uL2ltYWdlcy93ZWFyLW1hc2tzLnBuZycpO1xyXG5cclxuY29uc3QgQ2FyZEltYWdlID0gKHt2YWx1ZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17MS8zfSBtYXJnaW5SaWdodD17JzE1cHgnfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuY29uc3QgQ2FyZFRleHQgPSAoe2hlYWRpbmcsIGJvZHksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezIvM31cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIC8vIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgICAgICAvLyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPXsnMTZweCd9PntoZWFkaW5nfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnMTJweCd9IG15PXsnOHB4J30+e2JvZHl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpbms+e2xpbmt9PC9MaW5rPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgVGFiU3RvcmllcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRleHRIZWFkaW5nT25lID0gJ1dlYXIgYSBmYWNlbWFzayc7XHJcbiAgICBjb25zdCB0ZXh0SGVhZGluZ1R3byA9ICdBdm9pZCBjbG9zZSBjb250YWN0JztcclxuICAgIGNvbnN0IHRleHRCb2R5T25lID0gJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZSc7XHJcbiAgICBjb25zdCB0ZXh0Qm9keVR3byA9ICdQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlJztcclxuICAgIGNvbnN0IHRleHRMaW5rT25lID0gJzE1MyBEaXNjdXNzaW9ucyc7XHJcbiAgICBjb25zdCB0ZXh0TGlua1R3byA9ICcxMjcgRGlzY3Vzc2lvbnMnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPENhcmQgbWFyZ2luQm90dG9tPXsnMTVweCd9PlxyXG4gICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSB2YWx1ZT17J2ltZ09uZSd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17dGV4dEhlYWRpbmdPbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RleHRCb2R5T25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt0ZXh0TGlua09uZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSB2YWx1ZT17J2ltZ1R3byd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17dGV4dEhlYWRpbmdUd299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RleHRCb2R5VHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt0ZXh0TGlua1R3b30vPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlN0b3JpZXM7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJOYXYnO1xyXG5pbXBvcnQgVGFiU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYlN0b3JpZXMnO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzc1cHgnLFxyXG4gICAgICAgICAgICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIHA6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlOGU4ZTgnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBDb250YWluZXJcclxuICAgICAgICAgICAgPFRhYk5hdi8+XHJcbiAgICAgICAgICAgIDxUYWJTdG9yaWVzLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWJhc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==