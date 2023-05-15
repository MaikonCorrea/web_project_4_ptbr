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
const buttonDeleteCard = cardElement.querySelector(".place__button-delete");
const cardImageElement = cardElement.querySelector(".place__image");

//caixa de popup edição de perfil
openPopupButton.addEventListener("click", addDisplayBlockPopupClass);
function addDisplayBlockPopupClass() {
  popupEdit.classList.add("edit__popup_opened");
  inputName.value = infoName.textContent;
  inputSobre.value = infoSobre.textContent;
}
closePopupButton.addEventListener("click", removeDisplayBlockPopupClass);

//função adequada para transição fluída com atraso de 200ms
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
    if (inputName.value.length > 16 && window.innerWidth <=320) {
      
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

//função de abertura do popup card
openPopupButtonCard.addEventListener("click", addDisplayBlockPopupClassCard);

function addDisplayBlockPopupClassCard() {
  popupCard.classList.add("include__card_opened");
}

//função de fechamento do popup card
closePopupCardButton.addEventListener("click", removeDisplayBlockPopupCardClass);

//função adequada para transição fluída com atraso de 200ms
function removeDisplayBlockPopupCardClass(event) {
  popupCard.classList.add("include__card_closing");
  setTimeout(() => {
    popupCard.classList.remove("include__card_closing");
    popupCard.classList.remove("include__card_opened");
  }, 200);
  event.preventDefault();
}

//cards iniciais da página
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
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
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//função que cria e adiciona os cards já existentes na página
function createCard(initialCards) {
  const cardTemplate = document.querySelector("#gallery__card").content;
  const cardElement = cardTemplate.querySelector(".place").cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".place__title");
  const cardImageElement = cardElement.querySelector(".place__image");
  const buttonLikeElement = cardElement.querySelector(".place__button-like");
  const buttonDeleteCard = cardElement.querySelector(".place__button-delete");

  cardTitleElement.textContent = initialCards.name;
  cardImageElement.style.backgroundImage = `url(${initialCards.link})`;

  buttonLikeElement.addEventListener("click", function (event) {
    event.target.classList.toggle("place__button-like_active");
  });

  buttonDeleteCard.addEventListener("click", function (event) {
    deleteCard(cardElement);
    event.preventDefault();
  });

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
});

function addNewCard(name, link) {
  const newCard = {
    name: name,
    link: link,
  };

  initialCards.push(newCard);
  const cardElement = createCard(newCard);
  cardsContainer.prepend(cardElement);
}

buttonSaveNewCard.addEventListener("click", (event) => {
  addNewCard(inputTitle.value, inputImageURL.value);
  event.preventDefault();
  inputTitle.value = "";
  inputImageURL.value = "";
  removeDisplayBlockPopupCardClass();
  return cardElement;
});

// Adicione um evento de clique ao elemento pai
cardsContainer.addEventListener("click", function (event) {
  // Verifica se o clique ocorreu em um card
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
// Extrai a URL da string do estilo de fundo (background-image)
function extractImageUrl(backgroundImage) {
  const urlRegex = /url\("(.+)"\)/;
  const match = backgroundImage.match(urlRegex);
  if (match && match.length === 2) {
    return match[1];
  }
  return null;
}

function openPopupImage(url, title) {
  const popUpContainerTamplate = document.querySelector("#screen").content;
  const popupContainerContent = popUpContainerTamplate.querySelector(".screen__image-popup").cloneNode(true);
  const popupContainerScreen = document.querySelector(".screen");
  const popupImage = popupContainerContent.querySelector(".screen__image-dynamics");
  const popupTitle = popupContainerContent.querySelector(".screen__popup-title");
  const closePopupScreenImage = popupContainerContent.querySelector(".screen__button-close-popup");

  // Defina o atributo src da imagem do popup
  popupImage.setAttribute("src", url);
  popupTitle.textContent = title;

  // Exiba o popup
  popupContainerScreen.classList.add("screen__image_opened");
  popupContainerScreen.innerHTML = ""; // Limpa o conteúdo existente
  popupContainerScreen.appendChild(popupContainerContent);

  // Função para remover a classe 'opened' do popup e fechar
  closePopupScreenImage.addEventListener("click", removeClassOpenedPopupImage);

  function removeClassOpenedPopupImage(event) {
    popupContainerScreen.classList.add("screen__image_closing");

    // Aguarda o término da transição e remove a classe
    setTimeout(() => {
      popupContainerScreen.classList.remove("screen__image_closing");
      popupContainerScreen.classList.remove("screen__image_opened");
    }, 200);
  }
}
