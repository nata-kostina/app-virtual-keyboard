import AbstractElement from './AbstractElement.class';
import { LOWER, activatable } from './constants';
import state from './state';

class Key extends AbstractElement {
  constructor({ ...options }) {
    super();

    this.key_eng_unshft = options.key_eng_unshft;
    this.key_ru_unshft = options.key_ru_unshft || this.key_eng_unshft;
    this.key_eng_shft = options.key_eng_shft || this.key_eng_unshft;
    this.key_ru_shft = options.key_ru_shft || this.key_ru_unshft;

    this.displayedValue = this[`key_${state.lang}_${state.status}`];

    this.code_unshft = options.code_unshft || options.code || `Key${this.key_eng_unshft.toUpperCase()}`;
    this.code_shft = options.code_shft || this.code_unshft;
    this.currentCode = this.code_unshft;

    this.type = options.type;
    if (this.type === 'char') {
      if (state.case === LOWER) this.displayedValue = this.displayedValue.toLowerCase();
      else this.displayedValue = this.displayedValue.toUpperCase();
    }
    this.DOMelement = this.createElement({ tag: 'button', value: this.displayedValue });
    this.DOMelement.classList.add('key');

    if ((this.type in activatable) && state.activatedKeys.has(this)) { this.DOMelement.classList.add('active'); }
    this.DOMelement.dataset.value = this.displayedValue;
    this.DOMelement.dataset.type = this.type;
  }

  draw({ container, place }) {
    if (container) { this.drawElement(this.DOMelement, { container, place }); }
  }

  cleanKey() {
    this.DOMelement.innerHTML = '';
  }

  rerenderKey() {
    this.DOMelement.innerHTML = '';
    this.displayedValue = this[`key_${state.lang}_${state.status}`];
    this.currentCode = this[`code_${state.status}`];
    if (this.type === 'char') {
      if (state.case === LOWER) {
        this.displayedValue = this.displayedValue.toLowerCase();
      } else { this.displayedValue = this.displayedValue.toUpperCase(); }
    }

    this.DOMelement.innerHTML = this.displayedValue;

    if (state.activatedKeys.has(this)) {
      this.DOMelement.classList.add('active');
    } else
    if (this.DOMelement.classList.contains('active')) {
      this.DOMelement.classList.remove('active');
    }
  }
}

export default Key;
