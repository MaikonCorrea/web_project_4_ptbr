import "../pages/index.css";

import FormValidation from "../scripts/FormValidation.js";
import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import PopupWhithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from "../scripts/UserInfo";
import {
  initialCards,
  cardsContainer,
  popupCard,
  popupContainerScreen,
  popupEdit} from "../scripts/utils.js";

const cardList = new Section({items: initialCards,
  render: (item) => {
 const card =  new Card(item);
 const cardElement = card.generateCard();
 cardList.addItem(cardElement);
}}, cardsContainer);

cardList.renderer();

const popupWhithForm = new PopupWhithForm((item) => {
    const newCard = new Card({name: item.title, link:item.url,});
    const cardElement = newCard.generateCard();
    popupWhithForm.addItem(cardElement);
}, popupCard);
popupWhithForm.setEventListeners();

const popupWithImage = new PopupWithImage(popupContainerScreen);
popupWithImage.setEventListeners();

const userInfo = new UserInfo(popupEdit)
userInfo.setEventListeners();

 const validator = new FormValidation({
  inputErrorClass: "span__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonIncludeClass: "include__button-save_disabled",
});

validator.enableValidation();
