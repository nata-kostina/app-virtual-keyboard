import AbstractElement from './AbstractElement.class';
import { body } from './constants';
class Layout extends AbstractElement {
	constructor() {
		super()
		this.DOMelement = this.createElement({
			tag: 'main', value: `
		<div class="container">
		<div class="main__inner">
		<h1 class="title">Virtual Keyboard</h1>
		<p class="info">Information</p>

		</div>
		</div>
		
		`});
		this.addClass(this.DOMelement, 'main');
		// document.addEventListener('keydown', (event) => {
		// 	event.preventDefault();
		// 	console.log('hi')
		// })
	}

	draw() {
		this.drawElement(this.DOMelement, { container: body, place: 'afterbegin' });
	}
}

export default Layout;