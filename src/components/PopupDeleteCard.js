import { confirmDeleteCard } from "../pages/index.js";

export default class PopupDeleteCard {
  constructor(popupSelector) {
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popup = document.querySelector(".delete");
    this._closePopup = this._popup.querySelector(".delete__button-close-popup");
    this._confirmDelete = this._popup.querySelector(".delete__button-save");
    this.setEventListeners();
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

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(evt);
    }
  }

  renderLoading(isLoading) {
    const container = document.querySelector(".delete");
    const textButton = container.querySelector(".loading-button-text");
    const loading = container.querySelector(".loading-container");
    if (isLoading) {
      textButton.classList.add("loading-closed");
      loading.classList.add("loading-opened");
    } else {
      loading.classList.remove("loading-opened");
      textButton.classList.remove("loading-closed");
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
    this._confirmDelete.addEventListener("click", (evt) => {
      this.close(evt);
      confirmDeleteCard(evt);
    });
  }
}
