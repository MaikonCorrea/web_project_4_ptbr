import "./index.css";

import FormValidation from "../components/FormValidation.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo";
import {
  initialCards,
  cardsContainer,
  popupCard,
  popupContainerScreen,
  popupEdit,
} from "../utils/constants.js";

const cardList = new Section(
  {
    items: initialCards,
    render: (item) => {
      const card = new Card(item);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardsContainer
);

cardList.renderer();

const popupWhithForm = new PopupWhithForm((item) => {
  const newCard = new Card({ name: item.title, link: item.url });
  const cardElement = newCard.generateCard();
  popupWhithForm.addItem(cardElement);
}, popupCard);
popupWhithForm.setEventListeners();

const popupWithImage = new PopupWithImage(popupContainerScreen);
popupWithImage.setEventListeners();

const userInfo = new UserInfo(popupEdit);
userInfo.setEventListeners();

const validator = new FormValidation({
  inputErrorClass: "span__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonIncludeClass: "include__button-save_disabled",
});

validator.enableValidation();
