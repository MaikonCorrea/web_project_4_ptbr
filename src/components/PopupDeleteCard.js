import Popup from "./Popup.js";
import { deleteCardApi } from "../pages/index.js";
export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this.buttonConfirmDelete = this._popup.querySelector(
      ".delete__button-save"
    );
    this._submitCallback = submitCallback;
    this.setEventListeners();
  }

  open() {
    super.open();
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
  openConfirmDeleteCard(id) {
    console.log(id)
    this.open()

  }

  cardDeletionConfirmed() {

  }

  setEventListeners() {
    super.setEventListeners();
    this.buttonConfirmDelete.addEventListener("click", (evt) => {
      this.close(evt);
    });
  }
}
