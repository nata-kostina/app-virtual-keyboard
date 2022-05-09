/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './src/styles/style.scss':
    /*! *******************************!*\
  !*** ./src/styles/style.scss ***!
  \****************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/styles/style.scss?');
      /***/ }),

    /***/ './src/index.js':
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_App_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App.class */ "./src/js/App.class.js");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");\n\n\n\nconst app = new _js_App_class__WEBPACK_IMPORTED_MODULE_0__["default"]();\napp.init();\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/index.js?');
      /***/ }),

    /***/ './src/js/AbstractElement.class.js':
    /*! *****************************************!*\
  !*** ./src/js/AbstractElement.class.js ***!
  \**************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AbstractElement {\r\n  createElement({ tag, ...options }) {\r\n    const DOMelement = document.createElement(tag);\r\n    if (options.value) {\r\n      DOMelement.innerHTML = `${options.value}`;\r\n    } else {\r\n      DOMelement.innerHTML = '';\r\n    }\r\n    if (options.attributes) {\r\n      options.attributes.forEach((key) => DOMelement.setAttribute(key, options.attributes[key]));\r\n    }\r\n    return DOMelement;\r\n  }\r\n\r\n  addClass(DOMelement, classes) {\r\n    DOMelement.classList.add(classes);\r\n  }\r\n\r\n  drawElement(DOMelement, { container, place }) {\r\n    container.insertAdjacentElement(`${place}`, DOMelement);\r\n  }\r\n\r\n  addListener(DOMelement, event, handler) {\r\n    DOMelement.addEventListener(event, (e) => handler(e));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractElement);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/AbstractElement.class.js?");
      /***/ }),

    /***/ './src/js/App.class.js':
    /*! *****************************!*\
  !*** ./src/js/App.class.js ***!
  \**************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/js/state.js");\n/* harmony import */ var _Keyboard_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.class */ "./src/js/Keyboard.class.js");\n/* harmony import */ var _Layout_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.class */ "./src/js/Layout.class.js");\n/* harmony import */ var _Textarea_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Textarea.class */ "./src/js/Textarea.class.js");\n/* harmony import */ var _Footer_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.class */ "./src/js/Footer.class.js");\n\r\n\r\n\r\n\r\n\r\n\r\nclass App {\r\n  init() {\r\n    const layout = new _Layout_class__WEBPACK_IMPORTED_MODULE_2__["default"]();\r\n    const keyboard = new _Keyboard_class__WEBPACK_IMPORTED_MODULE_1__["default"]();\r\n    const textarea = new _Textarea_class__WEBPACK_IMPORTED_MODULE_3__["default"]();\r\n    _state__WEBPACK_IMPORTED_MODULE_0__["default"].textarea = textarea;\r\n    layout.draw();\r\n    textarea.draw();\r\n    keyboard.draw();\r\n\r\n    keyboard.fillWithKeys();\r\n    const footer = new _Footer_class__WEBPACK_IMPORTED_MODULE_4__["default"]();\r\n    footer.draw();\r\n  }\r\n\r\n  finish() {\r\n\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/App.class.js?');
      /***/ }),

    /***/ './src/js/Footer.class.js':
    /*! ********************************!*\
  !*** ./src/js/Footer.class.js ***!
  \******************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\n\r\nclass Footer extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.DOMelement = this.createElement({\r\n      tag: 'footer', value: `\r\n      <div class=\"container\">\r\n      <div class=\"footer__inner\">\r\n      <p class=\"info\">OS: Windows 10</p>\r\n      <p class=\"info\">Change language: <b>Shift Left + Alt Left</b></p>\r\n      </div>\r\n      </div>\r\n      `,\r\n    });\r\n    this.addClass(this.DOMelement, 'footer');\r\n  }\r\n\r\n  draw() {\r\n    this.drawElement(this.DOMelement, { container: _constants__WEBPACK_IMPORTED_MODULE_1__.body, place: 'beforeend' });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Footer.class.js?");
      /***/ }),

    /***/ './src/js/Key.class.js':
    /*! *****************************!*\
  !*** ./src/js/Key.class.js ***!
  \**************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\n\r\nclass Key extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor({ ...options }) {\r\n    super();\r\n\r\n    this.key_eng_unshft = options.key_eng_unshft;\r\n    this.key_ru_unshft = options.key_ru_unshft || this.key_eng_unshft;\r\n    this.key_eng_shft = options.key_eng_shft || this.key_eng_unshft;\r\n    this.key_ru_shft = options.key_ru_shft || this.key_ru_unshft;\r\n\r\n    this.displayedValue = this[`key_${_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lang}_${_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].status}`];\r\n\r\n    this.code_unshft = options.code_unshft || options.code || `Key${this.key_eng_unshft.toUpperCase()}`;\r\n    this.code_shft = options.code_shft || this.code_unshft;\r\n    this.currentCode = this.code_unshft;\r\n\r\n    this.type = options.type;\r\n    if (this.type === 'char') {\r\n      if (_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"case\"] === _constants__WEBPACK_IMPORTED_MODULE_1__.LOWER) this.displayedValue = this.displayedValue.toLowerCase();\r\n      else this.displayedValue = this.displayedValue.toUpperCase();\r\n    }\r\n    this.DOMelement = this.createElement({ tag: 'button', value: this.displayedValue });\r\n    this.DOMelement.classList.add('key');\r\n\r\n    if ((this.type in _constants__WEBPACK_IMPORTED_MODULE_1__.activatable) && _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activatedKeys.has(this)) { this.DOMelement.classList.add('active'); }\r\n    this.DOMelement.dataset.value = this.displayedValue;\r\n    this.DOMelement.dataset.type = this.type;\r\n  }\r\n\r\n  draw({ container, place }) {\r\n    if (container) { this.drawElement(this.DOMelement, { container, place }); }\r\n  }\r\n\r\n  cleanKey() {\r\n    this.DOMelement.innerHTML = '';\r\n  }\r\n\r\n  rerenderKey() {\r\n    this.DOMelement.innerHTML = '';\r\n    this.displayedValue = this[`key_${_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lang}_${_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].status}`];\r\n    this.currentCode = this[`code_${_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].status}`];\r\n    if (this.type === 'char') {\r\n      if (_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"case\"] === _constants__WEBPACK_IMPORTED_MODULE_1__.LOWER) {\r\n        this.displayedValue = this.displayedValue.toLowerCase();\r\n      } else { this.displayedValue = this.displayedValue.toUpperCase(); }\r\n    }\r\n\r\n    this.DOMelement.innerHTML = this.displayedValue;\r\n\r\n    if (_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activatedKeys.has(this)) {\r\n      this.DOMelement.classList.add('active');\r\n    } else\r\n    if (this.DOMelement.classList.contains('active')) {\r\n      this.DOMelement.classList.remove('active');\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Key.class.js?");
      /***/ }),

    /***/ './src/js/Keyboard.class.js':
    /*! **********************************!*\
  !*** ./src/js/Keyboard.class.js ***!
  \********************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _Key_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Key.class */ \"./src/js/Key.class.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\n\r\n\r\nclass Keyboard extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.DOMelement = this.createElement({ tag: 'div' });\r\n    this.addClass(this.DOMelement, 'keyboard');\r\n    this.addListener(this.DOMelement, 'click', this.handleClickEvent.bind(this));\r\n    document.addEventListener('keydown', (e) => this.handleKeydown(e));\r\n    document.addEventListener('keyup', (e) => this.handleKeyup(e));\r\n\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe({ type: 'rerender-keyboard', function: this.rerenderKeyboard.bind(this) });\r\n    this.allKeys = [];\r\n  }\r\n\r\n  draw() {\r\n    const container = _constants__WEBPACK_IMPORTED_MODULE_1__.body.querySelector('.main__inner');\r\n    if (container) { this.drawElement(this.DOMelement, { container, place: 'beforeend' }); }\r\n  }\r\n\r\n  fillWithKeys() {\r\n    const keyboard = document.querySelector('.keyboard');\r\n\r\n    _constants__WEBPACK_IMPORTED_MODULE_1__.rows.forEach((row) => {\r\n      const rowDiv = document.createElement('div');\r\n      rowDiv.classList.add('row');\r\n      keyboard.insertAdjacentElement('beforeend', rowDiv);\r\n      row.map((k) => {\r\n        const key = new _Key_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](k);\r\n        key.draw({ container: rowDiv, place: 'beforeend' });\r\n        this.allKeys.push(key);\r\n        return k;\r\n      });\r\n    });\r\n  }\r\n\r\n  handleClickEvent(e) {\r\n    const key = e.target.closest('.key');\r\n    if (!key) return;\r\n    const keyObj = this.allKeys.find((el) => el.DOMelement.dataset.value === key.dataset.value);\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.activatable.includes(keyObj.currentCode)) {\r\n      if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].activatedKeys.has(keyObj)) _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteActivatedKey(keyObj);\r\n      else _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addActivatedKey(keyObj);\r\n    }\r\n\r\n    this.handleKeyByType(keyObj);\r\n  }\r\n\r\n  handleKeyByType(key) {\r\n    switch (key.type) {\r\n      case 'char':\r\n        this.handleCharInsert(key.displayedValue);\r\n        break;\r\n      case 'backspace':\r\n        this.handleBackspace();\r\n        break;\r\n      case 'tab':\r\n        this.handleTab();\r\n        break;\r\n      case 'capslock':\r\n        this.handleCapslock(key);\r\n        break;\r\n      case 'enter':\r\n        this.handleEnter();\r\n        break;\r\n      case 'space':\r\n        this.handleSpace();\r\n        break;\r\n      case 'delete':\r\n        this.handleDelete();\r\n        break;\r\n      case key.DOMelement.dataset.type.match(/^shift-.+/)?.input:\r\n        this.handleShift(key);\r\n        break;\r\n      case 'alt-left':\r\n        this.handleLeftAlt(key);\r\n        break;\r\n      case key.DOMelement.dataset.type.match(/^arrow-.+/)?.input:\r\n        this.handleCharInsert(key.DOMelement.dataset.value);\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  }\r\n\r\n  handleKeydown(e) {\r\n    e.preventDefault();\r\n    let k;\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.activatable.includes(e.code)) {\r\n      k = this.allKeys.find((key) => key.currentCode === e.code);\r\n    } else {\r\n      k = this.allKeys.find((key) => key.key_eng_unshft === e.key);\r\n      if (!k) { k = this.allKeys.find((key) => key.currentCode === e.code); }\r\n    }\r\n\r\n    if (k && (!k.DOMelement.classList.contains('pressed'))) {\r\n      k.DOMelement.classList.add('pressed');\r\n      if (!_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].activatedKeys.has(k)) {\r\n        _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addActivatedKey(k);\r\n      } else\r\n      if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].activatedKeys.has(k)) {\r\n        _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteActivatedKey(k);\r\n      }\r\n\r\n      this.handleKeyByType(k);\r\n    }\r\n  }\r\n\r\n  handleKeyup(e) {\r\n    e.preventDefault();\r\n\r\n    let k = this.allKeys.find((key) => key.currentCode === e.code);\r\n    if (!k) {\r\n      k = this.allKeys.find((key) => key.key_eng_unshft === e.key);\r\n    }\r\n    if (k) {\r\n      if (k.DOMelement.classList.contains('pressed')) {\r\n        k.DOMelement.classList.remove('pressed');\r\n      }\r\n      if (!(k.currentCode === 'CapsLock') && _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].activatedKeys.has(k)) {\r\n        _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteActivatedKey(k);\r\n      }\r\n      if (k.type === 'shift-left') {\r\n        this.handleShift();\r\n      }\r\n    }\r\n  }\r\n\r\n  handleCharInsert(value) {\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"case\"] === _constants__WEBPACK_IMPORTED_MODULE_1__.LOWER ? value.toLowerCase() : value.toUpperCase()\r\n    }${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}`);\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition += 1;\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n  }\r\n\r\n  handleEnter() {\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}\\n${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}`);\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition += 1;\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n  }\r\n\r\n  handleBackspace() {\r\n    if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition - 1 >= 0) {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition - 1)}${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}`);\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition -= 1;\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n    } else {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n    }\r\n  }\r\n\r\n  handleTab() {\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}   ${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}`);\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition + 3);\r\n  }\r\n\r\n  handleCapslock() {\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeCase();\r\n  }\r\n\r\n  handleShift(keyObj) {\r\n    if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].activatedKeys.has(keyObj)) {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].status = _constants__WEBPACK_IMPORTED_MODULE_1__.SHIFTED;\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeCase();\r\n      if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkLangShortcut()) {\r\n        _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeLanguage();\r\n      }\r\n    } else {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].status = _constants__WEBPACK_IMPORTED_MODULE_1__.UNSHIFTED;\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeCase();\r\n    }\r\n  }\r\n\r\n  handleLeftAlt() {\r\n    if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkLangShortcut()) { _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeLanguage(); }\r\n  }\r\n\r\n  handleSpace() {\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)} ${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}`);\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition += 1;\r\n    _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n  }\r\n\r\n  handleDelete() {\r\n    if (_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition >= 0) {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeTextareaValue(`${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(0, _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition)}${_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].textareaValue.slice(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition + 1)}`);\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n    } else {\r\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changePointerStartPosition(_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pointerStartPosition);\r\n    }\r\n  }\r\n\r\n  rerenderKeyboard() {\r\n    this.allKeys.map((key) => key.rerenderKey());\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Keyboard.class.js?");
      /***/ }),

    /***/ './src/js/Layout.class.js':
    /*! ********************************!*\
  !*** ./src/js/Layout.class.js ***!
  \******************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\n\r\nclass Layout extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.DOMelement = this.createElement({\r\n      tag: 'main', value: `\r\n      <div class=\"container\">\r\n      <div class=\"main__inner card\">\r\n      <h1 class=\"title\">Virtual Keyboard</h1>\r\n      </div>\r\n      </div>`,\r\n    });\r\n    this.addClass(this.DOMelement, 'main');\r\n  }\r\n\r\n  draw() {\r\n    this.drawElement(this.DOMelement, { container: _constants__WEBPACK_IMPORTED_MODULE_1__.body, place: 'afterbegin' });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Layout.class.js?");
      /***/ }),

    /***/ './src/js/Textarea.class.js':
    /*! **********************************!*\
  !*** ./src/js/Textarea.class.js ***!
  \********************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractElement.class */ \"./src/js/AbstractElement.class.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\r\n\r\n\r\n\r\nclass Textarea extends _AbstractElement_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.DOMelement = this.createElement({\r\n      tag: 'textarea',\r\n      value: _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textareaValue,\r\n    });\r\n    this.DOMelement.setAttribute('name', 'textarea');\r\n    this.DOMelement.setAttribute('cols', '30');\r\n    this.DOMelement.setAttribute('rows', '8');\r\n    this.DOMelement.setAttribute('autocomplete', 'off');\r\n    this.DOMelement.setAttribute('autofocus', 'true');\r\n    this.DOMelement.setAttribute('placeholder', 'Enter text...');\r\n    this.addClass(this.DOMelement, 'textarea');\r\n    this.DOMelement.focus();\r\n    _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe({ type: 'rerender-textarea', function: this.rerenderTextarea.bind(this) });\r\n    this.addListener(this.DOMelement, 'click', this.clickHandler.bind(this));\r\n  }\r\n\r\n  draw() {\r\n    const mainInner = _constants__WEBPACK_IMPORTED_MODULE_1__.body.querySelector('.main__inner');\r\n    if (mainInner) { this.drawElement(this.DOMelement, { container: mainInner, place: 'beforeend' }); }\r\n  }\r\n\r\n  rerenderTextarea() {\r\n    this.DOMelement.value = _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textareaValue;\r\n    this.DOMelement.selectionStart = _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pointerStartPosition;\r\n    this.DOMelement.selectionEnd = _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pointerStartPosition;\r\n    this.DOMelement.focus();\r\n  }\r\n\r\n  clickHandler() {\r\n    _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changePointerStartPosition(this.DOMelement.selectionStart);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/Textarea.class.js?");
      /***/ }),

    /***/ './src/js/constants.js':
    /*! *****************************!*\
  !*** ./src/js/constants.js ***!
  \**************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ENG\": () => (/* binding */ ENG),\n/* harmony export */   \"LOWER\": () => (/* binding */ LOWER),\n/* harmony export */   \"RU\": () => (/* binding */ RU),\n/* harmony export */   \"SHIFTED\": () => (/* binding */ SHIFTED),\n/* harmony export */   \"UNSHIFTED\": () => (/* binding */ UNSHIFTED),\n/* harmony export */   \"UPPER\": () => (/* binding */ UPPER),\n/* harmony export */   \"activatable\": () => (/* binding */ activatable),\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"rowFive\": () => (/* binding */ rowFive),\n/* harmony export */   \"rowFour\": () => (/* binding */ rowFour),\n/* harmony export */   \"rowOne\": () => (/* binding */ rowOne),\n/* harmony export */   \"rowThree\": () => (/* binding */ rowThree),\n/* harmony export */   \"rowTwo\": () => (/* binding */ rowTwo),\n/* harmony export */   \"rows\": () => (/* binding */ rows)\n/* harmony export */ });\n// Row #1 on the keyboard key_ru_shifted\r\nconst rowOne = [\r\n  {\r\n    key_eng_unshft: '`', type: 'char', key_ru_unshft: 'ё', key_eng_shft: '~', key_ru_shft: 'Ё', code_unshft: 'Backquote',\r\n  },\r\n  {\r\n    key_eng_unshft: '1', type: 'char', key_ru_unshft: '1', key_eng_shft: '!', key_ru_shft: '!', code_unshft: 'Digit1', code_shft: '',\r\n  },\r\n  {\r\n    key_eng_unshft: '2', type: 'char', key_ru_unshft: '2', key_eng_shft: '@', key_ru_shft: '\"', code_unshft: 'Digit2',\r\n  },\r\n  {\r\n    key_eng_unshft: '3', type: 'char', key_ru_unshft: '3', key_eng_shft: '#', key_ru_shft: '№', code_unshft: 'Digit3',\r\n  },\r\n  {\r\n    key_eng_unshft: '4', type: 'char', key_ru_unshft: '4', key_eng_shft: '$', key_ru_shft: ';', code_unshft: 'Digit4',\r\n  },\r\n  {\r\n    key_eng_unshft: '5', type: 'char', key_ru_unshft: '5', key_eng_shft: '%', key_ru_shft: '%', code_unshft: 'Digit5',\r\n  },\r\n  {\r\n    key_eng_unshft: '6', type: 'char', key_ru_unshft: '6', key_eng_shft: '^', key_ru_shft: ':', code_unshft: 'Digit6',\r\n  },\r\n  {\r\n    key_eng_unshft: '7', type: 'char', key_ru_unshft: '7', key_eng_shft: '&', key_ru_shft: '?', code: 'Digit7',\r\n  },\r\n  {\r\n    key_eng_unshft: '8', type: 'char', key_ru_unshft: '8', key_eng_shft: '*', key_ru_shft: '*', code_unshft: 'Digit8',\r\n  },\r\n  {\r\n    key_eng_unshft: '9', type: 'char', key_ru_unshft: '9', key_eng_shft: '(', key_ru_shft: '(', code_unshft: 'Digit9',\r\n  },\r\n  {\r\n    key_eng_unshft: '0', type: 'char', key_ru_unshft: '0', key_eng_shft: ')', key_ru_shft: ')', code_unshft: 'Digit0',\r\n  },\r\n  {\r\n    key_eng_unshft: '-', type: 'char', key_ru_unshft: '-', key_eng_shft: '_', key_ru_shft: '_', code_unshft: 'Minus',\r\n  },\r\n  {\r\n    key_eng_unshft: '=', type: 'char', key_ru_unshft: '=', key_eng_shft: '+', key_ru_shft: '+', code_unshft: 'Equal',\r\n  },\r\n  {\r\n    key_eng_unshft: '\\\\', type: 'char', key_ru_unshft: '\\\\', key_eng_shft: '|', key_ru_shft: '/', code_unshft: 'Backslash',\r\n  },\r\n  { key_eng_unshft: 'Backspace', type: 'backspace', code_unshft: 'Backspace' },\r\n];\r\n\r\nconst rowTwo = [\r\n  { key_eng_unshft: 'Tab', type: 'tab', key_ru_unshft: 'Tab' },\r\n  { key_eng_unshft: 'q', type: 'char', key_ru_unshft: 'й' },\r\n  { key_eng_unshft: 'w', type: 'char', key_ru_unshft: 'ц' },\r\n  { key_eng_unshft: 'e', type: 'char', key_ru_unshft: 'у' },\r\n  { key_eng_unshft: 'r', type: 'char', key_ru_unshft: 'к' },\r\n  { key_eng_unshft: 't', type: 'char', key_ru_unshft: 'е' },\r\n  { key_eng_unshft: 'y', type: 'char', key_ru_unshft: 'н' },\r\n  { key_eng_unshft: 'u', type: 'char', key_ru_unshft: 'г' },\r\n  { key_eng_unshft: 'i', type: 'char', key_ru_unshft: 'ш' },\r\n  { key_eng_unshft: 'o', type: 'char', key_ru_unshft: 'щ' },\r\n  { key_eng_unshft: 'p', type: 'char', key_ru_unshft: 'з' },\r\n  {\r\n    key_eng_unshft: '[', type: 'char', key_ru_unshft: 'х', key_eng_shft: '{', code: 'BracketLeft',\r\n  },\r\n  {\r\n    key_eng_unshft: ']', type: 'char', key_ru_unshft: 'ъ', key_eng_shft: '}', code: 'BracketRight',\r\n  },\r\n  { key_eng_unshft: 'Delete', type: 'delete', code: 'Delete' },\r\n];\r\n\r\n// Row #3 on the keyboard\r\nconst rowThree = [\r\n  { key_eng_unshft: 'CapsLock', type: 'capslock', code: 'CapsLock' },\r\n  { key_eng_unshft: 'a', type: 'char', key_ru_unshft: 'ф' },\r\n  { key_eng_unshft: 's', type: 'char', key_ru_unshft: 'ы' },\r\n  { key_eng_unshft: 'd', type: 'char', key_ru_unshft: 'в' },\r\n  { key_eng_unshft: 'f', type: 'char', key_ru_unshft: 'а' },\r\n  { key_eng_unshft: 'g', type: 'char', key_ru_unshft: 'п' },\r\n  { key_eng_unshft: 'h', type: 'char', key_ru_unshft: 'р' },\r\n  { key_eng_unshft: 'j', type: 'char', key_ru_unshft: 'о' },\r\n  { key_eng_unshft: 'k', type: 'char', key_ru_unshft: 'л' },\r\n  { key_eng_unshft: 'l', type: 'char', key_ru_unshft: 'д' },\r\n  {\r\n    key_eng_unshft: ';', type: 'char', key_ru_unshft: 'ж', key_eng_shft: ':', code: 'Semicolon',\r\n  },\r\n  {\r\n    key_eng_unshft: '\\'', type: 'char', key_ru_unshft: 'э', key_eng_shft: '\"', code: 'Quote',\r\n  },\r\n  { key_eng_unshft: 'Enter', type: 'enter', code: 'Enter' },\r\n];\r\n\r\n// Row #4 on the keyboard\r\nconst rowFour = [\r\n  { key_eng_unshft: 'Shift', type: 'shift-left', code: 'ShiftLeft' },\r\n  { key_eng_unshft: 'z', type: 'char', key_ru_unshft: 'я' },\r\n  { key_eng_unshft: 'x', type: 'char', key_ru_unshft: 'ч' },\r\n  { key_eng_unshft: 'c', type: 'char', key_ru_unshft: 'с' },\r\n  { key_eng_unshft: 'v', type: 'char', key_ru_unshft: 'м' },\r\n  { key_eng_unshft: 'b', type: 'char', key_ru_unshft: 'и' },\r\n  { key_eng_unshft: 'n', type: 'char', key_ru_unshft: 'т' },\r\n  { key_eng_unshft: 'm', type: 'char', key_ru_unshft: 'ь' },\r\n  {\r\n    key_eng_unshft: ',', type: 'char', key_ru_unshft: 'б', key_eng_shft: '<', code_unshft: 'Comma',\r\n  },\r\n  {\r\n    key_eng_unshft: '.', type: 'char', key_ru_unshft: 'ю', key_eng_shft: '>', code_unshft: 'Period',\r\n  },\r\n  { key_eng_unshft: '▲', type: 'arrow-up', code: 'ArrowUp' },\r\n\r\n  {\r\n    key_eng_unshft: '/', type: 'char', key_ru_unshft: '.', key_eng_shft: '?', key_ru_shft: ',', code_unshft: 'Slash', code_shft: '',\r\n  },\r\n];\r\n\r\n// Row #5 on the keyboard\r\nconst rowFive = [\r\n  { key_eng_unshft: 'Ctrl', type: 'ctrl-left', code: 'ControlLeft' },\r\n  { key_eng_unshft: 'Alt', type: 'alt-left', code: 'AltLeft' },\r\n  { key_eng_unshft: '', type: 'space', code: 'Space' },\r\n  { key_eng_unshft: 'Alt', type: 'alt-right', code: 'AltRight' },\r\n  { key_eng_unshft: 'Ctrl', type: 'ctrl-right', code: 'ControlRight' },\r\n  { key_eng_unshft: '◄', type: 'arrow-left', code: 'ArrowLeft' },\r\n  { key_eng_unshft: '▼', type: 'arrow-down', code: 'ArrowDown' },\r\n  { key_eng_unshft: '►', type: 'arrow-right', code: 'ArrowRight' },\r\n\r\n];\r\nconst ENG = 'eng';\r\nconst RU = 'ru';\r\nconst SHIFTED = 'shft';\r\nconst UNSHIFTED = 'unshft';\r\nconst body = document.querySelector('body');\r\nconst LOWER = 'lower';\r\nconst UPPER = 'upper';\r\nconst rows = [rowOne, rowTwo, rowThree, rowFour, rowFive];\r\nconst activatable = ['CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight'];\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/constants.js?");
      /***/ }),

    /***/ './src/js/state.js':
    /*! *************************!*\
  !*** ./src/js/state.js ***!
  \************************ */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\r\n\r\nconst state = {\r\n  lang: localStorage.getItem('lang') || _constants__WEBPACK_IMPORTED_MODULE_0__.ENG,\r\n  case: _constants__WEBPACK_IMPORTED_MODULE_0__.LOWER,\r\n  textarea: null,\r\n  textareaValue: '',\r\n  pointerStartPosition: 0,\r\n  pointerEndPosition: 0,\r\n  pressedKeys: new Set(),\r\n  activatedKeys: new Set(),\r\n  shifted: false,\r\n  status: _constants__WEBPACK_IMPORTED_MODULE_0__.UNSHIFTED,\r\n\r\n  changeTextareaValue(value) {\r\n    this.textareaValue = value;\r\n    this.pointerPosition = this.textareaValue.length;\r\n    // console.log(this.pointerPosition);\r\n    this.rerenderTextarea();\r\n  },\r\n  changePointerStartPosition(pos) {\r\n    this.pointerStartPosition = pos;\r\n    this.rerenderTextarea();\r\n  },\r\n\r\n  changeCase() {\r\n    if (this.case === _constants__WEBPACK_IMPORTED_MODULE_0__.LOWER) this.case = _constants__WEBPACK_IMPORTED_MODULE_0__.UPPER;\r\n    else this.case = _constants__WEBPACK_IMPORTED_MODULE_0__.LOWER;\r\n    this.rerenderKeyboard();\r\n  },\r\n\r\n  addActivatedKey(keyObj) {\r\n    this.activatedKeys.add(keyObj);\r\n    this.rerenderKeyboard();\r\n  },\r\n\r\n  deleteActivatedKey(keyObj) {\r\n    this.activatedKeys.delete(keyObj);\r\n    this.rerenderKeyboard();\r\n  },\r\n  checkLangShortcut() {\r\n    const arr = Array.from(this.activatedKeys);\r\n    const shft = arr.find((el) => el.type === 'shift-left');\r\n    const alt = arr.find((el) => el.type === 'alt-left');\r\n    return !!((shft && alt));\r\n  },\r\n  changeLanguage() {\r\n    if (this.lang === _constants__WEBPACK_IMPORTED_MODULE_0__.ENG) this.lang = _constants__WEBPACK_IMPORTED_MODULE_0__.RU; else this.lang = _constants__WEBPACK_IMPORTED_MODULE_0__.ENG;\r\n    localStorage.setItem('lang', this.lang);\r\n    this.rerenderKeyboard();\r\n  },\r\n\r\n  rerenderTextarea() { },\r\n\r\n  rerenderKeyboard() { },\r\n\r\n  subscribe(observer) {\r\n    switch (observer.type) {\r\n      case 'rerender-textarea':\r\n        this.rerenderTextarea = observer.function;\r\n        break;\r\n      case 'rerender-keyboard':\r\n        this.rerenderKeyboard = observer.function;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  },\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\r\n\n\n//# sourceURL=webpack://app-virtual-keyboard/./src/js/state.js?");
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ 	// startup
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	// This entry module can't be inlined because the eval devtool is used.
  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/index.js');
/** *** */
/** *** */ })();
