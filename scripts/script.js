const openPopupButton = document.querySelector(".button__edition-profile");
const popup = document.querySelector(".popup__container");
const closePopupButton = document.querySelector(".button__close-popup");
const buttonSave = document.querySelector(".button__save");
const inputName = document.querySelector(".input__name");
const inputSobre = document.querySelector(".input__sobre");
const infoName = document.querySelector(".info__name");
const infoSobre = document.querySelector(".info__discription");
const openPopupButtonCard = document.querySelector(".button__add-card");
const popupCard = document.querySelector(".popup__card");
const cardsContainer = document.querySelector(".gallery");
const buttonSaveNewCard = popupCard.querySelector(".button__save");
const closePopupCardButton = popupCard.querySelector(".button__close-popup");
const inputTitle = popupCard.querySelector(".input__name");
const inputImageURL = popupCard.querySelector(".input__sobre");
const cardTemplate = document.querySelector("#gallery__card").content;
const cardElement = cardTemplate.querySelector(".place").cloneNode(true);
const buttonDeleteCard = cardElement.querySelector(".button__delete");
const cardImageElement = cardElement.querySelector(".place__image");

//caixa de popup edição de perfil
openPopupButton.addEventListener("click", addDisplayBlockPopupClass);
function addDisplayBlockPopupClass() {
  popup.classList.add("popup__container_opened");
  inputName.value = infoName.textContent;
  inputSobre.value = infoSobre.textContent;
}
closePopupButton.addEventListener("click", removeDisplayBlockPopupClass);

//função adequada para transição fluída com atraso de 200ms
function removeDisplayBlockPopupClass(event) {
  popup.classList.add("popup__container_closing");
  setTimeout(() => {
    popup.classList.remove("popup__container_closing");
    popup.classList.remove("popup__container_opened");
  }, 200);
  event.preventDefault();
}
buttonSave.addEventListener("click", saveNewImputValues);
function saveNewImputValues(event) {
  event.preventDefault();
  if (inputName.value != "") {
    infoName.textContent = inputName.value;
  }
  if (inputSobre.value != "") {
    infoSobre.textContent = inputSobre.value;
  }
  removeDisplayBlockPopupClass();
}

//função de abertura do popup card
openPopupButtonCard.addEventListener("click", addDisplayBlockPopupClassCard);

function addDisplayBlockPopupClassCard() {
  popupCard.classList.add("popup__card_opened");
}

//função de fechamento do popup card
closePopupCardButton.addEventListener("click", removeDisplayBlockPopupCardClass);

//função adequada para transição fluída com atraso de 200ms
function removeDisplayBlockPopupCardClass(event) {
  popupCard.classList.add("popup__card_closing");
  setTimeout(() => {
    popupCard.classList.remove("popup__card_closing");
    popupCard.classList.remove("popup__card_opened");
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
  const buttonLikeElement = cardElement.querySelector(".button__like");
  const buttonDeleteCard = cardElement.querySelector(".button__delete");

  cardTitleElement.textContent = initialCards.name;
  cardImageElement.style.backgroundImage = `url(${initialCards.link})`;

  buttonLikeElement.addEventListener("click", function (event) {
    event.target.classList.toggle("button__like_active");
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
  const popUpContainerTamplate = document.querySelector(
    "#popup__container-image"
  ).content;
  const popupContainerContent = popUpContainerTamplate
    .querySelector(".popup__image-screen")
    .cloneNode(true);
  const popupContainer = document.querySelector(".popup__container-image");
  const popupImage = popupContainerContent.querySelector(
    ".popup__image-dynamics"
  );
  const popupTitle = popupContainerContent.querySelector(
    ".popup__title-screen"
  );
  const closePopupScreenImage = popupContainerContent.querySelector(
    ".button__image-screen-close-popup"
  );

  // Defina o atributo src da imagem do popup
  popupImage.setAttribute("src", url);
  popupTitle.textContent = title;

  // Exiba o popup
  popupContainer.classList.add("popup__image-screen_opened");
  popupContainer.innerHTML = ""; // Limpa o conteúdo existente
  popupContainer.appendChild(popupContainerContent);

  // Função para remover a classe 'opened' do popup e fechar
  closePopupScreenImage.addEventListener("click", removeClassOpenedPopupImage);

  function removeClassOpenedPopupImage(event) {
    popupContainer.classList.add("popup__image-screen_closing");

    // Aguarda o término da transição e remove a classe
    setTimeout(() => {
      popupContainer.classList.remove("popup__image-screen_closing");
      popupContainer.classList.remove("popup__image-screen_opened");
    }, 200);
  }
}
