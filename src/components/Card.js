import {owner} from "../utils/constants.js"

export default class Card {
  constructor({item, templateSelector, deleteCard}) {
    this._templateSelector = templateSelector;
    this._id = item.id;
    this._title = item.title;
    this._url - item.link;
    this._owner = item.owner;
    this.deleteCard = deleteCard;
  };

  getTemplate() {
    const cardTemplate = document.querySelector("#gallery__card").content.querySelector(".place").cloneNode(true);

    return cardTemplate;
  };

  generateCard() {
    this._element = this.getTemplate();
    this._element.setAttribute("id", this._id);
    this._element.setAttribute("owner_id", this._owner.id)
    this._element.querySelector(".place__image").src = `${this._url}`;
    this._element.querySelector(".place__image").alt = `${this._title}`
    this._element.querySelector(".place__title").textContent = this._title;
    this.setEventListeners();
    return this._element;
  };

  _removeCard(event) {
    const checkId = owner.id == event.target.parentElement.getAttribute("owner_id");
    if(!checkId) {
      alert("Você só pode remover os seus Cards")
      return
    }
    this.deleteCard()
  }

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
