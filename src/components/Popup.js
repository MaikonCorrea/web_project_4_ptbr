export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".close-button");
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("click", this._handleOverlayClick);
    this._closeButton.addEventListener("click", this.close.bind(this));
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener("click", this._handleOverlayClick);
    this._closeButton.removeEventListener("click", this.close.bind(this));
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleOverlayClick = (event) => {
    if (event.target === this._popup) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", this.close.bind(this));
    this._openPopupInclude.addEventListener("click", this.open.bind(this));
  }
}
