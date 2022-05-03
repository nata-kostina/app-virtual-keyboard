import AbstractElement from './AbstractElement.class';
import { body } from './constants';
class Layout extends AbstractElement {
	constructor() {
		super()
		this.createElement({
			tag: 'main', value: `
		<div class="container">
		<div class="main__inner">
		<h1 class="title">Virtual Keyboard</h1>
		<p class="info">Information</p>
		<textarea name="textarea" cols="30" rows="10" className="textarea"	
		autocomplete= "off" autofocus readonly placeholder= 'Enter text...'></textarea>
		</div>
		</div>
		
		`});
		this.addClass('main');
	}

	draw() {
		this.drawElement({ container: body, place: 'afterbegin' });
	}
}

export default Layout;