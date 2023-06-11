const options = (function() {
const openPopupButton = document.querySelector(".profile__button-edition");
const popupEdit = document.querySelector(".edit");
const closePopupButton = document.querySelector(".edit__button-close-popup");
const buttonSave = document.querySelector(".edit__button-save");
const inputName = document.querySelector(".edit__input-name");
const inputSobre = document.querySelector(".edit__input-about");
const infoName = document.querySelector(".profile__info-name");
const infoSobre = document.querySelector(".profile__info-discription");
const openPopupButtonCard = document.querySelector(".profile__button-add-card");
const popupCard = document.querySelector(".include");
const cardsContainer = document.querySelector(".gallery");
const buttonSaveNewCard = popupCard.querySelector(".include__button-save");
const closePopupCardButton = popupCard.querySelector(".include__button-close-popup");
const inputTitle = popupCard.querySelector(".include__input-title");
const inputImageURL = popupCard.querySelector(".include__input-link");
const cardTemplate = document.querySelector("#gallery__card").content;
const cardElement = cardTemplate.querySelector(".place").cloneNode(true);
const popUpContainerTamplate = document.querySelector("#screen").content;
const popupContainerContent = popUpContainerTamplate.querySelector(".screen__image-popup").cloneNode(true);
const popupContainerScreen = document.querySelector(".screen");
const popupImage = popupContainerContent.querySelector(".screen__image-dynamics");
const popupTitle = popupContainerContent.querySelector(".screen__popup-title");
const closePopupScreenImage = popupContainerContent.querySelector(".screen__button-close-popup");

openPopupButton.addEventListener("click", addDisplayBlockPopupClass);
function addDisplayBlockPopupClass() {
  popupEdit.classList.add("edit__popup_opened");
  inputName.value = infoName.textContent;
  inputSobre.value = infoSobre.textContent;
}

closePopupButton.addEventListener("click", removeDisplayBlockPopupClass);
function removeDisplayBlockPopupClass(event) {
  popupEdit.classList.add("edit__popup_closing");
  setTimeout(() => {
    popupEdit.classList.remove("edit__popup_closing");
    popupEdit.classList.remove("edit__popup_opened");
  }, 200);
  event.preventDefault();
}

buttonSave.addEventListener("click", saveNewImputValues);
function saveNewImputValues(event) {
  event.preventDefault();
  if (inputName.value != "") {
    infoName.textContent = inputName.value;

    if (inputName.value.length > 17) {
      infoName.classList.add("profile__info-name_smaller");
    } else {
      infoName.classList.remove("profile__info-name_smaller");
    }
    if (inputName.value.length > 16 && window.innerWidth <= 320) {
      infoName.classList.add("profile__info-name_smallest");
    } else {
      infoName.classList.remove("profile__info-name_smallest");
    }
  }

  if (inputSobre.value != "") {
    infoSobre.textContent = inputSobre.value;
  }

  removeDisplayBlockPopupClass();
}

openPopupButtonCard.addEventListener("click", addDisplayBlockPopupClassCard);

function addDisplayBlockPopupClassCard() {
  popupCard.classList.add("include__card_opened");
}

closePopupCardButton.addEventListener(
  "click",
  removeDisplayBlockPopupCardClass
);

function removeDisplayBlockPopupCardClass(event) {
  popupCard.classList.add("include__card_closing");
  setTimeout(() => {
    popupCard.classList.remove("include__card_closing");
    popupCard.classList.remove("include__card_opened");
  }, 200);
  event.preventDefault();
}
function generateCard(name, link) {
  const card = new Card(name, link);
  const cardElement = card.generateCard();
  initialCards.push(card);
  cardsContainer.prepend(cardElement);
}

buttonSaveNewCard.addEventListener("click", (event) => {
  generateCard(inputTitle.value, inputImageURL.value);
  event.preventDefault();
  inputTitle.value = "";
  inputImageURL.value = "";
  removeDisplayBlockPopupCardClass();
  return cardElement;
});

cardsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("place__image")) {
    const style = window.getComputedStyle(event.target);
    const backgroundImage = style.getPropertyValue("background-image");
    const url = extractImageUrl(backgroundImage);
    const titleElement = event.target
      .closest(".place")
      .querySelector(".place__title");
    const title = titleElement.textContent;
    openPopupImage(url, title);
  }
});

function extractImageUrl(backgroundImage) {
  const urlRegex = /url\("(.+)"\)/;
  const match = backgroundImage.match(urlRegex);
  if (match && match.length === 2) {
    return match[1];
  }
  return null;
}

function openPopupImage(url, title) {
  popupImage.setAttribute("src", url);
  popupTitle.textContent = title;
  popupContainerScreen.classList.add("screen__image_opened");
  popupContainerScreen.innerHTML = "";
  popupContainerScreen.appendChild(popupContainerContent);
}

closePopupScreenImage.addEventListener("click", removeClassOpenedPopupImage);
function removeClassOpenedPopupImage(event) {
  popupContainerScreen.classList.add("screen__image_closing");
  setTimeout(() => {
    popupContainerScreen.classList.remove("screen__image_closing");
    popupContainerScreen.classList.remove("screen__image_opened");
  }, 200);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (popupEdit.classList.contains("edit__popup_opened")) {
      removeDisplayBlockPopupClass(event);
    }
    if (popupCard.classList.contains("include__card_opened")) {
      removeDisplayBlockPopupCardClass(event);
    }
    if (popupContainerScreen.classList.contains("screen__image_opened")) {
      removeClassOpenedPopupImage(event);
    }
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit__popup_opened")) {
    removeDisplayBlockPopupClass();
  }
  if (event.target.classList.contains("include__card_opened")) {
    removeDisplayBlockPopupCardClass();
  }
  if (event.target.classList.contains("screen__image_opened")) {
    removeClassOpenedPopupImage(event);
  }
});
}());

import { Card, initialCards } from "./Card.js"
export {Card as Card, initialCards as initial, options as Utils};