import AbstractElement from './AbstractElement.class';
import { body } from './constants';
class Keyboard extends AbstractElement {
	constructor() {
		super()
		this.createElement({ tag: 'div' });
		this.addClass('keyboard');
	}
	draw() {
		
		const container = body.querySelector('.container');
		if (container) { this.drawElement({ container: container, place: `beforeend` }); }
	}
}

export default Keyboard;