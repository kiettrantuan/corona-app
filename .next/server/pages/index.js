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
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\TabNav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const LinkStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    color: rgb(194,194,181);
    width: 100%;
    text-align: center;
    font-size: 15px;
`;

const TabNav = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding: '4px 1px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: '28px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    sx: {
      width: '100%',
      textAlign: 'center',
      fontSize: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Prevention")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    mx: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Symptoms")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '20px',
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Diagnosis")));
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



const CardImage = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
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
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, link, " \u2192"));
};

const Data = [{
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

const TabStories = () => {
  // const textHeadingOne = 'Wear a facemask';
  // const textHeadingTwo = 'Avoid close contact';
  // const textBodyOne = 'You should wear facemask when you are around other people';
  // const textBodyTwo = 'Put distance between yourself and other people';
  // const textLinkOne = '153 Discussions';
  // const textLinkTwo = '127 Discussions';
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, Data.map(props => {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      marginBottom: '15px',
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, __jsx(CardImage, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }), __jsx(CardText, {
      heading: props.heading,
      body: props.body,
      link: props.link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    })));
  }));
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
      backgroundColor: 'rgb(243,239,234)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_TabNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_components_TabStories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJOYXYudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFiU3Rvcmllcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmViYXNzXCIiXSwibmFtZXMiOlsiTGlua1N0eWxlIiwic3R5bGVkIiwiTGluayIsIlRhYk5hdiIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJ3aWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiQ2FyZEltYWdlIiwiaGVpZ2h0IiwiQ2FyZFRleHQiLCJoZWFkaW5nIiwiYm9keSIsImxpbmsiLCJtYXJnaW5SaWdodCIsImJveFNpemluZyIsIm15IiwiRGF0YSIsImlkIiwiVGFiU3RvcmllcyIsIm1hcCIsInByb3BzIiwiSG9tZVBhZ2UiLCJteCIsInAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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TTtBQUNuQixTQUNJLE1BQUMsMENBQUQ7QUFDSSxNQUFFLEVBQUU7QUFDQWpCLFdBQUssRUFBRSxPQURQO0FBRUFrQixRQUFFLEVBQUUsTUFGSjtBQUdBQyxPQUFDLEVBQUUsTUFISDtBQUlBMUIscUJBQWUsRUFBRTtBQUpqQixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREo7QUFZSCxDQWJEOztBQWVld0IsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuXHJcbmNvbnN0IExpbmtTdHlsZSA9IHN0eWxlZChMaW5rKWBcclxuICAgIGNvbG9yOiByZ2IoMTk0LDE5NCwxODEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgVGFiTmF2ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCAxcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjhweCcsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luTGVmdD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjN0RBNzUyJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEyNSwxNjcsODIsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgc3g9e3t3aWR0aDonMTAwJScsdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZlbnRpb25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEgLyAzfSBteD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1N0eWxlPlN5bXB0b21zPC9MaW5rU3R5bGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luUmlnaHQ9ezF9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmtTdHlsZT5EaWFnbm9zaXM8L0xpbmtTdHlsZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJOYXY7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIENhcmQsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuXHJcblxyXG5jb25zdCBDYXJkSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezEvM30gbWFyZ2luUmlnaHQ9eycxNXB4J30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9eydodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJ31cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPC9JbWFnZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuY29uc3QgQ2FyZFRleHQgPSAoe2hlYWRpbmcsIGJvZHksIGxpbmt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezIvM31cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIC8vIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICAgICAgICAvLyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRGYW1pbHk9eydIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ30gZm9udFNpemU9eycxNnB4J30+e2hlYWRpbmd9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXk6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDEyMSwxMzAsMTMwKScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjoncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzdEQTc1MidcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlua30gJiM4NTk0O1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbmNvbnN0IERhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBoZWFkaW5nOiAnV2VhciBhIGZhY2VtYXNrJyxcclxuICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICBsaW5rOiAnMTUzIERpc2N1c3Npb25zJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbiAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgIGxpbms6ICcxMjcgRGlzY3Vzc2lvbnMnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRhYlN0b3JpZXMgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB0ZXh0SGVhZGluZ09uZSA9ICdXZWFyIGEgZmFjZW1hc2snO1xyXG4gICAgLy8gY29uc3QgdGV4dEhlYWRpbmdUd28gPSAnQXZvaWQgY2xvc2UgY29udGFjdCc7XHJcbiAgICAvLyBjb25zdCB0ZXh0Qm9keU9uZSA9ICdZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGUnO1xyXG4gICAgLy8gY29uc3QgdGV4dEJvZHlUd28gPSAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZSc7XHJcbiAgICAvLyBjb25zdCB0ZXh0TGlua09uZSA9ICcxNTMgRGlzY3Vzc2lvbnMnO1xyXG4gICAgLy8gY29uc3QgdGV4dExpbmtUd28gPSAnMTI3IERpc2N1c3Npb25zJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIHtEYXRhLm1hcCgocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgbWFyZ2luQm90dG9tPXsnMTVweCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e3Byb3BzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17cHJvcHMuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtwcm9wcy5saW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiU3RvcmllczsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IFRhYk5hdiBmcm9tICcuLi9jb21wb25lbnRzL1RhYk5hdic7XHJcbmltcG9ydCBUYWJTdG9yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiU3Rvcmllcyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczNzVweCcsXHJcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywyMzksMjM0KSdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxUYWJOYXYvPlxyXG4gICAgICAgICAgICA8VGFiU3Rvcmllcy8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYmFzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9