import {
  addLikeCard,
  deleteLikeCard,
} from "../pages/index.js";

import {
  owner,
  popupDelete,
} from "../utils/constants.js";

export default class Card {
  constructor({ item, templateSelector, deleteCard}) {
    this._templateSelector = templateSelector;
    this._like = item.likes;
    this._id = item._id;
    this._title = item.name;
    this._url = item.link;
    this._owner = item.owner;
    this.deleteCard = deleteCard;
    this.idItem = null;
    /* this._handleEscClose = this._handleEscClose.bind(this); */
  }

  getTemplate() {
    const cardTemplate = document
      .querySelector("#gallery__card")
      .content.querySelector(".place")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this.getTemplate();
    this._element.setAttribute("id", this._id);
    this._element.setAttribute("owner._id", this._owner._id);
    this._element.querySelector(".place__image").setAttribute("src", this._url);
    this._element.querySelector(".place__image").setAttribute("alt", this._title);
    this._element.querySelector(".place__title").textContent = this._title;
    this._element.querySelector(".place__like-number").textContent =this._like.length.toString();

    this._buttonLikeElement = this._element.querySelector(".place__button-like");
    this._buttonDeleteCard = this._element.querySelector(".place__button-delete");

    if (this._owner._id === owner._id) {
      this._buttonDeleteCard.style.display = "block";
    } else {
      this._buttonDeleteCard.style.display = "none";
    }
    this.setEventListeners();
    return this._element;
  }

  openPopupConfirmDelete() {
    popupDelete.classList.add("popup_opened")
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(evt);
    }
  }

  handleCardId(event) {
    const ElementId = event.target.closest(".place");
    if (ElementId) {
      this.idItem = ElementId.getAttribute("id");
      }
      return this.idItem
  }


  close(evt) {
    popupDelete.classList.add("popup_closing");
    setTimeout(() => {
      popupDelete.classList.remove("popup_closing");
      popupDelete.classList.remove("popup_opened");
    }, 200);
    evt.preventDefault();
    document.removeEventListener("keydown", this._handleEscClose);
  }

  likeNumberApi(event){
    const likeNumberElement = this._buttonLikeElement.closest(".place").querySelector(".place__like-number");
    const isLiked = this._buttonLikeElement.classList.toggle("place__button-like_active");

    if (isLiked) {
      addLikeCard(this.handleCardId(event, this.idItem));
      likeNumberElement.textContent =
        parseInt(likeNumberElement.textContent) + 1;
    } else {
      deleteLikeCard(this.handleCardId(event, this.idItem));
      likeNumberElement.textContent =
        parseInt(likeNumberElement.textContent) - 1;
    }
  }

 /*  deleteCardId() {
    this.deleteCard()
  }
 */
  open() {
    this._popup.classList.add("popup_opened");

  }


  setEventListeners() {
    this._buttonLikeElement.addEventListener("click", (event) => {
      this.likeNumberApi(event)
    });

    this._buttonDeleteCard.addEventListener("click", (event)=> {
      this.openPopupConfirmDelete(event);

    })
  }
}