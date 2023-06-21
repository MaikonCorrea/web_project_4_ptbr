export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._element = this.getTemplate();
    this._buttonLikeElement = this._element.querySelector(".place__button-like");
    this._buttonDeleteCard = this._element.querySelector(".place__button-delete");

    this._buttonLikeElement.addEventListener("click", () => {
      this._buttonLikeElement.classList.toggle("place__button-like_active");
    });

    this._buttonDeleteCard.addEventListener("click", () => {
      this.deleteCard();
    });

    this._element.querySelector(
      ".place__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".place__title").textContent = this._name;
  }

  getTemplate() {
    const cardTemplate = document.querySelector("#gallery__card").content.querySelector(".place").cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }
}