import AbstractElement from './AbstractElement.class';
import { body } from './constants';

class Footer extends AbstractElement {
  constructor() {
    super();
    this.DOMelement = this.createElement({
      tag: 'footer', value: `
      <div class="container">
      <div class="footer__inner">
      <p class="info">OS: Windows 10</p>
      <p class="info">Change language: <b>Shift Left + Alt Left</b></p>
      </div>
      </div>
      `,
    });
    this.addClass(this.DOMelement, 'footer');
  }

  draw() {
    this.drawElement(this.DOMelement, { container: body, place: 'beforeend' });
  }
}

export default Footer;
