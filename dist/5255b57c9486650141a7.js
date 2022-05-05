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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/styles/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_App_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App.class */ \"./src/js/App.class.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\r\n\r\nconst app = new _js_App_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\napp.init();\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/AbstractElement.class.js":
/*!*****************************************!*\
  !*** ./src/js/AbstractElement.class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AbstractElement {\r\n\r\n\tcreateElement({ tag, ...options }) {\r\n\t\tthis.DOMelement = document.createElement(tag);\r\n\t\toptions.value ? this.DOMelement.innerHTML = `${options.value}` : this.DOMelement.innerHTML = ``;\r\n\t\tif (options.attributes){\t\t\t\r\n\t\t\tfor (let key in options.attributes){\t\t\t\t\r\n\t\t\t\tthis.DOMelement.setAttribute(key, options.attributes[key])\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\taddClass(classes) {\r\n\t\tthis.DOMelement.classList.add(classes);\r\n\t}\r\n\r\n\tdrawElement({ container, place, ...options }) {\r\n\t\tcontainer.insertAdjacentElement(`${place}`, this.DOMelement);\r\n\t}\r\n\r\n\taddListener(event, handler) {\r\n\t\t\r\n\t\tthis.DOMelement.addEventListener(event, (e) => handler(e));\r\n\t}\r\n\r\n\taddDataAttributes({type, value}){\r\n\t\tthis.DOMelement.dataset[type] = value;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractElement);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/AbstractElement.class.js?");

/***/ }),

/***/ "./src/js/App.class.js":
/*!*****************************!*\
  !*** ./src/js/App.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _Keyboard_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard.class.js */ \"./src/js/Keyboard.class.js\");\n/* harmony import */ var _Layout_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.class.js */ \"./src/js/Layout.class.js\");\n/* harmony import */ var _Textarea_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Textarea.class */ \"./src/js/Textarea.class.js\");\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n\tconstructor() {\r\n\t}\r\n\r\n\tinit() {\r\n\t\tconst layout = new _Layout_class_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\t\tconst keyboard = new _Keyboard_class_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\t\tconst textarea = new _Textarea_class__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n\t\t_state_js__WEBPACK_IMPORTED_MODULE_1__.state.textarea = textarea;\r\n\t\tlayout.draw();\r\n\t\ttextarea.draw();\r\n\t\tkeyboard.draw();\r\n\r\n\t\tkeyboard.fillWithKeys();\r\n\r\n\t}\r\n\r\n\tfinish() {\r\n\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/App.class.js?");

/***/ }),

/***/ "./src/js/Key.class.js":
/*!*****************************!*\
  !*** ./src/js/Key.class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\n\r\nclass Key extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\tconstructor({value, type, ...options}){\r\n\t\tsuper()\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_2__.state[\"case\"] === _constants__WEBPACK_IMPORTED_MODULE_1__.LOWER ? this.createElement({ tag: 'button',valueEng: value.toLowerCase() }) : this.createElement({ tag: 'button',valueEng: value.toUpperCase() });\r\n\t\tthis.addClass('key');\r\n\t\tthis.addDataAttributes({type: 'value', value});\r\n\t\tthis.addDataAttributes({type: 'type', valueEng: type});\r\n\t}\r\n\r\n\tdraw({container, place}){\t\t\r\n\t\t\r\n\t\tif (container) { this.drawElement({ container, place}); }\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Key.class.js?");

/***/ }),

/***/ "./src/js/Keyboard.class.js":
/*!**********************************!*\
  !*** ./src/js/Keyboard.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _Key_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Key.class */ \"./src/js/Key.class.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\n\r\nclass Keyboard extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.createElement({ tag: 'div' });\r\n\t\tthis.addClass('keyboard');\r\n\t\tthis.addListener('click', this.handleClickEvent.bind(this));\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.subscribe({ type: 'rerender-keyboard', function: this.rerenderKeyboard.bind(this) });\r\n\t}\r\n\tdraw() {\r\n\t\tconst container = _constants__WEBPACK_IMPORTED_MODULE_1__.body.querySelector('.main__inner');\r\n\t\tif (container) { this.drawElement({ container: container, place: `beforeend` }); }\r\n\t}\r\n\tfillWithKeys() {\r\n\t\tconst keyboard = document.querySelector('.keyboard');\r\n\t\tconst rows = [_constants__WEBPACK_IMPORTED_MODULE_1__.rowOne, _constants__WEBPACK_IMPORTED_MODULE_1__.rowTwo, _constants__WEBPACK_IMPORTED_MODULE_1__.rowThree, _constants__WEBPACK_IMPORTED_MODULE_1__.rowFour, _constants__WEBPACK_IMPORTED_MODULE_1__.rowFive];\r\n\t\trows.forEach(row => {\r\n\t\t\tconst rowDiv = document.createElement('div');\r\n\t\t\trowDiv.classList.add('row');\r\n\t\t\tkeyboard.insertAdjacentElement('beforeend', rowDiv);\r\n\t\t\trow.map((k) => {\r\n\t\t\t\tconst key = new _Key_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](k);\r\n\t\t\t\tkey.draw({ container: rowDiv, place: 'beforeend' });\r\n\t\t\t})\r\n\t\t});\r\n\r\n\r\n\t\t// rowTwo.map((k) => {\r\n\t\t// \tconst key = new Key(k);\r\n\r\n\t\t// \tkey.draw();\r\n\t\t// })\r\n\t\t// rowThree.map((k) => {\r\n\t\t// \tconst key = new Key(k);\r\n\r\n\t\t// \tkey.draw();\r\n\t\t// })\r\n\t}\r\n\r\n\thandleClickEvent(e) {\r\n\t\tlet key = e.target.closest('.key');\r\n\t\tif (!key) return;\r\n\t\tswitch (key.dataset.type) {\r\n\t\t\tcase 'char':\r\n\t\t\t\tthis.handleCharInsert(key.dataset.value);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'backspace':\r\n\t\t\t\tthis.handleBackspace();\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'tab':\r\n\t\t\t\tthis.handleTab();\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'capslock':\r\n\t\t\t\tthis.handleCapslock(key);\r\n\t\t\t\tbreak;\r\n\t\t\t\tcase 'enter':\r\n\t\t\t\t\tthis.handleEnter();\r\n\t\t\t\t\tbreak;\r\n\t\t}\r\n\r\n\t}\r\n\thandleCharInsert(value) {\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}${_state__WEBPACK_IMPORTED_MODULE_3__.state[\"case\"] === _constants__WEBPACK_IMPORTED_MODULE_1__.LOWER ? value.toLowerCase() : value.toUpperCase()\r\n\t\t\t}${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}`);\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changePointerStartPosition(++_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition);\r\n\t}\r\n\thandleEnter() {\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}\\n${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}`);\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changePointerStartPosition(++_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition);\r\n\t}\r\n\thandleBackspace() {\r\n\t\tif (_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition - 1 >= 0) {\r\n\t\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition - 1)}${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}`);\r\n\t\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changePointerStartPosition(--_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition);\r\n\t\t}\r\n\t\telse {\r\n\t\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition);\r\n\t\t}\r\n\t}\r\n\r\n\thandleTab() {\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}   ${_state__WEBPACK_IMPORTED_MODULE_3__.state.textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition)}`);\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__.state.pointerStartPosition + 3);\r\n\t}\r\n\thandleCapslock(key) {\r\n\t\tkey.classList.add('active');\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_3__.state.changeCase();\r\n\t}\r\n\tcleanKeyboard() {\r\n\t\tthis.DOMelement.innerHTML = '';\r\n\t}\r\n\trerenderKeyboard() {\r\n\t\tthis.cleanKeyboard()\r\n\t\tthis.fillWithKeys();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Keyboard.class.js?");

/***/ }),

/***/ "./src/js/Layout.class.js":
/*!********************************!*\
  !*** ./src/js/Layout.class.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nclass Layout extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.createElement({\r\n\t\t\ttag: 'main', valueEng: `\r\n\t\t<div class=\"container\">\r\n\t\t<div class=\"main__inner\">\r\n\t\t<h1 class=\"title\">Virtual Keyboard</h1>\r\n\t\t<p class=\"info\">Information</p>\r\n\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t`});\r\n\t\tthis.addClass('main');\r\n\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tthis.drawElement({ container: _constants__WEBPACK_IMPORTED_MODULE_1__.body, place: 'afterbegin' });\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Layout.class.js?");

/***/ }),

/***/ "./src/js/Textarea.class.js":
/*!**********************************!*\
  !*** ./src/js/Textarea.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\nclass Textarea extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper()\r\n\t\tthis.createElement({\r\n\t\t\ttag: 'textarea',\r\n\t\t\tattributes: {\r\n\t\t\t\tname: \"textarea\", cols: \"30\", rows: \"10\",\r\n\t\t\t\tautocomplete: \"off\", autofocus: 'true', placeholder: 'Enter text...',\r\n\t\t\t},\r\n\t\t\tvalueEng: _state__WEBPACK_IMPORTED_MODULE_2__.state.textareaValue\r\n\t\t});\r\n\t\tthis.addClass('textarea');\r\n\t\tthis.DOMelement.focus();\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_2__.state.subscribe({type: 'rerender-textarea', function: this.rerenderTextarea.bind(this)});\r\n\t\tthis.addListener('click', this.clickHandler.bind(this));\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tconst mainInner = _constants__WEBPACK_IMPORTED_MODULE_1__.body.querySelector('.main__inner');\r\n\t\tif (mainInner) { this.drawElement({ container: mainInner, place: `beforeend` }); }\r\n\t}\r\n\trerenderTextarea() {\r\n\t\tthis.DOMelement.value = _state__WEBPACK_IMPORTED_MODULE_2__.state.textareaValue;\r\n\t\tthis.DOMelement.selectionStart = _state__WEBPACK_IMPORTED_MODULE_2__.state.pointerStartPosition;\r\n\t\tthis.DOMelement.selectionEnd = _state__WEBPACK_IMPORTED_MODULE_2__.state.pointerStartPosition;\r\n\t\tconsole.log(`Before focus() ${this.DOMelement.selectionStart}`);\r\n\t\tthis.DOMelement.focus();\r\n\t\tconsole.log(`After focus() ${this.DOMelement.selectionStart}`);\r\n\r\n\t}\r\n\r\n\tclickHandler(e) {\r\n\t\t// console.log(e)\r\n\t\t// console.log(this.DOMelement.selectionEnd)\r\n\t\t// console.log(this.DOMelement.selectionStart)\r\n\t\t_state__WEBPACK_IMPORTED_MODULE_2__.state.changePointerStartPosition(this.DOMelement.selectionStart);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Textarea.class.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ENG\": () => (/* binding */ ENG),\n/* harmony export */   \"LOWER\": () => (/* binding */ LOWER),\n/* harmony export */   \"RUS\": () => (/* binding */ RUS),\n/* harmony export */   \"UPPER\": () => (/* binding */ UPPER),\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"rowFive\": () => (/* binding */ rowFive),\n/* harmony export */   \"rowFour\": () => (/* binding */ rowFour),\n/* harmony export */   \"rowOne\": () => (/* binding */ rowOne),\n/* harmony export */   \"rowThree\": () => (/* binding */ rowThree),\n/* harmony export */   \"rowTwo\": () => (/* binding */ rowTwo)\n/* harmony export */ });\n// Row #1 on the keyboard\r\nconst rowOne = [\r\n\t{ valueEng: '`', type: 'char' },\r\n\t{ valueEng: '1', type: 'char' },\r\n\t{ valueEng: '2', type: 'char' },\r\n\t{ valueEng: '3', type: 'char' },\r\n\t{ valueEng: '4', type: 'char' },\r\n\t{ valueEng: '5', type: 'char' },\r\n\t{ valueEng: '6', type: 'char' },\r\n\t{ valueEng: '7', type: 'char' },\r\n\t{ valueEng: '8', type: 'char' },\r\n\t{ valueEng: '9', type: 'char' },\r\n\t{ valueEng: '0', type: 'char' },\r\n\t{ valueEng: '-', type: 'char' },\r\n\t{ valueEng: '=', type: 'char' },\r\n\t{ valueEng: 'Backspace', type: 'backspace' }\r\n];\r\n\r\nconst rowTwo = [\r\n\t{ valueEng: 'Tab', type: 'tab' },\r\n\t{ valueEng: 'q', type: 'char' },\r\n\t{ valueEng: 'w', type: 'char' },\r\n\t{ valueEng: 'e', type: 'char' },\r\n\t{ valueEng: 'r', type: 'char' },\r\n\t{ valueEng: 't', type: 'char' },\r\n\t{ valueEng: 'y', type: 'char' },\r\n\t{ valueEng: 'u', type: 'char' },\r\n\t{ valueEng: 'i', type: 'char' },\r\n\t{ valueEng: 'o', type: 'char' },\r\n\t{ valueEng: 'p', type: 'char' },\r\n\t{ valueEng: '[', type: 'char' },\r\n\t{ valueEng: ']', type: 'char' },\r\n\t{ valueEng: '\\\\', type: 'char' }\r\n];\r\n\r\n// Row #3 on the keyboard\r\nconst rowThree = [\r\n\t{ valueEng: 'CapsLock', type: 'capslock' },\r\n\t{ valueEng: 'a', type: 'char' },\r\n\t{ valueEng: 's', type: 'char' },\r\n\t{ valueEng: 'd', type: 'char' },\r\n\t{ valueEng: 'f', type: 'char' },\r\n\t{ valueEng: 'g', type: 'char' },\r\n\t{ valueEng: 'h', type: 'char' },\r\n\t{ valueEng: 'j', type: 'char' },\r\n\t{ valueEng: 'k', type: 'char' },\r\n\t{ valueEng: 'l', type: 'char' },\r\n\t{ valueEng: ';', type: 'char' },\r\n\t{ valueEng: '\\'', type: 'char' },\r\n\t{ valueEng: 'Enter', type: 'enter' }\r\n];\r\n\r\n// Row #4 on the keyboard\r\nconst rowFour = [\r\n\t{ valueEng: 'Shift', type: 'shift' },\r\n\t{ valueEng: 'z', type: 'char' },\r\n\t{ valueEng: 'x', type: 'char' },\r\n\t{ valueEng: 'c', type: 'char' },\r\n\t{ valueEng: 'v', type: 'char' },\r\n\t{ valueEng: 'b', type: 'char' },\r\n\t{ valueEng: 'n', type: 'char' },\r\n\t{ valueEng: 'm', type: 'char' },\r\n\t{ valueEng: ',', type: 'char' },\r\n\t{ valueEng: '.', type: 'char' },\r\n\t{ valueEng: '/', type: 'char' },\r\n\t{ valueEng: '&#9650;', type: 'arrow' },\r\n\t{ valueEng: 'Sh', type: 'shift_right' }\r\n];\r\n\r\n// Row #5 on the keyboard\r\nconst rowFive = [\r\n\t{ valueEng: 'Ctrl', type: 'ctrl' },\r\n\t{ valueEng: 'Alt', type: 'alt' },\r\n\t{ valueEng: 'Space', type: 'space' },\r\n\t{ valueEng: 'Alt', type: 'alt' },\r\n\t{ valueEng: 'Ctrl', type: 'ctrl' },\r\n\t{ valueEng: '&#9668;', type: 'arrow' },\r\n\t{ valueEng: '&#9660;', type: 'arrow' },\r\n\t{ valueEng: '&#9658;', type: 'arrow' },\r\n\r\n];\r\n// Row #1 on the keyboard\r\n// export const rowOne = [\r\n// \t{ key: '`', keyRus: 'ё', name: 'Backquote', type: 'letter' },\r\n// \t{ key: '1', name: 'Digit1', type: 'digit' },\r\n// \t{ key: '2', name: 'Digit2', type: 'letter' },\r\n// \t{ key: '3', name: 'Digit3', type: 'letter' },\r\n// \t{ key: '4', name: 'Digit4', type: 'letter' },\r\n// \t{ key: '5', name: 'Digit5', type: 'letter' },\r\n// \t{ key: '6', name: 'Digit6', type: 'letter' },\r\n// \t{ key: '7', name: 'Digit7', type: 'letter' },\r\n// \t{ key: '8', name: 'Digit8', type: 'letter' },\r\n// \t{ key: '9', name: 'Digit9', type: 'letter' },\r\n// \t{ key: '0', name: 'Digit0', type: 'letter' },\r\n// \t{ key: '-', name: 'Minus', type: 'letter' },\r\n// \t{ key: '=', name: 'Equal', type: 'letter' },\r\n// \t{ key: 'Backspace', name: 'Backspace', type: 'control' },\r\n// ];\r\n// Row #2 on the keyboard\r\n// export const rowTwo = [{ key: 'Tab', name: 'Tab', type: 'control' },\r\n// {\r\n// \tkeyEng: 'q', keyRus: 'й', name: 'KeyQ', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'w', keyRus: 'ц', name: 'KeyW', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'e', keyRus: 'у', name: 'KeyE', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'r', keyRus: 'к', name: 'KeyR', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 't', keyRus: 'е', name: 'KeyT', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'y', keyRus: 'н', name: 'KeyY', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'u', keyRus: 'г', name: 'KeyU', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'i', keyRus: 'ш', name: 'KeyI', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'o', keyRus: 'щ', name: 'KeyO', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'p', keyRus: 'з', name: 'KeyP', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: '[', keyRus: 'х', name: 'BracketLeft', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: ']', keyRus: 'ъ', name: 'BracketRight', type: 'letter',\r\n// },\r\n// { key: '\\\\', name: 'Backslash', type: 'symbol' },\r\n// ];\r\n// Row #3 on the keyboard\r\n// export const rowThree = [{ key: 'CapsLock', name: 'CapsLock', type: 'control' },\r\n// {\r\n// \tkeyEng: 'a', keyRus: 'ф', name: 'KeyA', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 's', keyRus: 'ы', name: 'KeyS', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'd', keyRus: 'в', name: 'KeyD', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'f', keyRus: 'а', name: 'KeyF', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'g', keyRus: 'п', name: 'KeyG', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'h', keyRus: 'р', name: 'KeyH', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'j', keyRus: 'о', name: 'KeyJ', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'k', keyRus: 'л', name: 'KeyK', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'l', keyRus: 'д', name: 'KeyL', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: ';', keyRus: 'ж', name: 'Semicolon', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: '\\'', keyRus: 'э', name: 'Quote', type: 'letter',\r\n// },\r\n// { key: 'Enter', name: 'Enter', type: 'control' },\r\n// ];\r\n// Row #4 on the keyboard\r\n// export const rowFour = [{ key: 'Shift', name: 'ShiftLeft', type: 'control' },\r\n// {\r\n// \tkeyEng: 'z', keyRus: 'я', name: 'KeyZ', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'x', keyRus: 'ч', name: 'KeyX', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'c', keyRus: 'с', name: 'KeyC', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'v', keyRus: 'м', name: 'KeyV', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'b', keyRus: 'и', name: 'KeyB', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'n', keyRus: 'т', name: 'KeyN', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: 'm', keyRus: 'ь', name: 'KeyM', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: ',', keyRus: 'б', name: 'Comma', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: '.', keyRus: 'ю', name: 'Period', type: 'letter',\r\n// },\r\n// {\r\n// \tkeyEng: '/', keyRus: '.', name: 'Slash', type: 'letter',\r\n// },\r\n// { key: '&#9650;', name: 'ArrowUp', type: 'control' },\r\n// { key: 'Shift', name: 'ShiftRight', type: 'control' },\r\n// ];\r\n// Row #5 on the keyboard\r\n// export const rowFive = [\r\n// \t{ key: 'Ctrl', name: 'w', type: 'control' },\r\n// \t{ key: 'Win', name: 'MetaLeft', type: 'control' },\r\n// \t{ key: 'Alt', name: 'AltLeft', type: 'control' },\r\n// \t{ key: '', name: 'Space', type: 'control' },\r\n// \t{ key: 'Alt', name: 'AltRight', type: 'control' },\r\n// \t{ key: 'Ctrl', name: 'ControlRight', type: 'control' },\r\n// \t{ key: '&#9668;', name: 'ArrowLeft', type: 'control' },\r\n// \t{ key: '&#9660;', name: 'ArrowDown', type: 'control' },\r\n// \t{ key: '&#9658;', name: 'ArrowRight', type: 'control' },\r\n// ];\r\n\r\n//languages\r\n\r\nconst ENG = 'eng';\r\nconst RUS = 'ru';\r\nconst body = document.querySelector('body');\r\n\r\nconst LOWER = 'lower';\r\nconst UPPER = 'upper';\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n\r\n\r\nconst state = {\r\n\tlang: localStorage.getItem('lang') || _constants_js__WEBPACK_IMPORTED_MODULE_0__.ENG,\r\n\tcase: _constants_js__WEBPACK_IMPORTED_MODULE_0__.LOWER,\r\n\ttextarea: null,\r\n\ttextareavalueEng: '',\r\n\tpointerStartPosition: 0,\r\n\tpointerEndPosition: 0,\r\n\tchangeTextareavalueEng: function (value) {\r\n\t\tthis.textareaValue = value;\r\n\t\tthis.pointerPosition = this.textareaValue.length;\r\n\t\t//console.log(this.pointerPosition);\r\n\t\tthis.rerenderTextarea();\r\n\t},\r\n\tchangePointerStartPosition: function (pos) {\r\n\t\tthis.pointerStartPosition = pos;\r\n\t\tthis.rerenderTextarea();\r\n\t},\r\n\r\n\tchangeCase: function () {\r\n\t\tdebugger\r\n\t\tthis.case === _constants_js__WEBPACK_IMPORTED_MODULE_0__.LOWER ? this.case = _constants_js__WEBPACK_IMPORTED_MODULE_0__.UPPER : this.case = _constants_js__WEBPACK_IMPORTED_MODULE_0__.LOWER;\r\n\t\tthis.rerenderKeyboard();\r\n\t},\r\n\r\n\trerenderTextarea: function (value) {\r\n\r\n\t},\r\n\r\n\trerenderKeyboard: function () {\r\n\r\n\t},\r\n\tsubscribe: function (observer) {\r\n\t\tswitch (observer.type) {\r\n\t\t\tcase 'rerender-textarea':\r\n\t\t\t\tthis.rerenderTextarea = observer.function;\r\n\t\t\t\tbreak;\r\n\r\n\t\t\tcase 'rerender-keyboard':\r\n\t\t\t\tthis.rerenderKeyboard = observer.function;\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/state.js?");

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
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { valueEng: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { valueEng: true });
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