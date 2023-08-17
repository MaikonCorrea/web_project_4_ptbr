import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.setEventListeners();
  }

  

  close(evt) {
    super.close(evt);
  }

  _handleEscClose(evt) {
    super._handleEscClose(evt);
  }

  renderLoading(isLoading) {
    super._handleEscClose(isLoading);
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
