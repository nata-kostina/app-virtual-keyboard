import AbstractElement from './AbstractElement.class';
import { body, LOWER, ENG } from './constants';
import { state } from './state';

class Key extends AbstractElement {
	constructor({ ...options }) {
		super()

		this.type = options.type;
		this.valueEng = options.value;
		this.valueRus = options.valueRus;
		this.displayedValue = null;

		state.lang === ENG ? this.displayedValue = this.valueEng : this.displayedValue = this.valueRus;
		if (this.type === 'char') {
			state.case === LOWER ? this.displayedValue = this.displayedValue.toLowerCase() : this.displayedValue = this.displayedValue.toUpperCase();
		}
			this.DOMelement = this.createElement({ tag: 'button', value: this.displayedValue });

			this.addClass(this.DOMelement, 'key');

			if (state.activatedKeys.has(this)) { this.addClass(this.DOMelement, 'active') };
			this.addDataAttributes(this.DOMelement, { type: 'value', value: options.value });
			this.addDataAttributes(this.DOMelement, { type: 'type', value: this.type });

			// state.subscribe({ type: 'rerender-key', function: this.rerenderKey.bind(this) });
			// state.subscribe2(this.showBtn.bind(this));
			//this.showBtn();
			//state.showKey(this.showBtn.bind(this));
		}

		draw({ container, place }) {
			if (container) { this.drawElement(this.DOMelement, { container, place }); }
		}
		cleanKey() {
			this.DOMelement.innerHTML = '';
		}

		rerenderKey() {
			this.DOMelement.innerHTML = '';
			// debugger
			state.lang === ENG ? this.displayedValue = this.valueEng : this.displayedValue = this.valueRus;


			if (this.type === 'char') {
				state.case === LOWER ? this.displayedValue = this.displayedValue.toLowerCase() : this.displayedValue = this.displayedValue.toUpperCase();
			};

			this.DOMelement.innerHTML = this.displayedValue;

			if (state.activatedKeys.has(this)) { this.addClass(this.DOMelement, 'active') }
			else
				if (this.DOMelement.classList.contains('active')) { this.DOMelement.classList.remove('active') };

		}

	}

export default Key;