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

let cardList;

clientAPI
  .getCards()
  .then((res) => {
    if(res.ok) {
      return res.json();
    }else {
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

clientAPI
  .getUsers()
  .then((res) => {
    if(res.ok) {
      return res.json();
    }else {
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
      if(res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      const newCard = new Card({
        item: {
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
    })
}, popupCard);

let idItem;
export function handleDeletCardId(event) {
  const ElementId = event.target.closest(".place");
  if (ElementId) {
    idItem = ElementId.getAttribute("id");
  }
}

export function confirmDelete() {
  clientAPI
    .deleteCard(idItem)
    .then((res) => {
      if (res.ok) {
        const elementToRemove = document.getElementById(idItem);
        if (elementToRemove) {
          elementToRemove.remove();
        }else {
          return Promise.reject(`Error: ${res.status}`);
        }
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
      if(res.ok) {
        return res.json();
      }else {
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
      if(res.ok) {
        return res.json();
      }else {
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
