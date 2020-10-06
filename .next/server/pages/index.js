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
  }, heading), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      alignItems: 'center',
      width: '100%',
      height: '50px',
      py: '8px'
    },
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
      lineNumber: 66,
      columnNumber: 17
    }
  }, body)), __jsx(LinkStyle, {
    href: link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, amount, " Discussions \u2192"));
}; // const Data = [
//     {
//         id: '1',
//         heading: 'Wear a facemask',
//         body: 'You should wear facemask when you are around other people',
//         link: '#',
//         amount: 53,
//         imgsrc: 'https://via.placeholder.com/100',
//     },
//     {
//         id: '2',
//         heading: 'Avoid close contact',
//         body: 'Put distance between yourself and other people',
//         link: '#',
//         amount: 127,
//         imgsrc: 'https://via.placeholder.com/50',
//     },
//     {
//         id: '3',
//         heading: 'Empty',
//         body: '',
//         link: '#',
//         amount: 0,
//         imgsrc: 'https://via.placeholder.com/500',
//     },
//     {
//         id: '4',
//         heading: 'Too much',
//         body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
//         link: '#',
//         amount: 0,
//         imgsrc: 'https://via.placeholder.com/100x500',
//     },
//     {
//         id: '5',
//         heading: 'Too much 2',
//         body: 'Loremipsumdolorsitamet,consectetueradipiscingelitAeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus',
//         link: '#',
//         amount: 0,
//         imgsrc: 'https://via.placeholder.com/500x100',
//     },
// ];

const Cards = ({
  Data = [{
    id: '1',
    heading: 'Title',
    body: 'Description',
    link: '#',
    amount: 0,
    imgsrc: 'https://via.placeholder.com/100'
  }]
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Data.map(props => {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      marginBottom: '15px',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 130,
        columnNumber: 25
      }
    }, __jsx(CardImage, {
      imgsrc: props.imgsrc,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 139,
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
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ "./components/Cards.tsx");
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-final\\components\\Selection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // Add Airbnb Cereal App font

const webfont = __webpack_require__(/*! ./webfont/webfont.module.css */ "./components/webfont/webfont.module.css");

const LinkStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    // width: 100%;
    // text-align: center;
    font-size: 15px;
    font-family: 'Airbnb Cereal App Medium';
    color: rgb(194,194,181);
`;
const BoxStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"])`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 20px;
    cursor: pointer;
    font-family: ${({
  selected
}) => selected ? "Airbnb Cereal App Bold" : "Airbnb Cereal App Medium"};
    color: ${({
  selected
}) => selected ? "#7DA752" : "rgb(194,194,181)"};
    background-color: ${({
  selected
}) => selected ? "rgba(125,167,82,0.2)" : ""};
`;
const Items = [{
  id: '1',
  key: '1',
  title: 'Prevention',
  posts: [{
    id: '1',
    heading: 'Title 1.1',
    body: 'Description 1.1',
    link: '#',
    amount: 11,
    imgsrc: 'https://via.placeholder.com/100'
  }, {
    id: '2',
    heading: 'Title 1.2',
    body: 'Description 1.2',
    link: '#',
    amount: 12,
    imgsrc: 'https://via.placeholder.com/100x200'
  }]
}, {
  id: '2',
  key: '2',
  title: 'Symptoms',
  posts: [{
    id: '1',
    heading: 'Title 2.1',
    body: 'Description 2.1',
    link: '#',
    amount: 21,
    imgsrc: 'https://via.placeholder.com/200x100'
  }, {
    id: '2',
    heading: 'Title 2.2',
    body: 'Description 2.2',
    link: '#',
    amount: 22,
    imgsrc: 'https://via.placeholder.com/200'
  }]
}, {
  id: '3',
  key: '3',
  title: 'Diagnosis',
  posts: [{
    id: '1',
    heading: 'Title 3.1',
    body: 'Description 3.1',
    link: '#',
    amount: 31,
    imgsrc: 'https://via.placeholder.com/300x100'
  }, {
    id: '2',
    heading: 'Title 3.2',
    body: 'Description 3.2',
    link: '#',
    amount: 32,
    imgsrc: 'https://via.placeholder.com/300x200'
  }]
}];

const Selection = ({
  selectedKey = '1',
  items = Items
}) => {
  const [key, setKey] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](selectedKey);

  const handleSelect = key => {
    setKey(key);
  };

  console.log(key);
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
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
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
      lineNumber: 121,
      columnNumber: 13
    }
  }, items.map(i => {
    return __jsx(BoxStyle, {
      width: 1 / 3,
      onClick: () => handleSelect(i.key),
      selected: i.key === key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, i.title));
  })), items.map(i => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, key === i.key && __jsx(_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Data: i.posts,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 39
      }
    }));
  }));
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
/* harmony import */ var _components_Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Selection */ "./components/Selection.tsx");
var _jsxFileName = "C:\\Users\\Kite\\Desktop\\Corona-App\\corona-app-final\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Items = [{
  id: '1',
  key: '1',
  title: 'Prevention',
  posts: [{
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
  }]
}, {
  id: '2',
  key: '2',
  title: 'Symptoms',
  posts: [{
    id: '1',
    heading: 'Wear a facemask 2',
    body: 'You should wear facemask when you are around other people',
    link: '#',
    amount: 53,
    imgsrc: 'https://via.placeholder.com/100'
  }, {
    id: '2',
    heading: 'Avoid close contact 2',
    body: 'Put distance between yourself and other people',
    link: '#',
    amount: 127,
    imgsrc: 'https://via.placeholder.com/50'
  }]
}, {
  id: '3',
  key: '3',
  title: 'Diagnosis',
  posts: [{
    id: '1',
    heading: 'Wear a facemask 3',
    body: 'You should wear facemask when you are around other people',
    link: '#',
    amount: 53,
    imgsrc: 'https://via.placeholder.com/100'
  }, {
    id: '2',
    heading: 'Avoid close contact 3',
    body: 'Put distance between yourself and other people',
    link: '#',
    amount: 127,
    imgsrc: 'https://via.placeholder.com/50'
  }]
}];

const HomePage = () => {
  return __jsx(_components_Selection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedKey: Items[0].key,
    items: Items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2ViZm9udC93ZWJmb250Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmViYXNzXCIiXSwibmFtZXMiOlsid2ViZm9udCIsInJlcXVpcmUiLCJIZWFkaW5nU3R5bGUiLCJzdHlsZWQiLCJIZWFkaW5nIiwiVGV4dFN0eWxlIiwiVGV4dCIsIkxpbmtTdHlsZSIsIkxpbmsiLCJDYXJkSW1hZ2UiLCJpbWdzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsIkNhcmRUZXh0IiwiaGVhZGluZyIsImJvZHkiLCJsaW5rIiwiYW1vdW50IiwibWFyZ2luUmlnaHQiLCJib3hTaXppbmciLCJhbGlnbkl0ZW1zIiwicHkiLCJDYXJkcyIsIkRhdGEiLCJpZCIsIm1hcCIsInByb3BzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1heEhlaWdodCIsIkJveFN0eWxlIiwiQm94Iiwic2VsZWN0ZWQiLCJJdGVtcyIsImtleSIsInRpdGxlIiwicG9zdHMiLCJTZWxlY3Rpb24iLCJzZWxlY3RlZEtleSIsIml0ZW1zIiwic2V0S2V5IiwiUmVhY3QiLCJoYW5kbGVTZWxlY3QiLCJjb25zb2xlIiwibG9nIiwibXgiLCJwIiwiZm9udEZhbWlseSIsIm1hcmdpbkJvdHRvbSIsImkiLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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UjtBQU1BVCxVQUFNLEVBQUU7QUFOUixHQURELEVBU0g7QUFDSWdCLE1BQUUsRUFBRSxHQURSO0FBRUlWLFdBQU8sRUFBRSx1QkFGYjtBQUdJQyxRQUFJLEVBQUUsZ0RBSFY7QUFJSUMsUUFBSSxFQUFFLEdBSlY7QUFLSUMsVUFBTSxFQUFFLEdBTFo7QUFNSVQsVUFBTSxFQUFFO0FBTlosR0FURztBQUpYLENBeEJVLEVBK0NWO0FBQ0lnQixJQUFFLEVBQUUsR0FEUjtBQUVJVSxLQUFHLEVBQUUsR0FGVDtBQUdJQyxPQUFLLEVBQUUsV0FIWDtBQUlJQyxPQUFLLEVBQUUsQ0FDQztBQUNBWixNQUFFLEVBQUUsR0FESjtBQUVBVixXQUFPLEVBQUUsbUJBRlQ7QUFHQUMsUUFBSSxFQUFFLDJEQUhOO0FBSUFDLFFBQUksRUFBRSxHQUpOO0FBS0FDLFVBQU0sRUFBRSxFQUxSO0FBTUFULFVBQU0sRUFBRTtBQU5SLEdBREQsRUFTSDtBQUNJZ0IsTUFBRSxFQUFFLEdBRFI7QUFFSVYsV0FBTyxFQUFFLHVCQUZiO0FBR0lDLFFBQUksRUFBRSxnREFIVjtBQUlJQyxRQUFJLEVBQUUsR0FKVjtBQUtJQyxVQUFNLEVBQUUsR0FMWjtBQU1JVCxVQUFNLEVBQUU7QUFOWixHQVRHO0FBSlgsQ0EvQ1UsQ0FBZDs7QUF5RUEsTUFBTTBDLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFNBQ0ksTUFBQyw2REFBRDtBQUFXLGVBQVcsRUFBRWpCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsR0FBakM7QUFBc0MsU0FBSyxFQUFFRCxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFHSCxDQUpEOztBQU1laUIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBDYXJkLCBJbWFnZSwgSGVhZGluZywgVGV4dCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbi8vIEFkZCBBaXJibmIgQ2VyZWFsIEFwcCBmb250XHJcbmNvbnN0IHdlYmZvbnQgPSByZXF1aXJlKCcuL3dlYmZvbnQvd2ViZm9udC5tb2R1bGUuY3NzJyk7XHJcblxyXG5cclxuY29uc3QgSGVhZGluZ1N0eWxlID0gc3R5bGVkKEhlYWRpbmcpYFxyXG4gICAgZm9udC1mYW1pbHk6ICdBaXJibmIgQ2VyZWFsIEFwcCBCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5jb25zdCBUZXh0U3R5bGUgPSBzdHlsZWQoVGV4dClgXHJcbiAgICBmb250LWZhbWlseTogJ0FpcmJuYiBDZXJlYWwgQXBwIExpZ2h0JztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2IoMTIxLDEzMCwxMzApO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7ICAgXHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5gXHJcbmNvbnN0IExpbmtTdHlsZSA9IHN0eWxlZChMaW5rKWBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWlyYm5iIENlcmVhbCBBcHAgTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjN0RBNzUyO1xyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSAoe2ltZ3NyYz0naHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCd9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggd2lkdGg9ezEvM30gbWFyZ2luUmlnaHQ9eycxNXB4J30+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9eycxMDBweCd9IGhlaWdodD17JzEwMHB4J30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXJkVGV4dCA9ICh7aGVhZGluZz0nVGl0bGUnLCBib2R5PSdEZXNjcmlwdGlvbicsIGxpbms9JyMnLCBhbW91bnQ9MH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17Mi8zfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgLy8gZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8SGVhZGluZ1N0eWxlPntoZWFkaW5nfTwvSGVhZGluZ1N0eWxlPlxyXG4gICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBweTogJzhweCcsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGU+e2JvZHl9PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPExpbmtTdHlsZSBocmVmPXtsaW5rfT57YW1vdW50fSBEaXNjdXNzaW9ucyAmIzg1OTQ7PC9MaW5rU3R5bGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcblxyXG4vLyBjb25zdCBEYXRhID0gW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnMScsXHJcbi8vICAgICAgICAgaGVhZGluZzogJ1dlYXIgYSBmYWNlbWFzaycsXHJcbi8vICAgICAgICAgYm9keTogJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZScsXHJcbi8vICAgICAgICAgbGluazogJyMnLFxyXG4vLyAgICAgICAgIGFtb3VudDogNTMsXHJcbi8vICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnMicsXHJcbi8vICAgICAgICAgaGVhZGluZzogJ0F2b2lkIGNsb3NlIGNvbnRhY3QnLFxyXG4vLyAgICAgICAgIGJvZHk6ICdQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlJyxcclxuLy8gICAgICAgICBsaW5rOiAnIycsXHJcbi8vICAgICAgICAgYW1vdW50OiAxMjcsXHJcbi8vICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICczJyxcclxuLy8gICAgICAgICBoZWFkaW5nOiAnRW1wdHknLFxyXG4vLyAgICAgICAgIGJvZHk6ICcnLFxyXG4vLyAgICAgICAgIGxpbms6ICcjJyxcclxuLy8gICAgICAgICBhbW91bnQ6IDAsXHJcbi8vICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnNCcsXHJcbi8vICAgICAgICAgaGVhZGluZzogJ1RvbyBtdWNoJyxcclxuLy8gICAgICAgICBib2R5OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBjb21tb2RvIGxpZ3VsYSBlZ2V0IGRvbG9yLiBBZW5lYW4gbWFzc2EuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gRG9uZWMgcXVhbSBmZWxpcywgdWx0cmljaWVzIG5lYywgcGVsbGVudGVzcXVlIGV1LCBwcmV0aXVtIHF1aXMsIHNlbS4gTnVsbGEgY29uc2VxdWF0IG1hc3NhIHF1aXMgZW5pbS4gRG9uZWMgcGVkZSBqdXN0bywgZnJpbmdpbGxhIHZlbCwgYWxpcXVldCBuZWMsIHZ1bHB1dGF0ZSBlZ2V0LCBhcmN1LiBJbiBlbmltIGp1c3RvLCByaG9uY3VzIHV0LCBpbXBlcmRpZXQgYSwgdmVuZW5hdGlzIHZpdGFlLCBqdXN0by4gTnVsbGFtIGRpY3R1bSBmZWxpcyBldSBwZWRlIG1vbGxpcyBwcmV0aXVtLiBJbnRlZ2VyIHRpbmNpZHVudC4gQ3JhcyBkYXBpYnVzLiBWaXZhbXVzIGVsZW1lbnR1bSBzZW1wZXIgbmlzaS4gQWVuZWFuIHZ1bHB1dGF0ZSBlbGVpZmVuZCB0ZWxsdXMuIEFlbmVhbiBsZW8gbGlndWxhLCBwb3J0dGl0b3IgZXUsIGNvbnNlcXVhdCB2aXRhZSwgZWxlaWZlbmQgYWMsIGVuaW0uIEFsaXF1YW0gbG9yZW0gYW50ZSwgZGFwaWJ1cyBpbiwgdml2ZXJyYSBxdWlzLCBmZXVnaWF0IGEsIHRlbGx1cy4gUGhhc2VsbHVzIHZpdmVycmEgbnVsbGEgdXQgbWV0dXMgdmFyaXVzIGxhb3JlZXQuIFF1aXNxdWUgcnV0cnVtLiBBZW5lYW4gaW1wZXJkaWV0LiBFdGlhbSB1bHRyaWNpZXMgbmlzaSB2ZWwgYXVndWUuIEN1cmFiaXR1ciB1bGxhbWNvcnBlciB1bHRyaWNpZXMgbmlzaS4gTmFtIGVnZXQgZHVpLiBFdGlhbSByaG9uY3VzLiBNYWVjZW5hcyB0ZW1wdXMsIHRlbGx1cyBlZ2V0IGNvbmRpbWVudHVtIHJob25jdXMsIHNlbSBxdWFtIHNlbXBlciBsaWJlcm8sIHNpdCBhbWV0IGFkaXBpc2Npbmcgc2VtIG5lcXVlIHNlZCBpcHN1bS4gTmFtIHF1YW0gbnVuYywgYmxhbmRpdCB2ZWwsIGx1Y3R1cyBwdWx2aW5hciwgaGVuZHJlcml0IGlkLCBsb3JlbS4gTWFlY2VuYXMgbmVjIG9kaW8gZXQgYW50ZSB0aW5jaWR1bnQgdGVtcHVzLiBEb25lYyB2aXRhZSBzYXBpZW4gdXQgbGliZXJvIHZlbmVuYXRpcyBmYXVjaWJ1cy4gTnVsbGFtIHF1aXMgYW50ZS4gRXRpYW0gc2l0IGFtZXQgb3JjaSBlZ2V0IGVyb3MgZmF1Y2lidXMgdGluY2lkdW50LiBEdWlzIGxlby4gU2VkIGZyaW5naWxsYSBtYXVyaXMgc2l0IGFtZXQgbmliaC4gRG9uZWMgc29kYWxlcyBzYWdpdHRpcyBtYWduYS4gU2VkIGNvbnNlcXVhdCwgbGVvIGVnZXQgYmliZW5kdW0gc29kYWxlcywgYXVndWUgdmVsaXQgY3Vyc3VzIG51bmMsJyxcclxuLy8gICAgICAgICBsaW5rOiAnIycsXHJcbi8vICAgICAgICAgYW1vdW50OiAwLFxyXG4vLyAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4NTAwJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICc1JyxcclxuLy8gICAgICAgICBoZWFkaW5nOiAnVG9vIG11Y2ggMicsXHJcbi8vICAgICAgICAgYm9keTogJ0xvcmVtaXBzdW1kb2xvcnNpdGFtZXQsY29uc2VjdGV0dWVyYWRpcGlzY2luZ2VsaXRBZW5lYW5jb21tb2RvbGlndWxhZWdldGRvbG9yLkFlbmVhbm1hc3NhLkN1bXNvY2lpc25hdG9xdWVwZW5hdGlidXNldG1hZ25pc2Rpc3BhcnR1cmllbnRtb250ZXMsbmFzY2V0dXJyaWRpY3VsdXNtdXMnLFxyXG4vLyAgICAgICAgIGxpbms6ICcjJyxcclxuLy8gICAgICAgICBhbW91bnQ6IDAsXHJcbi8vICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMHgxMDAnLFxyXG4vLyAgICAgfSxcclxuLy8gXTtcclxuXHJcbmNvbnN0IENhcmRzID0gKHtEYXRhID0gW3tcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGhlYWRpbmc6ICdUaXRsZScsXHJcbiAgICAgICAgYm9keTogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgfV19KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtEYXRhLm1hcCgocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgbWFyZ2luQm90dG9tPXsnMTVweCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMjBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZSBpbWdzcmM9e3Byb3BzLmltZ3NyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17cHJvcHMuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5PXtwcm9wcy5ib2R5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3Byb3BzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwcm9wcy5hbW91bnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZsZXgsIEJveCwgTGluayB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4vQ2FyZHMnO1xyXG5cclxuLy8gQWRkIEFpcmJuYiBDZXJlYWwgQXBwIGZvbnRcclxuY29uc3Qgd2ViZm9udCA9IHJlcXVpcmUoJy4vd2ViZm9udC93ZWJmb250Lm1vZHVsZS5jc3MnKTtcclxuXHJcblxyXG5jb25zdCBMaW5rU3R5bGUgPSBzdHlsZWQoTGluaylgXHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWlyYm5iIENlcmVhbCBBcHAgTWVkaXVtJztcclxuICAgIGNvbG9yOiByZ2IoMTk0LDE5NCwxODEpO1xyXG5gXHJcbmNvbnN0IEJveFN0eWxlID0gc3R5bGVkKEJveClgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICR7KHtzZWxlY3RlZH0pID0+IChzZWxlY3RlZCA/IFwiQWlyYm5iIENlcmVhbCBBcHAgQm9sZFwiIDogXCJBaXJibmIgQ2VyZWFsIEFwcCBNZWRpdW1cIil9O1xyXG4gICAgY29sb3I6ICR7KHtzZWxlY3RlZH0pID0+IChzZWxlY3RlZCA/IFwiIzdEQTc1MlwiIDogXCJyZ2IoMTk0LDE5NCwxODEpXCIpfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHtzZWxlY3RlZH0pID0+IChzZWxlY3RlZCA/IFwicmdiYSgxMjUsMTY3LDgyLDAuMilcIiA6IFwiXCIpfTtcclxuYFxyXG5cclxuY29uc3QgSXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICB0aXRsZTogJ1ByZXZlbnRpb24nLFxyXG4gICAgICAgIHBvc3RzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnVGl0bGUgMS4xJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEZXNjcmlwdGlvbiAxLjEnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMSxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ1RpdGxlIDEuMicsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnRGVzY3JpcHRpb24gMS4yJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMTIsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAweDIwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICB0aXRsZTogJ1N5bXB0b21zJyxcclxuICAgICAgICBwb3N0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ1RpdGxlIDIuMScsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnRGVzY3JpcHRpb24gMi4xJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMjEsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAweDEwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnVGl0bGUgMi4yJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEZXNjcmlwdGlvbiAyLjInLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAyMixcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMycsXHJcbiAgICAgICAga2V5OiAnMycsXHJcbiAgICAgICAgdGl0bGU6ICdEaWFnbm9zaXMnLFxyXG4gICAgICAgIHBvc3RzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnVGl0bGUgMy4xJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEZXNjcmlwdGlvbiAzLjEnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAzMSxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MTAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdUaXRsZSAzLjInLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rlc2NyaXB0aW9uIDMuMicsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDMyLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgyMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IFNlbGVjdGlvbiA9ICh7XHJcbiAgICAgICAgc2VsZWN0ZWRLZXk9JzEnLCBcclxuICAgICAgICBpdGVtcz1JdGVtc1xyXG4gICAgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtrZXksIHNldEtleV0gPSBSZWFjdC51c2VTdGF0ZShzZWxlY3RlZEtleSk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRLZXkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczNzVweCcsXHJcbiAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgcDogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywyMzksMjM0KSdcclxuICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICA8RmxleCBcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyOHB4JyxcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaSkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFN0eWxlIHdpZHRoPXsxIC8gM30gb25DbGljaz17KCk9PmhhbmRsZVNlbGVjdChpLmtleSl9IHNlbGVjdGVkPXtpLmtleSA9PT0ga2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz57aS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtrZXkgPT09IGkua2V5ICYmIDxDYXJkcyBEYXRhPXtpLnBvc3RzfS8+fVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9KX1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJyZWJhc3NcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XHJcblxyXG5cclxuXHJcbmNvbnN0IEl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICdQcmV2ZW50aW9uJyxcclxuICAgICAgICBwb3N0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdXZWFyIGEgZmFjZW1hc2snLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDUzLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEyNyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzInLFxyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRpdGxlOiAnU3ltcHRvbXMnLFxyXG4gICAgICAgIHBvc3RzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ1dlYXIgYSBmYWNlbWFzayAyJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiA1MyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ0F2b2lkIGNsb3NlIGNvbnRhY3QgMicsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEyNyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRpdGxlOiAnRGlhZ25vc2lzJyxcclxuICAgICAgICBwb3N0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdXZWFyIGEgZmFjZW1hc2sgMycsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogNTMsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdBdm9pZCBjbG9zZSBjb250YWN0IDMnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMjcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VsZWN0aW9uIHNlbGVjdGVkS2V5PXtJdGVtc1swXS5rZXl9IGl0ZW1zPXtJdGVtc30vPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWJhc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==