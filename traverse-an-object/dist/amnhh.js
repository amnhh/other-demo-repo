/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// for in 把所有可枚举的都搞到了, 但是要看下原型链上的。。。
/* harmony default export */ __webpack_exports__["a"] = (function (_obj) {
  var ret = [];

  for (var i in _obj) {
    ret.push(i);
  }

  return ret;
});;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_for_in__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_object_keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_get_own_property_names__ = __webpack_require__(3);






var obj = {
  amnhh1 : 1,
  amnhh2 : 2,
  amnhh3 : 3,
  amnhh4 : 4
};

var son = Object.create(obj);

son.again1 = 1;
son.again2 = 2;
son.again3 = 3;
son.again4 = 4;

var enumerableFalseObject = {
  amnhh1 : 1,
  amnhh2 : 2,
  amnhh3 : 3,
  amnhh4 : 4
};

// 手动置为不可枚举
Object.defineProperty(enumerableFalseObject, 'amnhh1', {
  enumerable : false,
});


/* for-in */
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_for_in__["a" /* default */])(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]
 
// 原型链上的也一样会被搞出来
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_for_in__["a" /* default */])(son)); // ["again1", "again2", "again3", "again4", "amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 不可枚举的属性不能被搞出来
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_for_in__["a" /* default */])(enumerableFalseObject)); // ["amnhh2", "amnhh3", "amnhh4"]

/* Object.keys */
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_object_keys__["a" /* default */])(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 只会跑出来自身上挂着的
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_object_keys__["a" /* default */])(son)); // ["again1", "again2", "again3", "again4"]

// 不可枚举的属性不能被 Object.keys 搞出来
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_object_keys__["a" /* default */])(enumerableFalseObject)); // ["amnhh2", "amnhh3", "amnhh4"]

/* Object.getOwnPropertyNames */
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_get_own_property_names__["a" /* default */])(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 原型链上不会被遍历出来
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_get_own_property_names__["a" /* default */])(son)); // ["again1", "again2", "again3", "again4"]

// 自身不可枚举的属性也会被遍历出来
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_get_own_property_names__["a" /* default */])(enumerableFalseObject)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_obj) {
  return Object.keys(_obj);
});;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_obj) {
  return Object.getOwnPropertyNames(_obj);
});;

/***/ })
/******/ ]);