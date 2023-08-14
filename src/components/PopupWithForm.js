import { updateLikeData, updatePageData } from "../pages/index.js";
import Popup from "./Popup.js";
import { buttonSaveNewCard, openPopupButtonCard } from "../utils/constants.js";

export default class PopupWhithForm extends Popup {
  constructor(submitCallback, popupSelector) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._getInputValues = this._getInputValues.bind(this);
    this._container = document.querySelector(".gallery");
    this.setEventListeners();
  }

  _getInputValues() {
    const inputs = this._popup.querySelectorAll(".input");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  open() {
    super.open();
    buttonSaveNewCard.setAttribute("disabled", true);
    buttonSaveNewCard.classList.add("include__button-save_disabled");
    this._popup.reset();
  }

  renderLoading(isLoading) {
    const container = document.querySelector(".include");
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
    super.setEventListeners();
    openPopupButtonCard.addEventListener("click", () => {
      this.open();
    });
    buttonSaveNewCard.addEventListener("click", (evt) => {
      evt.preventDefault();
      setTimeout(updatePageData, 900);
      setTimeout(updateLikeData, 910);
      const formData = this._getInputValues();
      this._submitCallback(formData);
      setTimeout(() => {
        this.close(evt);
      }, 1000);
    });
  }
}
