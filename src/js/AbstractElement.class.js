class AbstractElement {
  createElement({ tag, ...options }) {
    const DOMelement = document.createElement(tag);
    if (options.value) {
      DOMelement.innerHTML = `${options.value}`;
    } else {
      DOMelement.innerHTML = '';
    }
    if (options.attributes) {
      options.attributes.forEach((key) => DOMelement.setAttribute(key, options.attributes[key]));
    }
    return DOMelement;
  }

  addClass(DOMelement, classes) {
    DOMelement.classList.add(classes);
  }

  drawElement(DOMelement, { container, place }) {
    container.insertAdjacentElement(`${place}`, DOMelement);
  }

  addListener(DOMelement, event, handler) {
    DOMelement.addEventListener(event, (e) => handler(e));
  }
}

export default AbstractElement;
