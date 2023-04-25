const openPopupButton = document.querySelector('.button__edition');
const popup = document.querySelector('.popup__container');
const closePopupButton = document.querySelector('.button__close-popup');
const buttonSave = document.querySelector('.button__save');
const inputName = document.querySelector('.input__name');
const inputSobre = document.querySelector('.input__sobre');
const infoName = document.querySelector('.info__name');
const infoSobre = document.querySelector('.info__discription')


openPopupButton.addEventListener('click', addDisplayBlockPopupClass)
function addDisplayBlockPopupClass() {
  popup.classList.add('popup_opened');
}
closePopupButton.addEventListener('click' , removeDisplayBlockPopupClass)
function removeDisplayBlockPopupClass () {
  popup.classList.remove('popup_opened');
}
buttonSave.addEventListener('click' , saveNewImputValues)
function saveNewImputValues (event) {
  event.preventDfault();
  if (inputName.value != '') {
infoName.textContent = inputName.value
  }

  if (inputSobre.value != "") {
    infoSobre.textContent = inputSobre.value
  }
  removeDisplayBlockPopupClass();
}
