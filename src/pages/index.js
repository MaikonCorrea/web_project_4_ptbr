import "./index.css";

import UserInfoImage from "../components/UserInfoImage.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  owner,
  cardsContainer,
  popupCard,
  popupContainerScreen,
  popupEdit,
  photographPopup,
  configValidator,
} from "../utils/constants.js";

const clientAPI = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
  token: "e2bad784-3e1f-478a-b640-635d640e7341",
});
let cardList;

clientAPI
  .getCards()
  .then((res) => res.json())
  .then((res) => {
    cardList = new Section(
      {
        items: res,
        render: (item) => {
          const card = new Card({
            item: item,
            templateSelector: ".place",
            deleteCard: () => deleteCard(item),
          });
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        },
      },
      cardsContainer
    );
    cardList.renderer();
  });

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

const formValidatorPhotograph = new FormValidator(
  configValidator,
  photographPopup
);

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
  headers: {
    authorization: "e2bad784-3e1f-478a-b640-635d640e7341",
    "Content-Type": "application/json",
  },
});
fetch("https://around.nomoreparties.co/v1/web_ptbr_05/cards", {
  headers: {
    authorization: "e2bad784-3e1f-478a-b640-635d640e7341",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
