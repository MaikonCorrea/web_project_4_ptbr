export const openPopupEditButton = document.querySelector(
  ".profile__button-info"
);
export const popupEdit = document.querySelector(".edit");
export const buttonSave = document.querySelector(".edit__button-save");
export const inputName = document.querySelector(".edit__input-name");
export const inputAbout = document.querySelector(".edit__input-about");
export const infoName = document.querySelector(".profile__info-name");
export const infoAbout = document.querySelector(".profile__info-discription");
export const openPopupButtonCard = document.querySelector(
  ".profile__button-include"
);
export const popupCard = document.querySelector(".include");
export const cardsContainer = document.querySelector(".gallery");
export const buttonSaveNewCard = document.querySelector(
  ".include__button-save"
);
export const cardElement = document.querySelector(".place");
export const popupContainerScreen = document.querySelector(".screen");
export const popupImage = document.querySelector(".screen__image-dynamics");
export const popupTitle = document.querySelector(".screen__popup-title");
export const popupImagescrenn = document.querySelector(".place__image");
export const popupTitleScreen = document.querySelector(".place__title");
export const buttonOpenEditImageProfile = document.querySelector(".profile__button-edit-image");
export const inputImageProfile = document.querySelector(".photograph__input-link");
export const buttonSaveImageProfile = document.querySelector(".photograph__button-save");
export const photographPopup = document.querySelector(".photograph");


export const initialCards = [
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

export const configValidator = {
  inputErrorClass: "span__error",
  editButtonSave: ".edit__button-save",
  includeButtonSave: ".include__button-save",
  photographButtonSave: ".photograph__button-save",
  inactiveButtonSaveClass: "edit__button-save_disabled",
  inactiveButtonIncludeClass: "include__button-save_disabled",
  inactiveButtonPhotographClass: "photograph__button-save_disabled",
}
