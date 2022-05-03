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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_App_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App.class */ \"./src/js/App.class.js\");\n\r\nconst app = new _js_App_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\napp.init();\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/AbstractElement.class.js":
/*!*****************************************!*\
  !*** ./src/js/AbstractElement.class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AbstractElement {\r\n\r\n\tcreateElement({ tag, ...options }) {\r\n\t\tthis.DOMelement = document.createElement(tag);\r\n\t\toptions.value ? this.DOMelement.innerHTML = `${options.value}` : this.DOMelement.innerHTML = ``;\r\n\t}\r\n\taddClass(classes) {\r\n\t\tthis.DOMelement.classList.add(classes);\r\n\t}\r\n\r\n\tdrawElement({ container, place, ...options }) {\r\n\t\tcontainer.insertAdjacentElement(`${place}`, this.DOMelement);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractElement);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/AbstractElement.class.js?");

/***/ }),

/***/ "./src/js/App.class.js":
/*!*****************************!*\
  !*** ./src/js/App.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _Keyboard_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard.class.js */ \"./src/js/Keyboard.class.js\");\n/* harmony import */ var _Layout_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.class.js */ \"./src/js/Layout.class.js\");\n\r\n\r\n\r\n\r\nclass App {\r\n\tconstructor() {\r\n\t}\r\n\r\n\tinit() {\r\n\t\tconst layout = new _Layout_class_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\t\tconst keyboard = new _Keyboard_class_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\t\tlayout.draw();\r\n\t\tkeyboard.draw();\r\n\t}\r\n\r\n\tfinish() {\r\n\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/App.class.js?");

/***/ }),

/***/ "./src/js/Keyboard.class.js":
/*!**********************************!*\
  !*** ./src/js/Keyboard.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nclass Keyboard extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.createElement({ tag: 'div' });\r\n\t\tthis.addClass('keyboard');\r\n\t}\r\n\tdraw() {\r\n\t\t\r\n\t\tconst container = _constants__WEBPACK_IMPORTED_MODULE_1__.body.querySelector('.container');\r\n\t\tif (container) { this.drawElement({ container: container, place: `beforeend` }); }\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Keyboard.class.js?");

/***/ }),

/***/ "./src/js/Layout.class.js":
/*!********************************!*\
  !*** ./src/js/Layout.class.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nclass Layout extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.createElement({tag: 'main', value: `\r\n\t\t<div class=\"container\">\r\n\t\t<h1 class=\"title\">Virtual Keyboard</h1>\r\n\t\t<p class=\"info\">Information</p>\r\n\t\t<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" className=\"textarea\"\t\r\n\t\tautocomplete= \"off\" autofocus readonly placeholder= 'Enter text...'></textarea>\r\n\t\t</div>\r\n\t\t\r\n\t\t`});\t\r\n\t\tthis.addClass('layout');\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tthis.drawElement({container: _constants__WEBPACK_IMPORTED_MODULE_1__.body, place: 'afterbegin'});\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Layout.class.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ENG\": () => (/* binding */ ENG),\n/* harmony export */   \"RUS\": () => (/* binding */ RUS),\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"rowFive\": () => (/* binding */ rowFive),\n/* harmony export */   \"rowFour\": () => (/* binding */ rowFour),\n/* harmony export */   \"rowOne\": () => (/* binding */ rowOne),\n/* harmony export */   \"rowThree\": () => (/* binding */ rowThree),\n/* harmony export */   \"rowTwo\": () => (/* binding */ rowTwo)\n/* harmony export */ });\n// Row #1 on the keyboard\r\nconst rowOne = [{\r\n\tkeyEng: '`', keyRus: 'ё', name: 'Backquote', type: 'letter',\r\n },\r\n { key: '1', name: 'Digit1', type: 'digit' },\r\n { key: '2', name: 'Digit2', type: 'letter' },\r\n { key: '3', name: 'Digit3', type: 'letter' },\r\n { key: '4', name: 'Digit4', type: 'letter' },\r\n { key: '5', name: 'Digit5', type: 'letter' },\r\n { key: '6', name: 'Digit6', type: 'letter' },\r\n { key: '7', name: 'Digit7', type: 'letter' },\r\n { key: '8', name: 'Digit8', type: 'letter' },\r\n { key: '9', name: 'Digit9', type: 'letter' },\r\n { key: '0', name: 'Digit0', type: 'letter' },\r\n { key: '-', name: 'Minus', type: 'letter' },\r\n { key: '=', name: 'Equal', type: 'letter' },\r\n { key: 'Backspace', name: 'Backspace', type: 'control' },\r\n ];\r\n // Row #2 on the keyboard\r\n const rowTwo = [{ key: 'Tab', name: 'Tab', type: 'control' },\r\n {\r\n\tkeyEng: 'q', keyRus: 'й', name: 'KeyQ', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'w', keyRus: 'ц', name: 'KeyW', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'e', keyRus: 'у', name: 'KeyE', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'r', keyRus: 'к', name: 'KeyR', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 't', keyRus: 'е', name: 'KeyT', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'y', keyRus: 'н', name: 'KeyY', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'u', keyRus: 'г', name: 'KeyU', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'i', keyRus: 'ш', name: 'KeyI', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'o', keyRus: 'щ', name: 'KeyO', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'p', keyRus: 'з', name: 'KeyP', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: '[', keyRus: 'х', name: 'BracketLeft', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: ']', keyRus: 'ъ', name: 'BracketRight', type: 'letter',\r\n },\r\n { key: '\\\\', name: 'Backslash', type: 'symbol' },\r\n ];\r\n // Row #3 on the keyboard\r\n const rowThree = [{ key: 'CapsLock', name: 'CapsLock', type: 'control' },\r\n {\r\n\tkeyEng: 'a', keyRus: 'ф', name: 'KeyA', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 's', keyRus: 'ы', name: 'KeyS', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'd', keyRus: 'в', name: 'KeyD', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'f', keyRus: 'а', name: 'KeyF', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'g', keyRus: 'п', name: 'KeyG', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'h', keyRus: 'р', name: 'KeyH', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'j', keyRus: 'о', name: 'KeyJ', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'k', keyRus: 'л', name: 'KeyK', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'l', keyRus: 'д', name: 'KeyL', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: ';', keyRus: 'ж', name: 'Semicolon', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: '\\'', keyRus: 'э', name: 'Quote', type: 'letter',\r\n },\r\n { key: 'Enter', name: 'Enter', type: 'control' },\r\n ];\r\n // Row #4 on the keyboard\r\n const rowFour = [{ key: 'Shift', name: 'ShiftLeft', type: 'control' },\r\n {\r\n\tkeyEng: 'z', keyRus: 'я', name: 'KeyZ', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'x', keyRus: 'ч', name: 'KeyX', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'c', keyRus: 'с', name: 'KeyC', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'v', keyRus: 'м', name: 'KeyV', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'b', keyRus: 'и', name: 'KeyB', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'n', keyRus: 'т', name: 'KeyN', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: 'm', keyRus: 'ь', name: 'KeyM', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: ',', keyRus: 'б', name: 'Comma', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: '.', keyRus: 'ю', name: 'Period', type: 'letter',\r\n },\r\n {\r\n\tkeyEng: '/', keyRus: '.', name: 'Slash', type: 'letter',\r\n },\r\n { key: '&#9650;', name: 'ArrowUp', type: 'control' },\r\n { key: 'Shift', name: 'ShiftRight', type: 'control' },\r\n ];\r\n // Row #5 on the keyboard\r\n const rowFive = [\r\n\t{ key: 'Ctrl', name: 'w', type: 'control' },\r\n\t{ key: 'Win', name: 'MetaLeft', type: 'control' },\r\n\t{ key: 'Alt', name: 'AltLeft', type: 'control' },\r\n\t{ key: '', name: 'Space', type: 'control' },\r\n\t{ key: 'Alt', name: 'AltRight', type: 'control' },\r\n\t{ key: 'Ctrl', name: 'ControlRight', type: 'control' },\r\n\t{ key: '&#9668;', name: 'ArrowLeft', type: 'control' },\r\n\t{ key: '&#9660;', name: 'ArrowDown', type: 'control' },\r\n\t{ key: '&#9658;', name: 'ArrowRight', type: 'control' },\r\n ];\r\n\r\n //languages\r\n\r\n const ENG = 'eng';\r\n const RUS = 'ru';\r\n const body = document.querySelector('body');\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n\r\n\r\nconst state = {\r\n\tlang: localStorage.getItem('lang') || _constants_js__WEBPACK_IMPORTED_MODULE_0__.ENG,\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/state.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;