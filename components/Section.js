export default class Section {
  constructor({ items, render }, selector) {
    this._items = items;
    this._render = render;
    this._container = document.querySelector(selector);
  }

  setItem() {
    this._container.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._render(item);
    });
  }
}
