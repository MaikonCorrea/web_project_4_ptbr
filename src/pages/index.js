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
  inputTitleInclude,
  inputUrlInclude,
  popupDelete,
  buttonDeleteCard,
} from "../utils/constants.js";
import PopupDeleteCard from "../components/PopupDeleteCard";



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
  clientAPI
    .createCards({
      likes: [],
      name: inputTitleInclude.value,
      link: inputUrlInclude.value,
      owner: owner,
      createdAt: new Date().toISOString(),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then((res) => {
      const newCard = new Card({
        item: {
          _id: res._id,
          name: res.name,
          link: res.link,
          owner,
        },templateSelector: ".place"
      })
      const card = newCard.generateCard();
      cardList.addItem(card);
    })
    .catch((err) => {
      alert(`Error: ${err}`);
    });
}, popupCard);


let idItem;
export function handleDeletCardId(event) {
  const ElementId = event.target.closest(".place");
  if (ElementId) {
    idItem = ElementId.getAttribute("id");
  }
}

export function confirmDelete() {
  clientAPI
    .deleteCard(idItem)
    .then((res) => {
      if (res.ok) {
        const elementToRemove = document.getElementById(idItem);
        if (elementToRemove) {
          elementToRemove.remove();
        }
      }
    })
    .catch((error) => {
      alert("Erro ao excluir o item:", error);
    });
}

const popupWithImage = new PopupWithImage(popupContainerScreen);

const userInfo = new UserInfo(popupEdit);

const userInfoImage = new UserInfoImage(photographPopup);

const popupDeleteCard = new PopupDeleteCard(popupDelete);

const formValidatorEdit = new FormValidator(configValidator, popupEdit);

const formValidatorCard = new FormValidator(configValidator, popupCard);

const formValidatorPhotograph = new FormValidator(configValidator,photographPopup);
