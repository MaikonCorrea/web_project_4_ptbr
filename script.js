let openPopupButton = document.querySelector('.button__edition');//nomeia o botão de edição
let popup = document.querySelector('.popup__container');//nomeia o formulário a ser aberto
let closePopupButton = document.querySelector('.button__image-close');//seleciona o

openPopupButton.addEventListener('click', () => { // botão a ser clicado
  popup.style.display = 'block'; // mudança de estado do bloco
});

popup.addEventListener('click', (event) => {
  if (event.target === closePopupButton) {
    popup.style.display = 'none';
  }
});
