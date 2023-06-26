import Card from "../components/Card.js";


  export const openPopupEditButton = document.querySelector(
    ".profile__button-edition"
  );
  export const popupEdit = document.querySelector(".edit");
  export const closePopupEditButton = document.querySelector(
    ".edit__button-close-popup"
  );
  export const buttonSave = document.querySelector(".edit__button-save");
  export const inputName = document.querySelector(".edit__input-name");
  export const inputAbout = document.querySelector(".edit__input-about");
  export const infoName = document.querySelector(".profile__info-name");
  export const infoAbout = document.querySelector(".profile__info-discription");
  export const openPopupButtonCard = document.querySelector(
    ".profile__button-add-card"
  );
  export const popupCard = document.querySelector(".include");
  export const cardsContainer = document.querySelector(".gallery");
  export const buttonSaveNewCard = popupCard.querySelector(".include__button-save");
  export const closePopupCardButton = popupCard.querySelector(
    ".include__button-close-popup"
  );
  export const inputTitle = popupCard.querySelector(".include__input-title");
  export const inputImageURL = popupCard.querySelector(".include__input-link");

  export const cardTemplate = document.querySelector("#gallery__card").content;
  export const cardElement = cardTemplate.querySelector(".place").cloneNode(true);

  export const popUpContainerTamplate = document.querySelector("#screen").content;
  export const popupContainerContent = popUpContainerTamplate.querySelector(".screen__image-popup").cloneNode(true);

  export const popupContainerScreen = document.querySelector(".screen");
  export const popupImage = popupContainerContent.querySelector(
    ".screen__image-dynamics"
  );
  export const popupTitle = popupContainerContent.querySelector(
    ".screen__popup-title"
  );
  export const closePopupScreenImage = popupContainerContent.querySelector(
    ".screen__button-close-popup"
  );

  openPopupEditButton.addEventListener("click", () => {
    addDisplayBlockPopupClass(popupEdit, inputName, inputAbout, infoName, infoAbout);
  });
  function addDisplayBlockPopupClass() {
    popupEdit.classList.add("edit__popup_opened");
    inputName.value = infoName.textContent;
    inputAbout.value = infoAbout.textContent;
  }

  closePopupEditButton.addEventListener("click", removeDisplayBlockPopupClass);
  function removeDisplayBlockPopupClass(event) {
    popupEdit.classList.add("edit__popup_closing");
    setTimeout(() => {
      popupEdit.classList.remove("edit__popup_closing");
      popupEdit.classList.remove("edit__popup_opened");
    }, 200);
    event.preventDefault();
  }

  buttonSave.addEventListener("click", saveNewInputValues);
  function saveNewInputValues(event) {
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

    if (inputAbout.value != "") {
      infoAbout.textContent = inputAbout.value;
    }
    removeDisplayBlockPopupClass(event);
  }

  openPopupButtonCard.addEventListener("click", addDisplayBlockPopupClassCard);
  function addDisplayBlockPopupClassCard() {
    popupCard.classList.add("include__card_opened");
    buttonSaveNewCard.setAttribute("disabled", true);
    buttonSaveNewCard.classList.add("include__button-save_disabled");
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
    removeDisplayBlockPopupCardClass(event);
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
        forms.reset()
      }
      if (popupContainerScreen.classList.contains("screen__image_opened")) {
        removeClassOpenedPopupImage(event);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit__popup_opened")) {
      removeDisplayBlockPopupClass(event);
    }
    if (event.target.classList.contains("include__card_opened")) {
      removeDisplayBlockPopupCardClass(event);
    }
    if (event.target.classList.contains("screen__image_opened")) {
      removeClassOpenedPopupImage(event);
    }
  });


export const initialCards = [
  {
    name: "Yellostone National Park",
    link: "https://images.unsplash.com/photo-1565108150023-cc0fd1054149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Colorado River",
    link: "https://images.unsplash.com/photo-1589973488443-496846cae737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://images.unsplash.com/photo-1558150503-0fdcce137289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
  },
];
