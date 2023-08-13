import "./index.css";

import UserInfoImage from "../components/UserInfoImage.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWhithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  owner,
  cardsContainer,
  popupCard,
  popupContainerScreen,
  popupEdit,
  photographPopup,
  configValidator,
  inputTitleInclude,
  inputUrlInclude,
  popupDelete,
} from "../utils/constants.js";
import PopupDeleteCard from "../components/PopupDeleteCard";

const clientAPI = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_05",
  token: "e2bad784-3e1f-478a-b640-635d640e7341",
});

clientAPI
  .getUsers()
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  })
  .then((res) => {
    const imagePerfil = document.querySelector(".profile__image");
    const profileName = document.querySelector(".profile__info-name");
    const profileAbout = document.querySelector(".profile__info-discription");
    imagePerfil.src = res.avatar;
    profileName.textContent = res.name;
    profileAbout.textContent = res.about;
  })
  .catch((err) => {
    console.log(err);
  });

let cardList;
const popupWhithForm = new PopupWhithForm((item) => {
  clientAPI
    .createCards({
      likes: [],
      name: inputTitleInclude.value,
      link: inputUrlInclude.value,
      owner: owner,
      createdAt: new Date().toISOString(),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      const newCard = new Card({
        item: {
          likes: res.likes,
          _id: res._id,
          name: res.name,
          link: res.link,
          owner,
        },
        templateSelector: ".place",
      });
      const card = newCard.generateCard();
      cardList.addItem(card);
    })
    .catch((err) => {
      alert(`Error: ${err}`);
    });
}, popupCard);

setTimeout(updateLikeData, 80);

updatePageData();
export function updatePageData() {
  clientAPI
    .getCards()
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      cardList = new Section(
        {
          items: res,
          render: (item) => {
            const card = new Card({
              item: item,
              templateSelector: ".place",
            });
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
          },
        },
        cardsContainer
      );
      cardList.renderer();
    })
    .catch((err) => {
      console.log(err);
    });
}

//função que atualiza os likes
export function updateLikeData() {
  const idUser = owner._id;

  clientAPI
    .getCards()
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((cards) => {
      cards.forEach((card) => {
        if (card.likes.length > 0) {
          const userLiked = card.likes.some((like) => like._id === idUser);

          if (userLiked) {
            const cardElement = document.getElementById(card._id);

            if (cardElement) {
              const likeButton = cardElement.querySelector(
                ".place__button-like"
              );
              likeButton.classList.add("place__button-like_active");
            }
          }
        }
      });
    });
}

let idItem;
export function handleCardId(event) {
  const ElementId = event.target.closest(".place");
  if (ElementId) {
    idItem = ElementId.getAttribute("id");
    console.log(idItem);
  }
}

export function confirmDeleteCard() {
  clientAPI
    .deleteCard(idItem)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      const elementToRemove = document.getElementById(idItem);
      if (elementToRemove) {
        elementToRemove.remove();
      } else {
        console.log("Erro ao remover Card");
      }
    })
    .catch((error) => {
      alert("Erro ao excluir o item:", error);
    });
}

export function deleteLikeCard() {
  clientAPI
    .deleteLike(idItem)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })

    .catch((error) => {
      alert("Erro ao excluir o item:", error);
    });
}

export function addLikeCard() {
  clientAPI
    .addLike(idItem)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      alert("Erro ao excluir o item:", error);
    });
}

export function getUrlNewAvatar() {
  const newUrl = document.querySelector(".photograph__input-link").value;
  const profileName = document.querySelector(".edit__input-name").value;
  const profileAbout = document.querySelector(".edit__input-about").value;
  const newAvatarData = {
    avatar: newUrl,
    name: profileName,
    about: profileAbout,
  };
  clientAPI
    .getProfilePicture(newAvatarData)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      alert("Erro ao alterar a foto do perfil:", `${error}`);
    });
}

export function getDescriptionPerfil() {
  const profileName = document.querySelector(".edit__input-name").value;
  const profileAbout = document.querySelector(".edit__input-about").value;
  const newDescriptionrData = {
    name: profileName,
    about: profileAbout,
  };
  clientAPI
    .updateDescriptionPerfil(newDescriptionrData)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .catch((error) => {
      alert("Erro ao alterar a descrição do perfil:", `${error}`);
    });
}

const popupWithImage = new PopupWithImage(popupContainerScreen);

const userInfo = new UserInfo(popupEdit);

const userInfoImage = new UserInfoImage(photographPopup);

const popupDeleteCard = new PopupDeleteCard(popupDelete);

const formValidatorEdit = new FormValidator(configValidator, popupEdit);

const formValidatorCard = new FormValidator(configValidator, popupCard);

const formValidatorPhotograph = new FormValidator(
  configValidator,
  photographPopup
);
