import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.setEventListeners();
  }

  close(evt) {
    super.close(evt)
  }

  _handleEscClose(evt) {
    super._handleEscClose(evt)
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
    super.setEventListeners()
  }
}
