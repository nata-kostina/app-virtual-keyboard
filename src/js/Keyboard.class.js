import AbstractElement from './AbstractElement.class';
import { body, LOWER, rows } from './constants';
import Key from './Key.class';
import { state } from './state';
class Keyboard extends AbstractElement {
	constructor() {
		super()
		this.DOMelement = this.createElement({ tag: 'div' });
		this.addClass(this.DOMelement, 'keyboard');
		this.addListener(this.DOMelement, 'click', this.handleClickEvent.bind(this));
		state.subscribe({ type: 'rerender-keyboard', function: this.rerenderKeyboard.bind(this) });
		this.allKeys = [];
		console.log(this)
	}
	draw() {
		const container = body.querySelector('.main__inner');
		if (container) { this.drawElement(this.DOMelement, { container: container, place: `beforeend` }); }
	}
	fillWithKeys() {
		const keyboard = document.querySelector('.keyboard');

		rows.forEach(row => {
			const rowDiv = document.createElement('div');
			rowDiv.classList.add('row');
			keyboard.insertAdjacentElement('beforeend', rowDiv);
			row.map((k) => {
				const key = new Key(k);
				key.draw({ container: rowDiv, place: 'beforeend' });
				this.allKeys.push(key);
				//	console.log(key);
			})
		});
	}

	handleClickEvent(e) {
		let key = e.target.closest('.key');
		if (!key) return;
		const keyObj = this.allKeys.find(el => el.DOMelement.dataset.value === key.dataset.value);
		switch (keyObj.type) {
			case 'char':
				this.handleCharInsert(keyObj.DOMelement.dataset.value);
				break;
			case 'backspace':
				this.handleBackspace();
				break;
			case 'tab':
				this.handleTab();
				break;
			case 'capslock':
				this.handleCapslock(keyObj);
				break;
			case 'enter':
				this.handleEnter();
				break;
			case 'space':
				this.handleSpace();
				break;
			case 'delete':
				this.handleDelete();
				break;
			case key.dataset.type.match(/^shift-.+/)?.input:
				this.handleShift(keyObj);
				break;
			case 'alt-left':
				this.handleLeftAlt(keyObj);
				break;
				case key.dataset.type.match(/^arrow-.+/)?.input:
					this.handleCharInsert(keyObj.DOMelement.dataset.value);
					break;
		}
		state.lastPressed = keyObj;
	}

	handleCharInsert(value) {
		state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}${state.case === LOWER ? value.toLowerCase() : value.toUpperCase()
			}${state.textareaValue.slice(state.pointerStartPosition)}`);
		state.changePointerStartPosition(++state.pointerStartPosition);
	}
	handleEnter() {
		state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}\n${state.textareaValue.slice(state.pointerStartPosition)}`);
		state.changePointerStartPosition(++state.pointerStartPosition);
	}
	handleBackspace() {
		if (state.pointerStartPosition - 1 >= 0) {
			state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition - 1)}${state.textareaValue.slice(state.pointerStartPosition)}`);
			state.changePointerStartPosition(--state.pointerStartPosition);
		}
		else {
			state.changePointerStartPosition(state.pointerStartPosition);
		}
	}

	handleTab() {
		state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}   ${state.textareaValue.slice(state.pointerStartPosition)}`);
		state.changePointerStartPosition(state.pointerStartPosition + 3);
	}
	handleCapslock(keyObj) {
		(state.activatedKeys.has(keyObj)) ? state.deleteActivatedKey(keyObj) : state.addActivatedKey(keyObj);
		state.changeCase();
	}
	handleShift(keyObj) {
		if (state.activatedKeys.has(keyObj)) {
			state.deleteActivatedKey(keyObj)
			state.changeCase();
		}
		else {
			state.addActivatedKey(keyObj);
			state.changeCase();
			if (state.checkLangShortcut()) {
				state.changeLanguage();
			}
			//state.deleteActivatedKey(keyObj) 
		}
	}
	handleLeftAlt(keyObj) {
		if (state.activatedKeys.has(keyObj)) {
			state.deleteActivatedKey(keyObj)
		}
		else {
			state.addActivatedKey(keyObj);
			
			if (state.checkLangShortcut()) {
				state.changeLanguage();
			}
			//state.deleteActivatedKey(keyObj) 
		}

		//if (state.activatedKeys.has(keyObj)){}
	}
	handleSpace() {
		state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)} ${state.textareaValue.slice(state.pointerStartPosition)}`);
		state.changePointerStartPosition(++state.pointerStartPosition);
	}
	handleDelete() {
		if (state.pointerStartPosition >= 0) {
			state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}${state.textareaValue.slice(state.pointerStartPosition + 1)}`);
			state.changePointerStartPosition(state.pointerStartPosition);
		}
		else {
			state.changePointerStartPosition(state.pointerStartPosition);
		}
	}
	cleanKeyboard() {
		this.DOMelement.innerHTML = '';
	}
	rerenderKeyboard() {
		//this.cleanKeyboard()
		this.allKeys.map(key => key.rerenderKey())
	}
}

export default Keyboard;