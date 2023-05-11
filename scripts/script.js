const openPopupButton = document.querySelector('.button__edition');
const popup = document.querySelector('.popup__container');
const closePopupButton = document.querySelector('.button__close-popup');
const buttonSave = document.querySelector('.button__save');
const inputName = document.querySelector('.input__name');
const inputSobre = document.querySelector('.input__sobre');
const infoName = document.querySelector('.info__name');
const infoSobre = document.querySelector('.info__discription');
const openPopupButtonCard = document.querySelector('.button__add');
const popupCard = document.querySelector('.popup__card');
const cardsContainer = document.querySelector('.gallery');
const buttonSaveNewCard = popupCard.querySelector('.button__save');
const closePopupCardButton = popupCard.querySelector('.button__close-popup');
const inputTitle = popupCard.querySelector('.input__name');
const inputImageURL = popupCard.querySelector('.input__sobre');
const cardTemplate = document.querySelector('#gallery__card').content;
const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
const buttonDeleteCard = cardElement.querySelector('.button__delete');
const cardImageElement = cardElement.querySelector('.place__image');

//caixa de popup edição de perfil
openPopupButton.addEventListener('click', addDisplayBlockPopupClass)
function addDisplayBlockPopupClass() {
  popup.classList.add('popup_opened');
  inputName.value = infoName.textContent;
  inputSobre.value = infoSobre.textContent;

}
closePopupButton.addEventListener('click' , removeDisplayBlockPopupClass)
function removeDisplayBlockPopupClass (event) {
    popup.classList.remove('popup_opened');
    event.preventDefault();
}
buttonSave.addEventListener('click' , saveNewImputValues)
function saveNewImputValues (event) {
  event.preventDefault();
  if (inputName.value != '') {
infoName.textContent = inputName.value
  }
  if (inputSobre.value != '') {
    infoSobre.textContent = inputSobre.value
  }
  removeDisplayBlockPopupClass();
}

//função de abertura do popup card
openPopupButtonCard.addEventListener('click', addDisplayBlockPopupClassCard)

function addDisplayBlockPopupClassCard() {
  popupCard.classList.add('popup__card_opened');
}

//função de fechamento do popup card
closePopupCardButton.addEventListener('click' , removeDisplayBlockPopupCardClass)

function removeDisplayBlockPopupCardClass (event) {
  popupCard.classList.remove('popup__card_opened');
    event.preventDefault();
}

//cards iniciais da página
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  },
];

//função que cria e adiciona os cards já existentes na página
function createCard(initialCards) {
  const cardTemplate = document.querySelector('#gallery__card').content;
  const cardElement = cardTemplate.querySelector('.place').cloneNode(true);
  const cardTitleElement = cardElement.querySelector('.place__title');
  const cardImageElement = cardElement.querySelector('.place__image');
  const buttonLikeElement = cardElement.querySelector('.button__like');
  const buttonDeleteCard = cardElement.querySelector('.button__delete');

  cardTitleElement.textContent = initialCards.name;
  cardImageElement.style.backgroundImage = `url(${initialCards.link})`;

  buttonLikeElement.addEventListener('click', function (event){
    event.target.classList.toggle('button__like_active');
  });

  buttonDeleteCard.addEventListener('click', function (event) {
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
    link: link
  };

  initialCards.push(newCard);
  const cardElement = createCard(newCard);
  cardsContainer.prepend(cardElement);
}

buttonSaveNewCard.addEventListener('click', (event)=> {
  addNewCard(inputTitle.value,inputImageURL.value);
   event.preventDefault();
   inputTitle.value = '';
   inputImageURL.value = '';
   removeDisplayBlockPopupCardClass();
   return cardElement;
  })

    // Adicione um evento de clique ao elemento pai
    cardsContainer.addEventListener('click', function(event) {
      // Verifique se o clique ocorreu em um card
      if (event.target.classList.contains('place__image')) {
        const url = event.target.style.backgroundImage.slice(5, -2);
        const titleElement = event.target.closest('.place').querySelector('.place__title');
        const title = titleElement.textContent;
        openPopupImage(url, title);
      }
    });

  function openPopupImage(url, title) {
    const popupContainer = document.querySelector('.popup__container-image');
    const popupImage = document.querySelector('.popup__image-screen');
    const popupTitle = document.querySelector('.popup__title-screen');
    const closePopupCardButton = popupContainer.querySelector('.button__close-popup');

    // Defina a imagem do popup
    popupImage.style.backgroundImage = `url(${url})`;
    popupTitle.textContent = title;

    // Exiba o popup
    popupContainer.classList.add('popup__image-screen_opened');
    // Função para remover o popup e fechar
    closePopupCardButton.addEventListener('click' , removeClassOpenedPopupImage);
    function removeClassOpenedPopupImage (event) {
      popupContainer.classList.remove('popup__image-screen_opened');
    }};
