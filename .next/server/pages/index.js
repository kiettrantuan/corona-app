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

/***/ "./components/Cards.tsx":
/*!******************************!*\
  !*** ./components/Cards.tsx ***!
  \******************************/
/*! exports provided: CardImage, CardText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return CardText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\Cards.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const TextStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"])`
    font-family: 'Helvetica, Arial, sans-serif';
    font-size: 12px;
    color: rgb(121,130,130);
    display: -webkit-box;   
    -webkit-line-clamp: 2;   
    -webkit-box-orient: vertical;   
    overflow: hidden;
    text-overflow: ellipsis;
`;
const CardImage = ({
  imgsrc
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: imgsrc,
    sx: {
      width: '100px',
      height: '100px',
      borderRadius: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: '100%',
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(TextStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, body)), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    sx: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      cursor: 'pointer',
      color: '#7DA752'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, link, " \u2192"));
};
const Data = [{
  id: '1',
  heading: 'Wear a facemask',
  body: 'You should wear facemask when you are around other people',
  link: '153 Discussions',
  imgsrc: 'https://via.placeholder.com/100'
}, {
  id: '2',
  heading: 'Avoid close contact',
  body: 'Put distance between yourself and other people',
  link: '127 Discussions',
  imgsrc: 'https://via.placeholder.com/100'
}, {
  id: '3',
  heading: 'Empty',
  body: '',
  link: '0 Discussions',
  imgsrc: 'https://via.placeholder.com/100'
}, {
  id: '4',
  heading: 'Too much',
  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
  link: '127 Discussions',
  imgsrc: 'https://via.placeholder.com/100'
}, {
  id: '5',
  heading: 'Too much 2',
  body: 'AaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  link: '0 Discussions',
  imgsrc: 'https://via.placeholder.com/100'
}];

const Cards = () => {
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
      lineNumber: 105,
      columnNumber: 9
    }
  }, Data.map(props => {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      marginBottom: '15px',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
        lineNumber: 109,
        columnNumber: 25
      }
    }, __jsx(CardImage, {
      imgsrc: props.imgsrc,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 29
      }
    }), __jsx(CardText, {
      heading: props.heading,
      body: props.body,
      link: props.link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/Selection.tsx":
/*!**********************************!*\
  !*** ./components/Selection.tsx ***!
  \**********************************/
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
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-yarn - sb init\\components\\Selection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const LinkStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    color: rgb(194,194,181);
    width: 100%;
    text-align: center;
    font-size: 15px;
`;

const Selection = () => {
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

/* harmony default export */ __webpack_exports__["default"] = (Selection);

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
/* harmony import */ var _components_Selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Selection */ "./components/Selection.tsx");
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cards */ "./components/Cards.tsx");
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
  }, __jsx(_components_Selection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYmFzc1wiIl0sIm5hbWVzIjpbIlRleHRTdHlsZSIsInN0eWxlZCIsIlRleHQiLCJDYXJkSW1hZ2UiLCJpbWdzcmMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIkNhcmRUZXh0IiwiaGVhZGluZyIsImJvZHkiLCJsaW5rIiwibWFyZ2luUmlnaHQiLCJib3hTaXppbmciLCJmb250RmFtaWx5IiwiY3Vyc29yIiwiY29sb3IiLCJEYXRhIiwiaWQiLCJDYXJkcyIsIm1hcCIsInByb3BzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiLCJMaW5rU3R5bGUiLCJMaW5rIiwiU2VsZWN0aW9uIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIkhvbWVQYWdlIiwibXgiLCJwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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YWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIENhcmQsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuY29uc3QgVGV4dFN0eWxlID0gc3R5bGVkKFRleHQpYFxyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTIxLDEzMCwxMzApO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7ICAgXHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZSA9ICh7aW1nc3JjfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHdpZHRoPXsxLzN9IG1hcmdpblJpZ2h0PXsnMTVweCd9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdzcmN9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXJkVGV4dCA9ICh7aGVhZGluZywgYm9keSwgbGlua30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17Mi8zfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgLy8gZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBmb250RmFtaWx5PXsnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZid9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17JzE2cHgnfT5cclxuICAgICAgICAgICAgICAgIHtoZWFkaW5nfVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9eycxMDAlJ30gbXk9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZT57Ym9keX08L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM3REE3NTInXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtsaW5rfSAmIzg1OTQ7XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbmNvbnN0IERhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBoZWFkaW5nOiAnV2VhciBhIGZhY2VtYXNrJyxcclxuICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICBsaW5rOiAnMTUzIERpc2N1c3Npb25zJyxcclxuICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbiAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgIGxpbms6ICcxMjcgRGlzY3Vzc2lvbnMnLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdFbXB0eScsXHJcbiAgICAgICAgYm9keTogJycsXHJcbiAgICAgICAgbGluazogJzAgRGlzY3Vzc2lvbnMnLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzQnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdUb28gbXVjaCcsXHJcbiAgICAgICAgYm9keTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gY29tbW9kbyBsaWd1bGEgZWdldCBkb2xvci4gQWVuZWFuIG1hc3NhLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIERvbmVjIHF1YW0gZmVsaXMsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZSBldSwgcHJldGl1bSBxdWlzLCBzZW0uIE51bGxhIGNvbnNlcXVhdCBtYXNzYSBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCwgYXJjdS4gSW4gZW5pbSBqdXN0bywgcmhvbmN1cyB1dCwgaW1wZXJkaWV0IGEsIHZlbmVuYXRpcyB2aXRhZSwganVzdG8uIE51bGxhbSBkaWN0dW0gZmVsaXMgZXUgcGVkZSBtb2xsaXMgcHJldGl1bS4gSW50ZWdlciB0aW5jaWR1bnQuIENyYXMgZGFwaWJ1cy4gVml2YW11cyBlbGVtZW50dW0gc2VtcGVyIG5pc2kuIEFlbmVhbiB2dWxwdXRhdGUgZWxlaWZlbmQgdGVsbHVzLiBBZW5lYW4gbGVvIGxpZ3VsYSwgcG9ydHRpdG9yIGV1LCBjb25zZXF1YXQgdml0YWUsIGVsZWlmZW5kIGFjLCBlbmltLiBBbGlxdWFtIGxvcmVtIGFudGUsIGRhcGlidXMgaW4sIHZpdmVycmEgcXVpcywgZmV1Z2lhdCBhLCB0ZWxsdXMuIFBoYXNlbGx1cyB2aXZlcnJhIG51bGxhIHV0IG1ldHVzIHZhcml1cyBsYW9yZWV0LiBRdWlzcXVlIHJ1dHJ1bS4gQWVuZWFuIGltcGVyZGlldC4gRXRpYW0gdWx0cmljaWVzIG5pc2kgdmVsIGF1Z3VlLiBDdXJhYml0dXIgdWxsYW1jb3JwZXIgdWx0cmljaWVzIG5pc2kuIE5hbSBlZ2V0IGR1aS4gRXRpYW0gcmhvbmN1cy4gTWFlY2VuYXMgdGVtcHVzLCB0ZWxsdXMgZWdldCBjb25kaW1lbnR1bSByaG9uY3VzLCBzZW0gcXVhbSBzZW1wZXIgbGliZXJvLCBzaXQgYW1ldCBhZGlwaXNjaW5nIHNlbSBuZXF1ZSBzZWQgaXBzdW0uIE5hbSBxdWFtIG51bmMsIGJsYW5kaXQgdmVsLCBsdWN0dXMgcHVsdmluYXIsIGhlbmRyZXJpdCBpZCwgbG9yZW0uIE1hZWNlbmFzIG5lYyBvZGlvIGV0IGFudGUgdGluY2lkdW50IHRlbXB1cy4gRG9uZWMgdml0YWUgc2FwaWVuIHV0IGxpYmVybyB2ZW5lbmF0aXMgZmF1Y2lidXMuIE51bGxhbSBxdWlzIGFudGUuIEV0aWFtIHNpdCBhbWV0IG9yY2kgZWdldCBlcm9zIGZhdWNpYnVzIHRpbmNpZHVudC4gRHVpcyBsZW8uIFNlZCBmcmluZ2lsbGEgbWF1cmlzIHNpdCBhbWV0IG5pYmguIERvbmVjIHNvZGFsZXMgc2FnaXR0aXMgbWFnbmEuIFNlZCBjb25zZXF1YXQsIGxlbyBlZ2V0IGJpYmVuZHVtIHNvZGFsZXMsIGF1Z3VlIHZlbGl0IGN1cnN1cyBudW5jLCcsXHJcbiAgICAgICAgbGluazogJzEyNyBEaXNjdXNzaW9ucycsXHJcbiAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNScsXHJcbiAgICAgICAgaGVhZGluZzogJ1RvbyBtdWNoIDInLFxyXG4gICAgICAgIGJvZHk6ICdBYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUJCQkJCQkJCQkJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHRycsXHJcbiAgICAgICAgbGluazogJzAgRGlzY3Vzc2lvbnMnLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhcmRzID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgdGV4dEhlYWRpbmdPbmUgPSAnV2VhciBhIGZhY2VtYXNrJztcclxuICAgIC8vIGNvbnN0IHRleHRIZWFkaW5nVHdvID0gJ0F2b2lkIGNsb3NlIGNvbnRhY3QnO1xyXG4gICAgLy8gY29uc3QgdGV4dEJvZHlPbmUgPSAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJztcclxuICAgIC8vIGNvbnN0IHRleHRCb2R5VHdvID0gJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnO1xyXG4gICAgLy8gY29uc3QgdGV4dExpbmtPbmUgPSAnMTUzIERpc2N1c3Npb25zJztcclxuICAgIC8vIGNvbnN0IHRleHRMaW5rVHdvID0gJzEyNyBEaXNjdXNzaW9ucyc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICB7RGF0YS5tYXAoKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIG1hcmdpbkJvdHRvbT17JzE1cHgnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlIGltZ3NyYz17cHJvcHMuaW1nc3JjfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtwcm9wcy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3Byb3BzLmJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17cHJvcHMubGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuXHJcbmNvbnN0IExpbmtTdHlsZSA9IHN0eWxlZChMaW5rKWBcclxuICAgIGNvbG9yOiByZ2IoMTk0LDE5NCwxODEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbmBcclxuXHJcblxyXG5cclxuY29uc3QgU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzRweCAxcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjhweCcsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luTGVmdD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjN0RBNzUyJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEyNSwxNjcsODIsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgc3g9e3t3aWR0aDonMTAwJScsdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZlbnRpb25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEgLyAzfSBteD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1N0eWxlPlN5bXB0b21zPC9MaW5rU3R5bGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luUmlnaHQ9ezF9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmtTdHlsZT5EaWFnbm9zaXM8L0xpbmtTdHlsZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3Rpb24nO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczNzVweCcsXHJcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywyMzksMjM0KSdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3Rpb24vPlxyXG4gICAgICAgICAgICA8Q2FyZHMvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWJhc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==