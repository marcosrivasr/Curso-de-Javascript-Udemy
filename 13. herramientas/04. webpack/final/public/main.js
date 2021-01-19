/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.js */ \"./src/post.js\");\nvar _post$reaction, _post$reaction$newLik, _post$reaction2;\n\n\nvar post = new _post_js__WEBPACK_IMPORTED_MODULE_0__.Post('Hola a todos'); //post.reaction.newLike();\n\nif (post.reaction) {\n  console.log(post.reaction.newLike());\n} else {\n  console.log('No existe el método reaction');\n}\n\nconsole.log((_post$reaction = post.reaction) === null || _post$reaction === void 0 ? void 0 : _post$reaction.newLike());\nconsole.log((_post$reaction$newLik = (_post$reaction2 = post.reaction) === null || _post$reaction2 === void 0 ? void 0 : _post$reaction2.newLike()) !== null && _post$reaction$newLik !== void 0 ? _post$reaction$newLik : 'No existe el método reaction');\n\n//# sourceURL=webpack://webpack-final/./src/main.js?");

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => /* binding */ Post\n/* harmony export */ });\n/* harmony import */ var _reaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reaction.js */ \"./src/reaction.js\");\n\nfunction Post(texto) {\n  this.texto = texto;\n  if (this.texto) this.reaction = new _reaction_js__WEBPACK_IMPORTED_MODULE_0__.Reaction();\n\n  this.getJSON = function () {\n    return this.texto === undefined ? null : {\n      texto: this.texto\n    };\n  };\n}\n\n//# sourceURL=webpack://webpack-final/./src/post.js?");

/***/ }),

/***/ "./src/reaction.js":
/*!*************************!*\
  !*** ./src/reaction.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Reaction\": () => /* binding */ Reaction\n/* harmony export */ });\nfunction Reaction() {\n  this.likes = 0;\n\n  this.newLike = function () {\n    this.likes++;\n    return this.likes;\n  };\n}\n\n//# sourceURL=webpack://webpack-final/./src/reaction.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;