import state from './state';
import Keyboard from './Keyboard.class';
import Layout from './Layout.class';
import Textarea from './Textarea.class';
import Footer from './Footer.class';

class App {
  init() {
    const layout = new Layout();
    const keyboard = new Keyboard();
    const textarea = new Textarea();
    state.textarea = textarea;
    layout.draw();
    textarea.draw();
    keyboard.draw();

    keyboard.fillWithKeys();
    const footer = new Footer();
    footer.draw();
  }

  finish() {

  }
}

export default App;
