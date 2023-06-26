export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupImage = this._popupElement.querySelector('.place__image');
    this.popupTitle = this._popupElement.querySelector('.place__title');
  }

  open(url, title) {
    this.popupImage.setAttribute('src', url);
    this.popupTitle.textContent = title;
    super.open();
  }
}