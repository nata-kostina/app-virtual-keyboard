import * as constants from './constants.js'

export const state = {
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

	changeTextareaValue: function (value) {
		this.textareaValue = value;
		this.pointerPosition = this.textareaValue.length;
		//console.log(this.pointerPosition);
		this.rerenderTextarea();
	},
	changePointerStartPosition: function (pos) {
		this.pointerStartPosition = pos;
		this.rerenderTextarea();
	},

	changeCase: function () {
		this.case === constants.LOWER ? this.case = constants.UPPER : this.case = constants.LOWER;
		this.rerenderKeyboard();
	},

	addActivatedKey: function (keyObj) {
		this.activatedKeys.add(keyObj);
		this.rerenderKeyboard();
	},

	deleteActivatedKey: function (keyObj) {
		this.activatedKeys.delete(keyObj);
		this.rerenderKeyboard();
	},
	checkLangShortcut: function () {
		let arr = Array.from(this.activatedKeys);
		return arr.filter(el => el.type === 'shift-left' || el.type === 'alt-left').length ==2;
	},
	changeLanguage: function () {
		this.lang === constants.ENG ? this.lang = constants.RU : this.lang = constants.ENG;
		localStorage.setItem('lang', this.lang);
		this.rerenderKeyboard();
	},

	rerenderTextarea: function (value) {

	},

	rerenderKeyboard: function () {

	},

	subscribe: function (observer) {
		switch (observer.type) {
			case 'rerender-textarea':
				this.rerenderTextarea = observer.function;
				break;

			case 'rerender-keyboard':
				this.rerenderKeyboard = observer.function;
				break;
		}
	}

}