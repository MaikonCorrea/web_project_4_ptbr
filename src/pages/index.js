import "./index.css";

import FormValidation from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {initialCards, cardTemplate, cardsContainer} from "../utils/constants.js"
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage";


const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
const card = new Card(item, cardTemplate)
const cardElement = card.genetateCard()
cardList.setItem(cardElement)

}}, cardsContainer)

cardList.renderItems();

const popupForm = new PopupWithForm('.include');
popupForm.setEventListeners();

const popupUserInfo = new UserInfo('.edit');
popupUserInfo.setEventListeners();

/* const popupWithImage = new PopupWithImage("#popup-image");

const cardScreen = new Card(
  {
    name: "Exemplo de Cartão",
    link: "https://exemplo.com/imagem.jpg",
    handleCardClick: (name,link) => {
      popupWithImage.open(name, link);
    }
  },
  cardTemplate
);

const cardTemplatescreen = cardScreen.generateCard(); */



const validator = new FormValidation({
  inputErrorClass: "span__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonIncludeClass: "include__button-save_disabled",
});

validator.enableValidation();
