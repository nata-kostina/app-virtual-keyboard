class AbstractElement {

	createElement({ tag, ...options }) {
		let DOMelement = document.createElement(tag);
		options.value ? DOMelement.innerHTML = `${options.value}` : DOMelement.innerHTML = ``;
		if (options.attributes){			
			for (let key in options.attributes){				
				DOMelement.setAttribute(key, options.attributes[key])
			}
		}
		return DOMelement
	}
	addClass(DOMelement, classes) {
		DOMelement.classList.add(classes);
	}

	drawElement(DOMelement, { container, place, ...options }) {
		container.insertAdjacentElement(`${place}`, DOMelement);
	}

	addListener(DOMelement, event, handler) {		
		DOMelement.addEventListener(event, (e) => handler(e));
	}

	addDataAttributes(DOMelement, {type, value}){
		DOMelement.dataset[type] = value;
	}

}

export default AbstractElement;