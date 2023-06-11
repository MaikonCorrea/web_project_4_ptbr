
const initialCards = [
  {
    name: "Yellostone National Park",
    link: "https://images.unsplash.com/photo-1565108150023-cc0fd1054149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Colorado River",
    link: "https://images.unsplash.com/photo-1589973488443-496846cae737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://images.unsplash.com/photo-1558150503-0fdcce137289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
  },
];

class Card {
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

    this._element.querySelector(".place__image").style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".place__title").textContent = this._name;
  }

  getTemplate() {
    const cardTemplate = document
      .querySelector("#gallery__card")
      .content.querySelector(".place")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardTemplate = card.generateCard();

  document.querySelector(".gallery").append(cardTemplate);
});

export {Card, initialCards};