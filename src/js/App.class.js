import * as constants from './constants.js'
import { state } from './state.js'
import Keyboard from './Keyboard.class.js';
import Layout from './Layout.class.js';
import Textarea from './Textarea.class';
class App {
	constructor() {
	}

	init() {
		
		const layout = new Layout();
		const keyboard = new Keyboard();
		const textarea = new Textarea();
		state.textarea = textarea;
		layout.draw();
		textarea.draw();
		keyboard.draw();

		keyboard.fillWithKeys();	
	}

	finish() {

	}
}

export default App;