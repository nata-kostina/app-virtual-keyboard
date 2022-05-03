import AbstractElement from './AbstractElement.class';
class Key extends AbstractElement{
	constructor(value, type){
		super()
		this.createElement({ tag: 'button', value });
		this.addClass('key');
	}

	draw(){
		const keyboard = body.querySelector('.keyboard');
		if (keyboard) { this.drawElement({ container: keyboard, place: `beforeend` }); }
	}
}

export default Key;