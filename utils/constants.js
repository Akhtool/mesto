// Конфиг для Валидации
export const validationConfig = {
  formSelector: ".popup__input-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
  typeError: "popup__input_type_error",
};
// Исходные карточки
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Основные константы
export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const popupEditProfile = document.querySelector(
  ".popup_type_profile-edit"
);
export const profileEditCloseButton = document.querySelector(
  ".popup__close-button_type_profile"
);
export const profileFormElement = document.querySelector(
  ".popup__input-form_type_profile"
);
export const profileNameInput = profileFormElement.querySelector(
  ".popup__input_type_name"
);
export const jobInput = profileFormElement.querySelector(
  ".popup__input_type_description"
);
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const popupImage = document.querySelector(".popup__image");
export const popupImageCaption = document.querySelector(
  ".popup__figure-caption"
);
export const popupShowImage = document.querySelector(".popup_type_show-image");
export const popupImageCloseButton = document.querySelector(
  ".popup__close-button_type_show-image"
);
//попап добавлениея фотографий
export const popupAddCard = document.querySelector(".popup_type_add-card");
export const cardAddButton = document.querySelector(".profile__add-button");
export const cardSaveButton = document.querySelector(".popup__save-button");
export const cardElementName = document.querySelector(
  ".popup__input_type_card-name"
);
export const cardElementLink = document.querySelector(
  ".popup__input_type_card-link"
);
export const cardAddForm = document.querySelector(
  ".popup__input-form_type_card"
);
export const cardAddCloseButton = document.querySelector(
  ".popup__close-button_type_add-card"
);
// Список карточек
export const cardsList = document.querySelector(".cards__list");
