import * as constants from './constants';

const state = {
  lang: localStorage.getItem('lang') || constants.ENG,
  case: constants.LOWER,
  textarea: null,
  textareaValue: '',
  pointerStartPosition: 0,
  pointerEndPosition: 0,
  pressedKeys: new Set(),
  activatedKeys: new Set(),
  shifted: false,
  status: constants.UNSHIFTED,

  changeTextareaValue(value) {
    this.textareaValue = value;
    this.pointerPosition = this.textareaValue.length;
    // console.log(this.pointerPosition);
    this.rerenderTextarea();
  },
  changePointerStartPosition(pos) {
    this.pointerStartPosition = pos;
    this.rerenderTextarea();
  },

  changeCase() {
    if (this.case === constants.LOWER) this.case = constants.UPPER;
    else this.case = constants.LOWER;
    this.rerenderKeyboard();
  },

  addActivatedKey(keyObj) {
    this.activatedKeys.add(keyObj);
    this.rerenderKeyboard();
  },

  deleteActivatedKey(keyObj) {
    this.activatedKeys.delete(keyObj);
    this.rerenderKeyboard();
  },
  checkLangShortcut() {
    const arr = Array.from(this.activatedKeys);
    const shft = arr.find((el) => el.type === 'shift-left');
    const alt = arr.find((el) => el.type === 'alt-left');
    return !!((shft && alt));
  },
  changeLanguage() {
    if (this.lang === constants.ENG) this.lang = constants.RU; else this.lang = constants.ENG;
    localStorage.setItem('lang', this.lang);
    this.rerenderKeyboard();
  },

  rerenderTextarea() { },

  rerenderKeyboard() { },

  subscribe(observer) {
    switch (observer.type) {
      case 'rerender-textarea':
        this.rerenderTextarea = observer.function;
        break;
      case 'rerender-keyboard':
        this.rerenderKeyboard = observer.function;
        break;
      default:
        break;
    }
  },

};

export default state;
