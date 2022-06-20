import AbstractElement from './AbstractElement.class';
import { body } from './constants';
import state from './state';

class Textarea extends AbstractElement {
  constructor() {
    super();
    this.DOMelement = this.createElement({
      tag: 'textarea',
      value: state.textareaValue,
    });
    this.DOMelement.setAttribute('name', 'textarea');
    this.DOMelement.setAttribute('cols', '30');
    this.DOMelement.setAttribute('rows', '8');
    this.DOMelement.setAttribute('autocomplete', 'off');
    this.DOMelement.setAttribute('autofocus', 'true');
    this.DOMelement.setAttribute('placeholder', 'Enter text...');
    this.addClass(this.DOMelement, 'textarea');
    this.DOMelement.focus();
    state.subscribe({ type: 'rerender-textarea', function: this.rerenderTextarea.bind(this) });
    this.addListener(this.DOMelement, 'click', this.clickHandler.bind(this));
  }

  draw() {
    const mainInner = body.querySelector('.main__inner');
    if (mainInner) { this.drawElement(this.DOMelement, { container: mainInner, place: 'beforeend' }); }
  }

  rerenderTextarea() {
    this.DOMelement.value = state.textareaValue;
    this.DOMelement.selectionStart = state.pointerStartPosition;
    this.DOMelement.selectionEnd = state.pointerStartPosition;
    this.DOMelement.focus();
  }

  clickHandler() {
    state.changePointerStartPosition(this.DOMelement.selectionStart);
  }
}

export default Textarea;
