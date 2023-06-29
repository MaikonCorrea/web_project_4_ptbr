import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(".include");
    this._inputTitle = this._popupSelector.querySelector(".include__input-title");
    this._inputLink = this._popupSelector.querySelector(".include__input-link");
    this._submitButton = this._popupSelector.querySelector(".include__button-save");
    this._openPopupInclude = document.querySelector(".profile__button-add-card");
  }

  _getInputValues() {
    return {
      title: this._inputTitle.value,
      url: this._inputLink.value,
    };
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      const formValues = this._getInputValues();
    });
  }

  close() {
    super.close();
  }
  open() {
    super.open();
  }
}
