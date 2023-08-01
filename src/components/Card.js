export default class Card {
  constructor({name, link}) {
    this._name = name;
    this._link = link;
  };

  getTemplate() {
    const cardTemplate = document.querySelector("#gallery__card").content.querySelector(".place").cloneNode(true);

    return cardTemplate;
  };

  generateCard() {
    this._element = this.getTemplate();
    this._element.querySelector(".place__image").src = `${this._link}`;
    this._element.querySelector(".place__image").alt = `${this._name}`
    this._element.querySelector(".place__title").textContent = this._name;
    this._buttonLikeElement = this._element.querySelector(".place__button-like");
    this._buttonDeleteCard = this._element.querySelector(".place__button-delete");
    this.setEventListeners();
    return this._element;
  };

  setEventListeners() {
    this._buttonLikeElement.addEventListener("click", () => {
      this._buttonLikeElement.classList.toggle("place__button-like_active");
    });

    this._buttonDeleteCard.addEventListener("click", () => {
      this.deleteCard();
    });
  };

  deleteCard() {
    this._element.remove();
  };
};
