/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/contentModule.js":
/*!*****************************************!*\
  !*** ./src/javascript/contentModule.js ***!
  \*****************************************/
/*! exports provided: errorContent, weatherContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorContent\", function() { return errorContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherContent\", function() { return weatherContent; });\nconst errorContent = city => `<p id=\"loading\">Sorry! The weather data for ${city} is not available, try again later.</p>`;\nconst weatherContent = (response, city) => {\n  const {\n    weather, tempF,\n  } = response.ob;\n  const { lat, long } = response.loc;\n  return `<p class=\"header\">\n  Location: <span>${city}</span>\n</p>\n<p>            \n  Lat: <span>${lat}</span>\n</p>\n<p>\n  Long: <span>${long}</span>\n</p>\n<p class=\"description\">\n  <p>Weather: <span>${weather.toLowerCase()}</span></p>\n  <p>Temperature: <span id=\"temp-holder\">${tempF}&#8457;</span> <button id=\"temp-button\">&#8457; / &#8451;</button></p>            \n</p>`;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/contentModule.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherModule */ \"./src/javascript/weatherModule.js\");\n/* harmony import */ var _weatherDomModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherDomModule */ \"./src/javascript/weatherDomModule.js\");\n\n\n\nconst form = document.querySelector('div[weather] #weather-form');\n\nform.addEventListener('submit', (event) => {\n  const city = document.querySelector('div[weather] form > input[name=\"city\"]').value.toLowerCase();\n  const country = document.querySelector('div[weather] form > input[name=\"country\"]').value.toLowerCase();\n  _weatherDomModule__WEBPACK_IMPORTED_MODULE_1__[\"DomModule\"].dataLoading(city);\n  _weatherModule__WEBPACK_IMPORTED_MODULE_0__[\"WeatherModule\"].fetchWeather(city, country);\n  form.reset();\n  event.preventDefault();\n});\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/temperatureChangeModule.js":
/*!***************************************************!*\
  !*** ./src/javascript/temperatureChangeModule.js ***!
  \***************************************************/
/*! exports provided: tempButtonFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempButtonFunction\", function() { return tempButtonFunction; });\n/* harmony import */ var _weatherDomModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDomModule */ \"./src/javascript/weatherDomModule.js\");\n\n\nconst tempButtonFunction = () => {\n  const tempButton = document.querySelector('#temp-button');\n  const tempHolder = document.querySelector('#temp-holder');\n  const [tempF, tempC] = _weatherDomModule__WEBPACK_IMPORTED_MODULE_0__[\"DomModule\"].tempArray;\n  let tempCount = 1;\n\n  tempButton.addEventListener('click', (e) => {\n    if (tempCount % 2 === 0) {\n      tempHolder.innerHTML = tempF;\n    } else {\n      tempHolder.innerHTML = tempC;\n    }\n    tempCount += 1;\n    e.preventDefault();\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/temperatureChangeModule.js?");

/***/ }),

/***/ "./src/javascript/weatherDomModule.js":
/*!********************************************!*\
  !*** ./src/javascript/weatherDomModule.js ***!
  \********************************************/
/*! exports provided: DomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DomModule\", function() { return DomModule; });\n/* harmony import */ var _contentModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentModule */ \"./src/javascript/contentModule.js\");\n/* harmony import */ var _temperatureChangeModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperatureChangeModule */ \"./src/javascript/temperatureChangeModule.js\");\n\n\n\nconst container = document.querySelector('div[weather] .content');\n\nconst DomModule = (() => {\n  const mod = {};\n  mod.tempArray = [];\n  mod.loadWeather = (response, city) => {\n    const location = document.createElement('div');\n    const img = document.createElement('img');\n    const data = response.response;\n    const content = Object(_contentModule__WEBPACK_IMPORTED_MODULE_0__[\"weatherContent\"])(data, city);\n    const {\n      tempF, tempC, icon,\n    } = response.response.ob;\n\n    DomModule.tempArray = [`${tempF}&#8457;`, `${tempC}&#8451;`];\n\n    location.classList.add('location');\n    location.innerHTML = content;\n    img.setAttribute('src', `https://cdn.aerisapi.com/wxicons/v2/${icon}`);\n    img.setAttribute('alt', 'weather-icon');\n    container.innerHTML = '';\n    container.appendChild(location);\n    container.appendChild(img);\n    Object(_temperatureChangeModule__WEBPACK_IMPORTED_MODULE_1__[\"tempButtonFunction\"])();\n  };\n\n  mod.errorReport = (city) => {\n    container.innerHTML = Object(_contentModule__WEBPACK_IMPORTED_MODULE_0__[\"errorContent\"])(city);\n  };\n\n  mod.dataLoading = (city) => {\n    container.innerHTML = `<p id=\"loading\">Loading... data for ${city}!</p>`;\n  };\n\n  return mod;\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/weatherDomModule.js?");

/***/ }),

/***/ "./src/javascript/weatherModule.js":
/*!*****************************************!*\
  !*** ./src/javascript/weatherModule.js ***!
  \*****************************************/
/*! exports provided: WeatherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherModule\", function() { return WeatherModule; });\n/* harmony import */ var _weatherDomModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDomModule */ \"./src/javascript/weatherDomModule.js\");\n\n\nconst WeatherModule = (() => {\n  const mod = {};\n\n  mod.fetchWeather = (city, country) => {\n    const url = `https://api.aerisapi.com/observations/${city},${country}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;\n    return fetch(url, { mode: 'cors' })\n      .then(response => response.json())\n      .then(response => _weatherDomModule__WEBPACK_IMPORTED_MODULE_0__[\"DomModule\"].loadWeather(response, city))\n      .catch(() => {\n        _weatherDomModule__WEBPACK_IMPORTED_MODULE_0__[\"DomModule\"].errorReport(city);\n      });\n  };\n\n  return mod;\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/weatherModule.js?");

/***/ })

/******/ });