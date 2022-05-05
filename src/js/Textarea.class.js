import AbstractElement from './AbstractElement.class';
import { body } from './constants';
import { state, subscribe } from './state';
class Textarea extends AbstractElement {
	constructor() {
		super()
		this.DOMelement = this.createElement({
			tag: 'textarea',
			attributes: {
				name: "textarea", cols: "30", rows: "8",
				autocomplete: "off", autofocus: 'true', placeholder: 'Enter text...',
			},
			value: state.textareaValue
		});
		this.addClass(this.DOMelement, 'textarea');
		this.DOMelement.focus();
		state.subscribe({ type: 'rerender-textarea', function: this.rerenderTextarea.bind(this) });
		this.addListener(this.DOMelement, 'click', this.clickHandler.bind(this));
	}

	draw() {
		const mainInner = body.querySelector('.main__inner');
		if (mainInner) { this.drawElement(this.DOMelement, { container: mainInner, place: `beforeend` }); }
	}
	rerenderTextarea() {
		this.DOMelement.value = state.textareaValue;
		this.DOMelement.selectionStart = state.pointerStartPosition;
		this.DOMelement.selectionEnd = state.pointerStartPosition;
		//	console.log(`Before focus() ${this.DOMelement.selectionStart}`);
		this.DOMelement.focus();
		//	console.log(`After focus() ${this.DOMelement.selectionStart}`);

	}

	clickHandler(e) {
		// console.log(e)
		// console.log(this.DOMelement.selectionEnd)
		// console.log(this.DOMelement.selectionStart)
		state.changePointerStartPosition(this.DOMelement.selectionStart);
	}
}

export default Textarea;