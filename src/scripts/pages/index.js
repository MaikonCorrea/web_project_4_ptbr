import "../../styles/index.css";
import FormValidation from "../components/FormValidation.js";
import Card from "../components/Card.js";
import {
initialCards,
 } from "../utils/contents.js";

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