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
    }, __jsx(LinkStyle, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2ViZm9udC93ZWJmb250Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmViYXNzXCIiXSwibmFtZXMiOlsid2ViZm9udCIsInJlcXVpcmUiLCJIZWFkaW5nU3R5bGUiLCJzdHlsZWQiLCJIZWFkaW5nIiwiVGV4dFN0eWxlIiwiVGV4dCIsIkxpbmtTdHlsZSIsIkxpbmsiLCJDYXJkSW1hZ2UiLCJpbWdzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsIkNhcmRUZXh0IiwiaGVhZGluZyIsImJvZHkiLCJsaW5rIiwiYW1vdW50IiwibWFyZ2luUmlnaHQiLCJib3hTaXppbmciLCJhbGlnbkl0ZW1zIiwicHkiLCJDYXJkcyIsIkRhdGEiLCJpZCIsIm1hcCIsInByb3BzIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1heEhlaWdodCIsIkJveFN0eWxlIiwiQm94Iiwic2VsZWN0ZWQiLCJJdGVtcyIsImtleSIsInRpdGxlIiwicG9zdHMiLCJTZWxlY3Rpb24iLCJzZWxlY3RlZEtleSIsIml0ZW1zIiwic2V0S2V5IiwiUmVhY3QiLCJoYW5kbGVTZWxlY3QiLCJjb25zb2xlIiwibG9nIiwibXgiLCJwIiwiZm9udEZhbWlseSIsIm1hcmdpbkJvdHRvbSIsImkiLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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O0FBTUFULFVBQU0sRUFBRTtBQU5SLEdBREQsRUFTSDtBQUNJZ0IsTUFBRSxFQUFFLEdBRFI7QUFFSVYsV0FBTyxFQUFFLHVCQUZiO0FBR0lDLFFBQUksRUFBRSxnREFIVjtBQUlJQyxRQUFJLEVBQUUsR0FKVjtBQUtJQyxVQUFNLEVBQUUsR0FMWjtBQU1JVCxVQUFNLEVBQUU7QUFOWixHQVRHO0FBSlgsQ0F4QlUsRUErQ1Y7QUFDSWdCLElBQUUsRUFBRSxHQURSO0FBRUlVLEtBQUcsRUFBRSxHQUZUO0FBR0lDLE9BQUssRUFBRSxXQUhYO0FBSUlDLE9BQUssRUFBRSxDQUNDO0FBQ0FaLE1BQUUsRUFBRSxHQURKO0FBRUFWLFdBQU8sRUFBRSxtQkFGVDtBQUdBQyxRQUFJLEVBQUUsMkRBSE47QUFJQUMsUUFBSSxFQUFFLEdBSk47QUFLQUMsVUFBTSxFQUFFLEVBTFI7QUFNQVQsVUFBTSxFQUFFO0FBTlIsR0FERCxFQVNIO0FBQ0lnQixNQUFFLEVBQUUsR0FEUjtBQUVJVixXQUFPLEVBQUUsdUJBRmI7QUFHSUMsUUFBSSxFQUFFLGdEQUhWO0FBSUlDLFFBQUksRUFBRSxHQUpWO0FBS0lDLFVBQU0sRUFBRSxHQUxaO0FBTUlULFVBQU0sRUFBRTtBQU5aLEdBVEc7QUFKWCxDQS9DVSxDQUFkOztBQXlFQSxNQUFNMEMsUUFBUSxHQUFHLE1BQU07QUFDbkIsU0FDSSxNQUFDLDZEQUFEO0FBQVcsZUFBVyxFQUFFakIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxHQUFqQztBQUFzQyxTQUFLLEVBQUVELEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUdILENBSkQ7O0FBTWVpQix1RUFBZixFOzs7Ozs7Ozs7OztBQ3JGQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIENhcmQsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuLy8gQWRkIEFpcmJuYiBDZXJlYWwgQXBwIGZvbnRcclxuY29uc3Qgd2ViZm9udCA9IHJlcXVpcmUoJy4vd2ViZm9udC93ZWJmb250Lm1vZHVsZS5jc3MnKTtcclxuXHJcblxyXG5jb25zdCBIZWFkaW5nU3R5bGUgPSBzdHlsZWQoSGVhZGluZylgXHJcbiAgICBmb250LWZhbWlseTogJ0FpcmJuYiBDZXJlYWwgQXBwIEJvbGQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5gXHJcbmNvbnN0IFRleHRTdHlsZSA9IHN0eWxlZChUZXh0KWBcclxuICAgIGZvbnQtZmFtaWx5OiAnQWlyYm5iIENlcmVhbCBBcHAgTGlnaHQnO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHJnYigxMjEsMTMwLDEzMCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICBcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjsgICBcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbmBcclxuY29uc3QgTGlua1N0eWxlID0gc3R5bGVkKExpbmspYFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBaXJibmIgQ2VyZWFsIEFwcCBNZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM3REE3NTI7XHJcbmBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZSA9ICh7aW1nc3JjPSdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJ30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCB3aWR0aD17MS8zfSBtYXJnaW5SaWdodD17JzE1cHgnfT5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17JzEwMHB4J30gaGVpZ2h0PXsnMTAwcHgnfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ3NyY31cclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGNvbnN0IENhcmRUZXh0ID0gKHtoZWFkaW5nPSdUaXRsZScsIGJvZHk9J0Rlc2NyaXB0aW9uJywgbGluaz0nIycsIGFtb3VudD0wfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHdpZHRoPXsyLzN9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAvLyBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nU3R5bGU+e2hlYWRpbmd9PC9IZWFkaW5nU3R5bGU+XHJcbiAgICAgICAgICAgIDxGbGV4IFxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHB5OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZT57Ym9keX08L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8TGlua1N0eWxlIGhyZWY9e2xpbmt9PnthbW91bnR9IERpc2N1c3Npb25zICYjODU5NDs8L0xpbmtTdHlsZT5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufTtcclxuXHJcbi8vIGNvbnN0IERhdGEgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICcxJyxcclxuLy8gICAgICAgICBoZWFkaW5nOiAnV2VhciBhIGZhY2VtYXNrJyxcclxuLy8gICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuLy8gICAgICAgICBsaW5rOiAnIycsXHJcbi8vICAgICAgICAgYW1vdW50OiA1MyxcclxuLy8gICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICcyJyxcclxuLy8gICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbi8vICAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4vLyAgICAgICAgIGxpbms6ICcjJyxcclxuLy8gICAgICAgICBhbW91bnQ6IDEyNyxcclxuLy8gICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJzMnLFxyXG4vLyAgICAgICAgIGhlYWRpbmc6ICdFbXB0eScsXHJcbi8vICAgICAgICAgYm9keTogJycsXHJcbi8vICAgICAgICAgbGluazogJyMnLFxyXG4vLyAgICAgICAgIGFtb3VudDogMCxcclxuLy8gICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAwJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6ICc0JyxcclxuLy8gICAgICAgICBoZWFkaW5nOiAnVG9vIG11Y2gnLFxyXG4vLyAgICAgICAgIGJvZHk6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbW1vZG8gbGlndWxhIGVnZXQgZG9sb3IuIEFlbmVhbiBtYXNzYS4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBEb25lYyBxdWFtIGZlbGlzLCB1bHRyaWNpZXMgbmVjLCBwZWxsZW50ZXNxdWUgZXUsIHByZXRpdW0gcXVpcywgc2VtLiBOdWxsYSBjb25zZXF1YXQgbWFzc2EgcXVpcyBlbmltLiBEb25lYyBwZWRlIGp1c3RvLCBmcmluZ2lsbGEgdmVsLCBhbGlxdWV0IG5lYywgdnVscHV0YXRlIGVnZXQsIGFyY3UuIEluIGVuaW0ganVzdG8sIHJob25jdXMgdXQsIGltcGVyZGlldCBhLCB2ZW5lbmF0aXMgdml0YWUsIGp1c3RvLiBOdWxsYW0gZGljdHVtIGZlbGlzIGV1IHBlZGUgbW9sbGlzIHByZXRpdW0uIEludGVnZXIgdGluY2lkdW50LiBDcmFzIGRhcGlidXMuIFZpdmFtdXMgZWxlbWVudHVtIHNlbXBlciBuaXNpLiBBZW5lYW4gdnVscHV0YXRlIGVsZWlmZW5kIHRlbGx1cy4gQWVuZWFuIGxlbyBsaWd1bGEsIHBvcnR0aXRvciBldSwgY29uc2VxdWF0IHZpdGFlLCBlbGVpZmVuZCBhYywgZW5pbS4gQWxpcXVhbSBsb3JlbSBhbnRlLCBkYXBpYnVzIGluLCB2aXZlcnJhIHF1aXMsIGZldWdpYXQgYSwgdGVsbHVzLiBQaGFzZWxsdXMgdml2ZXJyYSBudWxsYSB1dCBtZXR1cyB2YXJpdXMgbGFvcmVldC4gUXVpc3F1ZSBydXRydW0uIEFlbmVhbiBpbXBlcmRpZXQuIEV0aWFtIHVsdHJpY2llcyBuaXNpIHZlbCBhdWd1ZS4gQ3VyYWJpdHVyIHVsbGFtY29ycGVyIHVsdHJpY2llcyBuaXNpLiBOYW0gZWdldCBkdWkuIEV0aWFtIHJob25jdXMuIE1hZWNlbmFzIHRlbXB1cywgdGVsbHVzIGVnZXQgY29uZGltZW50dW0gcmhvbmN1cywgc2VtIHF1YW0gc2VtcGVyIGxpYmVybywgc2l0IGFtZXQgYWRpcGlzY2luZyBzZW0gbmVxdWUgc2VkIGlwc3VtLiBOYW0gcXVhbSBudW5jLCBibGFuZGl0IHZlbCwgbHVjdHVzIHB1bHZpbmFyLCBoZW5kcmVyaXQgaWQsIGxvcmVtLiBNYWVjZW5hcyBuZWMgb2RpbyBldCBhbnRlIHRpbmNpZHVudCB0ZW1wdXMuIERvbmVjIHZpdGFlIHNhcGllbiB1dCBsaWJlcm8gdmVuZW5hdGlzIGZhdWNpYnVzLiBOdWxsYW0gcXVpcyBhbnRlLiBFdGlhbSBzaXQgYW1ldCBvcmNpIGVnZXQgZXJvcyBmYXVjaWJ1cyB0aW5jaWR1bnQuIER1aXMgbGVvLiBTZWQgZnJpbmdpbGxhIG1hdXJpcyBzaXQgYW1ldCBuaWJoLiBEb25lYyBzb2RhbGVzIHNhZ2l0dGlzIG1hZ25hLiBTZWQgY29uc2VxdWF0LCBsZW8gZWdldCBiaWJlbmR1bSBzb2RhbGVzLCBhdWd1ZSB2ZWxpdCBjdXJzdXMgbnVuYywnLFxyXG4vLyAgICAgICAgIGxpbms6ICcjJyxcclxuLy8gICAgICAgICBhbW91bnQ6IDAsXHJcbi8vICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHg1MDAnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJzUnLFxyXG4vLyAgICAgICAgIGhlYWRpbmc6ICdUb28gbXVjaCAyJyxcclxuLy8gICAgICAgICBib2R5OiAnTG9yZW1pcHN1bWRvbG9yc2l0YW1ldCxjb25zZWN0ZXR1ZXJhZGlwaXNjaW5nZWxpdEFlbmVhbmNvbW1vZG9saWd1bGFlZ2V0ZG9sb3IuQWVuZWFubWFzc2EuQ3Vtc29jaWlzbmF0b3F1ZXBlbmF0aWJ1c2V0bWFnbmlzZGlzcGFydHVyaWVudG1vbnRlcyxuYXNjZXR1cnJpZGljdWx1c211cycsXHJcbi8vICAgICAgICAgbGluazogJyMnLFxyXG4vLyAgICAgICAgIGFtb3VudDogMCxcclxuLy8gICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAweDEwMCcsXHJcbi8vICAgICB9LFxyXG4vLyBdO1xyXG5cclxuY29uc3QgQ2FyZHMgPSAoe0RhdGEgPSBbe1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgaGVhZGluZzogJ1RpdGxlJyxcclxuICAgICAgICBib2R5OiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbiAgICB9XX0pID0+IHtcclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge0RhdGEubWFwKChwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBtYXJnaW5Cb3R0b209eycxNXB4J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzEyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlIGltZ3NyYz17cHJvcHMuaW1nc3JjfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtwcm9wcy5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3Byb3BzLmJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17cHJvcHMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3Byb3BzLmFtb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCwgQm94LCBMaW5rIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi9DYXJkcyc7XHJcblxyXG4vLyBBZGQgQWlyYm5iIENlcmVhbCBBcHAgZm9udFxyXG5jb25zdCB3ZWJmb250ID0gcmVxdWlyZSgnLi93ZWJmb250L3dlYmZvbnQubW9kdWxlLmNzcycpO1xyXG5cclxuXHJcbmNvbnN0IExpbmtTdHlsZSA9IHN0eWxlZChMaW5rKWBcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBaXJibmIgQ2VyZWFsIEFwcCBNZWRpdW0nO1xyXG4gICAgY29sb3I6IHJnYigxOTQsMTk0LDE4MSk7XHJcbmBcclxuY29uc3QgQm94U3R5bGUgPSBzdHlsZWQoQm94KWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJHsoe3NlbGVjdGVkfSkgPT4gKHNlbGVjdGVkID8gXCJBaXJibmIgQ2VyZWFsIEFwcCBCb2xkXCIgOiBcIkFpcmJuYiBDZXJlYWwgQXBwIE1lZGl1bVwiKX07XHJcbiAgICBjb2xvcjogJHsoe3NlbGVjdGVkfSkgPT4gKHNlbGVjdGVkID8gXCIjN0RBNzUyXCIgOiBcInJnYigxOTQsMTk0LDE4MSlcIil9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoe3NlbGVjdGVkfSkgPT4gKHNlbGVjdGVkID8gXCJyZ2JhKDEyNSwxNjcsODIsMC4yKVwiIDogXCJcIil9O1xyXG5gXHJcblxyXG5jb25zdCBJdGVtcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIGtleTogJzEnLFxyXG4gICAgICAgIHRpdGxlOiAnUHJldmVudGlvbicsXHJcbiAgICAgICAgcG9zdHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdUaXRsZSAxLjEnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rlc2NyaXB0aW9uIDEuMScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDExLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnVGl0bGUgMS4yJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEZXNjcmlwdGlvbiAxLjInLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMixcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4MjAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzInLFxyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRpdGxlOiAnU3ltcHRvbXMnLFxyXG4gICAgICAgIHBvc3RzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnVGl0bGUgMi4xJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEZXNjcmlwdGlvbiAyLjEnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAyMSxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MTAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdUaXRsZSAyLjInLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rlc2NyaXB0aW9uIDIuMicsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDIyLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICBrZXk6ICczJyxcclxuICAgICAgICB0aXRsZTogJ0RpYWdub3NpcycsXHJcbiAgICAgICAgcG9zdHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdUaXRsZSAzLjEnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rlc2NyaXB0aW9uIDMuMScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDMxLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgxMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ1RpdGxlIDMuMicsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnRGVzY3JpcHRpb24gMy4yJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMzIsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDIwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgU2VsZWN0aW9uID0gKHtcclxuICAgICAgICBzZWxlY3RlZEtleT0nMScsIFxyXG4gICAgICAgIGl0ZW1zPUl0ZW1zXHJcbiAgICB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2tleSwgc2V0S2V5XSA9IFJlYWN0LnVzZVN0YXRlKHNlbGVjdGVkS2V5KTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldEtleShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzM3NXB4JyxcclxuICAgICAgICAgICAgICAgIG14OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQzLDIzOSwyMzQpJ1xyXG4gICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgIDxGbGV4IFxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzM0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCAxcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI4cHgnLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94U3R5bGUgd2lkdGg9ezEgLyAzfSBvbkNsaWNrPXsoKT0+aGFuZGxlU2VsZWN0KGkua2V5KX0gc2VsZWN0ZWQ9e2kua2V5ID09PSBrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rU3R5bGU+e2kudGl0bGV9PC9MaW5rU3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtrZXkgPT09IGkua2V5ICYmIDxDYXJkcyBEYXRhPXtpLnBvc3RzfS8+fVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9KX1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJyZWJhc3NcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XHJcblxyXG5cclxuXHJcbmNvbnN0IEl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAga2V5OiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICdQcmV2ZW50aW9uJyxcclxuICAgICAgICBwb3N0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdXZWFyIGEgZmFjZW1hc2snLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ1lvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDUzLFxyXG4gICAgICAgICAgICAgICAgaW1nc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnQXZvaWQgY2xvc2UgY29udGFjdCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEyNyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzInLFxyXG4gICAgICAgIGtleTogJzInLFxyXG4gICAgICAgIHRpdGxlOiAnU3ltcHRvbXMnLFxyXG4gICAgICAgIHBvc3RzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ1dlYXIgYSBmYWNlbWFzayAyJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiA1MyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ0F2b2lkIGNsb3NlIGNvbnRhY3QgMicsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEyNyxcclxuICAgICAgICAgICAgICAgIGltZ3NyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIGtleTogJzMnLFxyXG4gICAgICAgIHRpdGxlOiAnRGlhZ25vc2lzJyxcclxuICAgICAgICBwb3N0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdXZWFyIGEgZmFjZW1hc2sgMycsXHJcbiAgICAgICAgICAgICAgICBib2R5OiAnWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogNTMsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdBdm9pZCBjbG9zZSBjb250YWN0IDMnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ1B1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGUnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMjcsXHJcbiAgICAgICAgICAgICAgICBpbWdzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VsZWN0aW9uIHNlbGVjdGVkS2V5PXtJdGVtc1swXS5rZXl9IGl0ZW1zPXtJdGVtc30vPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWJhc3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==