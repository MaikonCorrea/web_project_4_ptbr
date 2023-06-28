export default class Card {
  constructor ({name, link}, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const templateSelector = document.querySelector("#gallery__card")
.content.querySelector(".place").cloneNode(true);

    return templateSelector;
   }

   _removeCard(event) {
    event.target.parentElement.remove();
  }

  setEventListeners() {
    //this._element.addEventListener("click", this._removeCard)

    this._buttonLikeElement.addEventListener("click", () => {
      this._buttonLikeElement.classList.toggle("place__button-like_active");
    });

    this._buttonDeleteCard.addEventListener("click", (event) => {
      this._removeCard(event);
    });
  }

  genetateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".place__title").textContent = this._name;
    this._element.querySelector(".place__image").style.backgroundImage = `url(${this._link})`;
    this._buttonLikeElement = this._element.querySelector(".place__button-like");
    this._buttonDeleteCard = this._element.querySelector(".place__button-delete");
    this.setEventListeners();
    return this._element;
  }
}