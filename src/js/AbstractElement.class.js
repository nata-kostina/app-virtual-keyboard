class AbstractElement {

	createElement({ tag, ...options }) {
		this.DOMelement = document.createElement(tag);
		options.value ? this.DOMelement.innerHTML = `${options.value}` : this.DOMelement.innerHTML = ``;
	}
	addClass(classes) {
		this.DOMelement.classList.add(classes);
	}

	drawElement({ container, place, ...options }) {
		container.insertAdjacentElement(`${place}`, this.DOMelement);
	}
}

export default AbstractElement;