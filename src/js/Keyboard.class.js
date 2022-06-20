import AbstractElement from './AbstractElement.class';
import {
  body, LOWER, rows, SHIFTED, UNSHIFTED, activatable,
} from './constants';
import Key from './Key.class';
import state from './state';

class Keyboard extends AbstractElement {
  constructor() {
    super();
    this.DOMelement = this.createElement({ tag: 'div' });
    this.addClass(this.DOMelement, 'keyboard');
    this.addListener(this.DOMelement, 'click', this.handleClickEvent.bind(this));
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
    document.addEventListener('keyup', (e) => this.handleKeyup(e));

    state.subscribe({ type: 'rerender-keyboard', function: this.rerenderKeyboard.bind(this) });
    this.allKeys = [];
  }

  draw() {
    const container = body.querySelector('.main__inner');
    if (container) { this.drawElement(this.DOMelement, { container, place: 'beforeend' }); }
  }

  fillWithKeys() {
    const keyboard = document.querySelector('.keyboard');

    rows.forEach((row) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      keyboard.insertAdjacentElement('beforeend', rowDiv);
      row.map((k) => {
        const key = new Key(k);
        key.draw({ container: rowDiv, place: 'beforeend' });
        this.allKeys.push(key);
        return k;
      });
    });
  }

  handleClickEvent(e) {
    const key = e.target.closest('.key');
    if (!key) return;
    const keyObj = this.allKeys.find((el) => el.DOMelement.dataset.value === key.dataset.value);
    if (activatable.includes(keyObj.currentCode)) {
      if (state.activatedKeys.has(keyObj)) state.deleteActivatedKey(keyObj);
      else state.addActivatedKey(keyObj);
    }

    this.handleKeyByType(keyObj);
  }

  handleKeyByType(key) {
    switch (key.type) {
      case 'char':
        this.handleCharInsert(key.displayedValue);
        break;
      case 'backspace':
        this.handleBackspace();
        break;
      case 'tab':
        this.handleTab();
        break;
      case 'capslock':
        this.handleCapslock(key);
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
      case key.DOMelement.dataset.type.match(/^shift-.+/)?.input:
        this.handleShift(key);
        break;
      case 'alt-left':
        this.handleLeftAlt(key);
        break;
      case key.DOMelement.dataset.type.match(/^arrow-.+/)?.input:
        this.handleCharInsert(key.DOMelement.dataset.value);
        break;
      default:
        break;
    }
  }

  handleKeydown(e) {
    e.preventDefault();
    let k;
    if (activatable.includes(e.code)) {
      k = this.allKeys.find((key) => key.currentCode === e.code);
    } else {
      k = this.allKeys.find((key) => key.key_eng_unshft === e.key);
      if (!k) { k = this.allKeys.find((key) => key.currentCode === e.code); }
    }

    if (k && (!k.DOMelement.classList.contains('pressed'))) {
      k.DOMelement.classList.add('pressed');
      if (!state.activatedKeys.has(k)) {
        state.addActivatedKey(k);
      } else
      if (state.activatedKeys.has(k)) {
        state.deleteActivatedKey(k);
      }

      this.handleKeyByType(k);
    }
  }

  handleKeyup(e) {
    e.preventDefault();

    let k = this.allKeys.find((key) => key.currentCode === e.code);
    if (!k) {
      k = this.allKeys.find((key) => key.key_eng_unshft === e.key);
    }
    if (k) {
      if (k.DOMelement.classList.contains('pressed')) {
        k.DOMelement.classList.remove('pressed');
      }
      if (!(k.currentCode === 'CapsLock') && state.activatedKeys.has(k)) {
        state.deleteActivatedKey(k);
      }
      if (k.type === 'shift-left') {
        this.handleShift();
      }
    }
  }

  handleCharInsert(value) {
    state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}${state.case === LOWER ? value.toLowerCase() : value.toUpperCase()
    }${state.textareaValue.slice(state.pointerStartPosition)}`);
    state.pointerStartPosition += 1;
    state.changePointerStartPosition(state.pointerStartPosition);
  }

  handleEnter() {
    state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}\n${state.textareaValue.slice(state.pointerStartPosition)}`);
    state.pointerStartPosition += 1;
    state.changePointerStartPosition(state.pointerStartPosition);
  }

  handleBackspace() {
    if (state.pointerStartPosition - 1 >= 0) {
      state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition - 1)}${state.textareaValue.slice(state.pointerStartPosition)}`);
      state.pointerStartPosition -= 1;
      state.changePointerStartPosition(state.pointerStartPosition);
    } else {
      state.changePointerStartPosition(state.pointerStartPosition);
    }
  }

  handleTab() {
    state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}   ${state.textareaValue.slice(state.pointerStartPosition)}`);
    state.changePointerStartPosition(state.pointerStartPosition + 3);
  }

  handleCapslock() {
    state.changeCase();
  }

  handleShift(keyObj) {
    if (state.activatedKeys.has(keyObj)) {
      state.status = SHIFTED;
      state.changeCase();
      if (state.checkLangShortcut()) {
        state.changeLanguage();
      }
    } else {
      state.status = UNSHIFTED;
      state.changeCase();
    }
  }

  handleLeftAlt() {
    if (state.checkLangShortcut()) { state.changeLanguage(); }
  }

  handleSpace() {
    state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)} ${state.textareaValue.slice(state.pointerStartPosition)}`);
    state.pointerStartPosition += 1;
    state.changePointerStartPosition(state.pointerStartPosition);
  }

  handleDelete() {
    if (state.pointerStartPosition >= 0) {
      state.changeTextareaValue(`${state.textareaValue.slice(0, state.pointerStartPosition)}${state.textareaValue.slice(state.pointerStartPosition + 1)}`);
      state.changePointerStartPosition(state.pointerStartPosition);
    } else {
      state.changePointerStartPosition(state.pointerStartPosition);
    }
  }

  rerenderKeyboard() {
    this.allKeys.map((key) => key.rerenderKey());
  }
}

export default Keyboard;
