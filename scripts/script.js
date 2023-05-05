const openPopupButton = document.querySelector('.button__edition');
const popup = document.querySelector('.popup__container');
const closePopupButton = document.querySelector('.button__close-popup');
const buttonSave = document.querySelector('.button__save');
const inputName = document.querySelector('.input__name');
const inputSobre = document.querySelector('.input__sobre');
const infoName = document.querySelector('.info__name');
const infoSobre = document.querySelector('.info__discription');

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

//botão para abertura do popup de adição de cards
const openPopupButtonCard = document.querySelector('.button__add');
const popupCard = document.querySelector('.popup__card');

//caixa para adicionar os cards
openPopupButtonCard.addEventListener('click', addDisplayBlockPopupClassCard)
function addDisplayBlockPopupClassCard() {
  popupCard.classList.add('popup_opened-card');
}

//verificar pois está abrindo o mesmo card
