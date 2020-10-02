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
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-final\\components\\Cards.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Add Airbnb Cereal App font

const webfont = __webpack_require__(/*! ./webfont/webfont.module.css */ "./components/webfont/webfont.module.css");

const HeadingStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"])`
    font-family: 'Airbnb Cereal App Bold';
    font-size: 16px;
`;
const TextStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"])`
    font-family: 'Airbnb Cereal App Light';
    font-size: 13px;
    color: rgb(121,130,130);
    display: -webkit-box;   
    -webkit-line-clamp: 2;   
    -webkit-box-orient: vertical;   
    overflow: hidden;
    text-overflow: ellipsis;
`;
const LinkStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    text-decoration: none;
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    cursor: pointer;
    color: #7DA752;
`;
const CardImage = ({
  imgsrc = 'https://via.placeholder.com/100'
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginRight: '15px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: '100px',
    height: '100px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: imgsrc,
    sx: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })));
};
const CardText = ({
  heading = 'Title',
  body = 'Description',
  link = '#',
  amount = 0
}) => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 2 / 3,
    sx: {
      // fontSize: '12px',
      marginRight: '10px',
      boxSizing: 'border-box' // overflowWrap: 'break-word'

    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(HeadingStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: '100%',
    my: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(TextStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, body)), __jsx(LinkStyle, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, amount, " Discussions \u2192"));
};
const Data = [{
  id: '1',
  heading: 'Wear a facemask',
  body: 'You should wear facemask when you are around other people',
  link: '#',
  amount: 53,
  imgsrc: 'https://via.placeholder.com/100'
}, {
  id: '2',
  heading: 'Avoid close contact',
  body: 'Put distance between yourself and other people',
  link: '#',
  amount: 127,
  imgsrc: 'https://via.placeholder.com/50'
}, {
  id: '3',
  heading: 'Empty',
  body: '',
  link: '#',
  imgsrc: 'https://via.placeholder.com/500'
}, {
  id: '4',
  heading: 'Too much',
  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
  link: '#',
  imgsrc: 'https://via.placeholder.com/100x500'
}, {
  id: '5',
  heading: 'Too much 2',
  body: 'Loremipsumdolorsitamet,consectetueradipiscingelitAeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus',
  link: '#',
  imgsrc: 'https://via.placeholder.com/500x100'
}];

const Cards = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, Data.map(props => {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      marginBottom: '15px',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      sx: {
        padding: '10px',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: '16px',
        maxHeight: '120px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }, __jsx(CardImage, {
      imgsrc: props.imgsrc,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }), __jsx(CardText, {
      heading: props.heading,
      body: props.body,
      link: props.link,
      amount: props.amount,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-final\\components\\Selection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


 // Add Airbnb Cereal App font

const webfont = __webpack_require__(/*! ./webfont/webfont.module.css */ "./components/webfont/webfont.module.css");

const LinkStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    color: rgb(194,194,181);
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-family: 'Airbnb Cereal App Medium';
`;
const LinkStyleActive = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    color: rgb(194,194,181);
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-family: 'Airbnb Cereal App Bold';
    color: #7DA752;
`;

const Selection = () => {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      width: '345px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding: '5px 1px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: '28px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1 / 3,
    marginLeft: 1,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '20px',
      cursor: 'pointer',
      backgroundColor: 'rgba(125,167,82,0.2)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(LinkStyleActive, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(LinkStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Diagnosis")));
};

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./components/webfont/webfont.module.css":
/*!***********************************************!*\
  !*** ./components/webfont/webfont.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {};


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
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-final\\pages\\index.tsx";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2ViZm9udC93ZWJmb250Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmViYXNzXCIiXSwibmFtZXMiOlsid2ViZm9udCIsInJlcXVpcmUiLCJIZWFkaW5nU3R5bGUiLCJzdHlsZWQiLCJIZWFkaW5nIiwiVGV4dFN0eWxlIiwiVGV4dCIsIkxpbmtTdHlsZSIsIkxpbmsiLCJDYXJkSW1hZ2UiLCJpbWdzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsIkNhcmRUZXh0IiwiaGVhZGluZyIsImJvZHkiLCJsaW5rIiwiYW1vdW50IiwibWFyZ2luUmlnaHQiLCJib3hTaXppbmciLCJEYXRhIiwiaWQiLCJDYXJkcyIsIm1hcCIsInByb3BzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImFsaWduSXRlbXMiLCJtYXhIZWlnaHQiLCJMaW5rU3R5bGVBY3RpdmUiLCJTZWxlY3Rpb24iLCJmb250RmFtaWx5IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImN1cnNvciIsIkhvbWVQYWdlIiwibXgiLCJwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFNBQ0ksTUFBQywwQ0FBRDtBQUNJLE1BQUUsRUFBRTtBQUNBMUIsV0FBSyxFQUFFLE9BRFA7QUFFQTJCLFFBQUUsRUFBRSxNQUZKO0FBR0FDLE9BQUMsRUFBRSxNQUhIO0FBSUFYLHFCQUFlLEVBQUU7QUFKakIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBWUgsQ0FiRDs7QUFlZVMsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbi8vIEFkZCBBaXJibmIgQ2VyZWFsIEFwcCBmb250XHJcbmNvbnN0IHdlYmZvbnQgPSByZXF1aXJlKCcuL3dlYmZvbnQvd2ViZm9udC5tb2R1bGUuY3NzJyk7XHJcblxyXG5cclxuY29uc3QgSGVhZGluZ1N0eWxlID0gc3R5bGVkKEhlYWRpbmcpYFxyXG4gICAgZm9udC1mYW1pbHk6ICdBaXJibmIgQ2VyZWFsIEFwcCBCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGUgPSBzdHlsZWQoVGV4dClgXHJcbiAgICBmb250LWZhbWlseTogJ0FpcmJuYiBDZXJlYWwgQXBwIExpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMTIxLDEzMCwxMzApO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7ICAgXHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gXHJcbmNvbnN0IExpbmtTdHlsZSA9IHN0eWxlZChMaW5rKWBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWlyYm5iIENlcmVhbCBBcHAgTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjN0RBNzUyO1xyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSAoe2ltZ3NyYz0naHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCd9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezEvM30gbWFyZ2luUmlnaHQ9eycxNXB4J30+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9eycxMDBweCd9IGhlaWdodD17JzEwMHB4J30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXJkVGV4dCA9ICh7aGVhZGluZz0nVGl0bGUnLCBib2R5PSdEZXNjcmlwdGlvbicsIGxpbms9JyMnLCBhbW91bnQ9MH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17Mi8zfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgLy8gZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8SGVhZGluZ1N0eWxlPntoZWFkaW5nfTwvSGVhZGluZ1N0eWxlPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsnMTAwJSd9IG15PXsyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+e2JvZHl9PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8TGlua1N0eWxlIGhyZWY9e2xpbmt9PnthbW91bnR9IERpc2N1c3Npb25zICYjODU5NDs8L0xpbmtTdHlsZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbmNvbnN0IERhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBoZWFkaW5nOiAnV2VhciBhIGZhY2VtYXNrJyxcclxuICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgYW1vdW50OiA1MyxcclxuICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbiAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICBhbW91bnQ6IDEyNyxcclxuICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdFbXB0eScsXHJcbiAgICAgICAgYm9keTogJycsXHJcbiAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzQnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdUb28gbXVjaCcsXHJcbiAgICAgICAgYm9keTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gY29tbW9kbyBsaWd1bGEgZWdldCBkb2xvci4gQWVuZWFuIG1hc3NhLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIERvbmVjIHF1YW0gZmVsaXMsIHVsdHJpY2llcyBuZWMsIHBlbGxlbnRlc3F1ZSBldSwgcHJldGl1bSBxdWlzLCBzZW0uIE51bGxhIGNvbnNlcXVhdCBtYXNzYSBxdWlzIGVuaW0uIERvbmVjIHBlZGUganVzdG8sIGZyaW5naWxsYSB2ZWwsIGFsaXF1ZXQgbmVjLCB2dWxwdXRhdGUgZWdldCwgYXJjdS4gSW4gZW5pbSBqdXN0bywgcmhvbmN1cyB1dCwgaW1wZXJkaWV0IGEsIHZlbmVuYXRpcyB2aXRhZSwganVzdG8uIE51bGxhbSBkaWN0dW0gZmVsaXMgZXUgcGVkZSBtb2xsaXMgcHJldGl1bS4gSW50ZWdlciB0aW5jaWR1bnQuIENyYXMgZGFwaWJ1cy4gVml2YW11cyBlbGVtZW50dW0gc2VtcGVyIG5pc2kuIEFlbmVhbiB2dWxwdXRhdGUgZWxlaWZlbmQgdGVsbHVzLiBBZW5lYW4gbGVvIGxpZ3VsYSwgcG9ydHRpdG9yIGV1LCBjb25zZXF1YXQgdml0YWUsIGVsZWlmZW5kIGFjLCBlbmltLiBBbGlxdWFtIGxvcmVtIGFudGUsIGRhcGlidXMgaW4sIHZpdmVycmEgcXVpcywgZmV1Z2lhdCBhLCB0ZWxsdXMuIFBoYXNlbGx1cyB2aXZlcnJhIG51bGxhIHV0IG1ldHVzIHZhcml1cyBsYW9yZWV0LiBRdWlzcXVlIHJ1dHJ1bS4gQWVuZWFuIGltcGVyZGlldC4gRXRpYW0gdWx0cmljaWVzIG5pc2kgdmVsIGF1Z3VlLiBDdXJhYml0dXIgdWxsYW1jb3JwZXIgdWx0cmljaWVzIG5pc2kuIE5hbSBlZ2V0IGR1aS4gRXRpYW0gcmhvbmN1cy4gTWFlY2VuYXMgdGVtcHVzLCB0ZWxsdXMgZWdldCBjb25kaW1lbnR1bSByaG9uY3VzLCBzZW0gcXVhbSBzZW1wZXIgbGliZXJvLCBzaXQgYW1ldCBhZGlwaXNjaW5nIHNlbSBuZXF1ZSBzZWQgaXBzdW0uIE5hbSBxdWFtIG51bmMsIGJsYW5kaXQgdmVsLCBsdWN0dXMgcHVsdmluYXIsIGhlbmRyZXJpdCBpZCwgbG9yZW0uIE1hZWNlbmFzIG5lYyBvZGlvIGV0IGFudGUgdGluY2lkdW50IHRlbXB1cy4gRG9uZWMgdml0YWUgc2FwaWVuIHV0IGxpYmVybyB2ZW5lbmF0aXMgZmF1Y2lidXMuIE51bGxhbSBxdWlzIGFudGUuIEV0aWFtIHNpdCBhbWV0IG9yY2kgZWdldCBlcm9zIGZhdWNpYnVzIHRpbmNpZHVudC4gRHVpcyBsZW8uIFNlZCBmcmluZ2lsbGEgbWF1cmlzIHNpdCBhbWV0IG5pYmguIERvbmVjIHNvZGFsZXMgc2FnaXR0aXMgbWFnbmEuIFNlZCBjb25zZXF1YXQsIGxlbyBlZ2V0IGJpYmVuZHVtIHNvZGFsZXMsIGF1Z3VlIHZlbGl0IGN1cnN1cyBudW5jLCcsXHJcbiAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4NTAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc1JyxcclxuICAgICAgICBoZWFkaW5nOiAnVG9vIG11Y2ggMicsXHJcbiAgICAgICAgYm9keTogJ0xvcmVtaXBzdW1kb2xvcnNpdGFtZXQsY29uc2VjdGV0dWVyYWRpcGlzY2luZ2VsaXRBZW5lYW5jb21tb2RvbGlndWxhZWdldGRvbG9yLkFlbmVhbm1hc3NhLkN1bXNvY2lpc25hdG9xdWVwZW5hdGlidXNldG1hZ25pc2Rpc3BhcnR1cmllbnRtb250ZXMsbmFzY2V0dXJyaWRpY3VsdXNtdXMnLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAweDEwMCcsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIHtEYXRhLm1hcCgocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgbWFyZ2luQm90dG9tPXsnMTVweCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSBpbWdzcmM9e3Byb3BzLmltZ3NyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17cHJvcHMuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5PXtwcm9wcy5ib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwcm9wcy5hbW91bnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbi8vIEFkZCBBaXJibmIgQ2VyZWFsIEFwcCBmb250XHJcbmNvbnN0IHdlYmZvbnQgPSByZXF1aXJlKCcuL3dlYmZvbnQvd2ViZm9udC5tb2R1bGUuY3NzJyk7XHJcblxyXG5cclxuY29uc3QgTGlua1N0eWxlID0gc3R5bGVkKExpbmspYFxyXG4gICAgY29sb3I6IHJnYigxOTQsMTk0LDE4MSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWlyYm5iIENlcmVhbCBBcHAgTWVkaXVtJztcclxuYFxyXG5jb25zdCBMaW5rU3R5bGVBY3RpdmUgPSBzdHlsZWQoTGluaylgXHJcbiAgICBjb2xvcjogcmdiKDE5NCwxOTQsMTgxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBaXJibmIgQ2VyZWFsIEFwcCBCb2xkJztcclxuICAgIGNvbG9yOiAjN0RBNzUyO1xyXG5gXHJcblxyXG5cclxuXHJcbmNvbnN0IFNlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCAxcHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjhweCcsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsxIC8gM30gbWFyZ2luTGVmdD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEyNSwxNjcsODIsMC4yKScsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rU3R5bGVBY3RpdmU+UHJldmVudGlvbjwvTGlua1N0eWxlQWN0aXZlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17MSAvIDN9IG14PXsxfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rU3R5bGU+U3ltcHRvbXM8L0xpbmtTdHlsZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEgLyAzfSBtYXJnaW5SaWdodD17MX1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1N0eWxlPkRpYWdub3NpczwvTGlua1N0eWxlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3Rpb24nO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczNzVweCcsXHJcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywyMzksMjM0KSdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3Rpb24vPlxyXG4gICAgICAgICAgICA8Q2FyZHMvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWJhc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==