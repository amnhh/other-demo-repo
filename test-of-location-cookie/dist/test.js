var LC =
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
/***/ (function(module, exports) {

var LC =
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
/******/ 	__webpack_require__.p = "js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constant = __webpack_require__(2);

var _localstorage = __webpack_require__(3);

var _localstorage2 = _interopRequireDefault(_localstorage);

var _cookie = __webpack_require__(4);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * noop func
 */
var noop = function noop() {};

/**
 * Init.
 */
var LocalstorageToCookie = Object.create(null);

/**
 * Init apis.
 */
var apiList = ['get', 'set', 'remove', 'clear'];

apiList.map(function (val) {
  LocalstorageToCookie[val] = noop;
});

// If we can use localstorage
if (_constant.canUseLocalstorage) {
  (0, _localstorage2.default)(LocalstorageToCookie);
} else {
  (0, _cookie2.default)(LocalstorageToCookie);
}

// export
module.exports = LocalstorageToCookie;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @Author : Amnhh
 * 
 * Constant Module.
 */

/**
 * Can I use localstroage?
 */
var canUseLocalstorage = exports.canUseLocalstorage = (typeof localStorage === 'undefined' ? 'undefined' : _typeof(localStorage)) === 'object';

/**
 * Can I use cookie?
 */
var canUseCookie = exports.canUseCookie = document && document.navigator && document.navigator.cookieEnabled;

/**
 * Match cookies' key.
 */
var rCookieSelect = exports.rCookieSelect = /[^ =;]+(?=\=)/g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(5);

function MixinLocalstorage(_store) {

  // Get the native localstorage.
  var storage = window['localStorage'];

  /**
   * Get item.
   */
  _store.get = function (key) {
    return (0, _util.deserialize)(storage.getItem(key));
  };

  /**
   * Set item.
   */
  _store.set = function (key, value) {

    // If value is null, just remove the item.
    if (value == null) {
      return _store.remove(key);
    }

    storage.setItem(key, (0, _util.serialize)(value));
  };

  /**
   * Clear.
   */
  _store.clear = function () {
    storage.clear();
  };

  /**
   * Remove item.
   */
  _store.remove = function (key) {
    storage.removeItem(key);
  };
};

exports.default = MixinLocalstorage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(5);

var _constant = __webpack_require__(2);

var initialTime = new Date(0).toUTCString();

function MixinCookie(_store) {
  var cookie = document && document.cookie;

  /**
   * Clear cookies.
   */
  _store.clear = function () {
    var keys = cookie.match(_constant.rCookieSelect);

    keys.map(function (val) {
      _store.remove(val);
    });
  };

  /**
   * Get cookies.
   */
  _store.get = function (name) {
    var rGetCookie = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    var arr = cookie.match(rGetCookie);

    if (arr) {
      return decodeURIComponent(arr[2]);
    } else {
      return null;
    }
  };

  /**
   * Remove item.
   */
  _store.remove = function (name) {
    document.cookie = name + '=; expires=' + initialTime;
  };

  /**
   * Set item.
   */
  _store.set = function (name, value) {
    if (value == null) {
      _store.remove(name);
    }

    // Get the time.
    var date = new Date();
    date.setTime(date.getTime() + 10e7);

    document.cookie = name + '=' + value + ';expires=' + expdate;
  };
}

exports.default = MixinCookie;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Serialize data.
 * @param {*} val 
 */
var serialize = exports.serialize = function serialize(val) {
  return JSON.stringify(val);
};

/**
 * Deserialize data.
 * @param {*} val 
 */
var deserialize = exports.deserialize = function deserialize(val) {

  // If the val is not a string, return.
  if (typeof val !== 'string') {
    return void 0;
  }

  // We can't use `JSON.parse(undefined)`.
  val = val || null;

  return JSON.parse(val);
};

/***/ })
/******/ ]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var a = __webpack_require__(0);

module.exports = a;

/***/ })
/******/ ]);