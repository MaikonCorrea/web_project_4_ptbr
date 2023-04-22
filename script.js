let openPopupButton = document.querySelector('.button__edition');
let popup = document.querySelector('.popup');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
