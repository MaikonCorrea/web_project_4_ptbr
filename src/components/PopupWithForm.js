import Popup from "./Popup";
import { inputTitle, inputImageURL } from "../utils/constants.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = document.querySelector('.include');
    this._submitCallback = submitCallback;
    this._submitButton = document.querySelector('.include__button-save');
    this._openPopupInclude = document.querySelector('.profile__button-add-card')
  }

  _getInputValues() {
    return {
      title: inputTitle.value,
      url: inputImageURL.value
    };
  }

   close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._openPopupInclude.addEventListener('click', this.open.bind(this));
    this._submitButton.addEventListener('click', this.close.bind(this));
  }

}


