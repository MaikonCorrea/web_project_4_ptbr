import {buttonSaveImageProfile, buttonOpenEditImageProfile, inputImageProfile} from "../utils/constants.js"

export default class UserInfoImage {
  constructor(popupSelector) {
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popup = document.querySelector(".photograph");
    this._closePopup = this._popup.querySelector(".button-close-popup");
    this.setEventListeners();
  }

  getUserInfo() {
    const userImage = document.querySelector(".photograph__input-link").value;
    return userImage;
  }
  open() {
    this._popup.classList.add("popup_opened");
    buttonSaveImageProfile.classList.add("photograph__button-save_disabled")
    document.addEventListener("keydown", this._handleEscClose);
    inputImageProfile.value = "";

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

  setEventListeners() {
    buttonOpenEditImageProfile.addEventListener("click", () => {
      this.open();
    });

    this._closePopup.addEventListener("click", (evt) => {
      this.close(evt);
    });

    buttonSaveImageProfile.addEventListener("click", (evt) => {
      this.close(evt)
    });

    this._popup.addEventListener("click", (evt) => {
      const elementStyle = window.getComputedStyle(evt.target);
      if (elementStyle.backgroundColor === "rgba(0, 0, 0, 0.5)") {
        this.close(evt);
      }
    });
  }


}