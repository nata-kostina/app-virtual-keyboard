import * as constants from './constants.js'
import './state.js'
import Keyboard from './Keyboard.class.js';
import Layout from './Layout.class.js';
class App {
	constructor() {
	}

	init() {
		const layout = new Layout();
		const keyboard = new Keyboard();
		layout.draw();
		keyboard.draw();
	}

	finish() {

	}
}

export default App;