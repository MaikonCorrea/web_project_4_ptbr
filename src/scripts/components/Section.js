export default class Section {
  constructor({items, renderer}, cardsContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardsContainer);
  }



}