import Popup from "./Popup";
import {infoName, infoAbout, inputName, inputAbout  } from "../utils/constants.js";

export default class UserInfo extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formEdit = document.querySelector(".edit");
    this._submitButton = document.querySelector(".edit__button-save");
    this._openPopupEdit = document.querySelector(".profile__button-edition");
  }

  _getInputValues() {
    return {
      name: inputName.value,
      about: inputAbout.value,
    };
  }

  close() {
    super.close();
  }
  open() {
    super.open();
    inputName.value = infoName.textContent;
    inputAbout.value =infoAbout.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formEdit.addEventListener("submit", (event) => {
      event.preventDefault();
      this.close();
    });

    this._openPopupEdit.addEventListener("click", this.open.bind(this));


  }
}
