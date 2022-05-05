import AbstractElement from './AbstractElement.class';
import { body, LOWER, ENG, SHIFTED, UNSHIFTED, activatable } from './constants';
import { state } from './state';

class Key extends AbstractElement {
	constructor({ ...options }) {
		super()

		this.key_eng_unshft = options['key_eng_unshft'];
		this.key_ru_unshft = options['key_ru_unshft'] || this.key_eng_unshft;
		this.key_eng_shft = options['key_eng_shft'] || this.key_eng_unshft;
		this.key_ru_shft = options['key_ru_shft'] || this.key_ru_unshft;

		this.displayedValue = this[`key_${state.lang}_${state.status}`];

		this.code = options['code'] || `Key${this.key_eng_unshft.toUpperCase()}`;

		this.type = options.type;
		if (this.type === 'char') {
			state.case === LOWER ? this.displayedValue = this.displayedValue.toLowerCase() : this.displayedValue = this.displayedValue.toUpperCase();
		}
		this.DOMelement = this.createElement({ tag: 'button', value: this.displayedValue });
		this.DOMelement.classList.add('key');

		if ((this.type in activatable) && state.activatedKeys.has(this)) { this.DOMelement.classList.add('active'); };
		this.addDataAttributes(this.DOMelement, { type: 'value', value: this.displayedValue });
		this.addDataAttributes(this.DOMelement, { type: 'type', value: this.type });
	}

	draw({ container, place }) {
		if (container) { this.drawElement(this.DOMelement, { container, place }); }
	}
	cleanKey() {
		this.DOMelement.innerHTML = '';
	}

	rerenderKey() {
		//debugger
		this.DOMelement.innerHTML = '';
		this.displayedValue = this[`key_${state.lang}_${state.status}`];

		if (this.type === 'char') {
			state.case === LOWER ? this.displayedValue = this.displayedValue.toLowerCase() : this.displayedValue = this.displayedValue.toUpperCase();
		};

		this.DOMelement.innerHTML = this.displayedValue;

		if (state.activatedKeys.has(this)) {
			this.DOMelement.classList.add('active')
		}
		else
			if (this.DOMelement.classList.contains('active')) {
				this.DOMelement.classList.remove('active')
			};

	}

}

export default Key;