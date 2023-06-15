import FormValidation from "./FormValidation.js";
import Card from "./Card.js";
import { setEventListeners, initialCards } from "./utils.js";

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardTemplate = card.generateCard();

  document.querySelector(".gallery").append(cardTemplate);
});

 const validator = new FormValidation({
  inputErrorClass: "span__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonIncludeClass: "include__button-save_disabled",
});

validator.enableValidation();

setEventListeners();