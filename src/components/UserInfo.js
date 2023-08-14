import { getDescriptionPerfil } from "../pages/index.js";

import {
  inputName,
  infoName,
  inputAbout,
  infoAbout,
  openPopupEditButton,
  buttonSave,
} from "../utils/constants.js";

export default class UserInfo {
  constructor(popupSelector) {
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popup = document.querySelector(".edit");
    this._closePopup = this._popup.querySelector(".button-close-popup");
    this.setEventListeners();
  }

  getUserInfo() {
    const userName = document.querySelector(".edit__input-name").value;
    const userWork = document.querySelector(".edit__input-about").value;
    return { newName: userName, newWork: userWork };
  }

  setUserInfo() {
    const { newName, newWork } = this.getUserInfo();

    infoName.textContent = newName;
    infoAbout.textContent = newWork;
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    inputName.value = infoName.textContent;
    inputAbout.value = infoAbout.textContent;
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
    const container = document.querySelector(".edit");
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
    openPopupEditButton.addEventListener("click", () => {
      this.open();
    });

    this._closePopup.addEventListener("click", (evt) => {
      this.close(evt);
    });

    buttonSave.addEventListener("click", (evt) => {
      this.close(evt);
      this.getUserInfo();
      this.setUserInfo();
      getDescriptionPerfil();
    });

    this._popup.addEventListener("click", (evt) => {
      const elementStyle = window.getComputedStyle(evt.target);
      if (elementStyle.backgroundColor === "rgba(0, 0, 0, 0.5)") {
        this.close(evt);
      }
    });
  }
}
