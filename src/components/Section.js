export default class Section {
  constructor({items, renderer}, templateSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = templateSelector;
  }

  setItem(element) {
    console.log(element);
    this._container.append(element);
  }


  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._items.forEach((item) => {
      this._renderer(item);
    });
  }


};