import "./index.css";

import UserInfoImage from "../components/UserInfoImage.js"
import FormValidator from "../components/FormValidator.js";
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
  photographPopup,
  configValidator,
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

const popupWithImage = new PopupWithImage(popupContainerScreen);

const userInfo = new UserInfo(popupEdit);

const userInfoImage = new UserInfoImage(photographPopup);

const formValidatorEdit = new FormValidator(configValidator, popupEdit);

const formValidatorCard = new FormValidator(configValidator, popupCard);

const formValidatorPhotograph = new FormValidator(configValidator,photographPopup);


