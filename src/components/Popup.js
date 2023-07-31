export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closePopup = this._popup.querySelector(".button-close-popup");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close(evt) {
    this._popup.classList.add("popup_closing");
    setTimeout(() => {
      this._popup.classList.remove("popup_closing");
      this._popup.classList.remove("popup_opened");
    }, 200);
    evt.preventDefault();
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close(event);
    }
  }

  setEventListeners() {
    this._closePopup.addEventListener("click", (evt) => {
      this.close(evt);
    });
    this._popup.addEventListener("click", (evt) => {
      const elementStyle = window.getComputedStyle(evt.target);
      if (elementStyle.backgroundColor === "rgba(0, 0, 0, 0.5)") {
        this.close(evt);
      }
    });
  }
}
