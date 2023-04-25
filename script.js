const openPopupButton = document.querySelector('.button__edition');
const popup = document.querySelector('.popup__container');
const closePopupButton = document.querySelector('.button__close-popup');
const buttonSave = document.querySelector('.button__save')

openPopupButton.addEventListener('click', addDisplayBlockPopupClass);
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
}
