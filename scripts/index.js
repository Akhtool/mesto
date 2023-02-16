import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
const validationConfig = {
  formSelector: ".popup__input-form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
  typeError: "popup__input_type_error",
};

const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const profileEditCloseButton = document.querySelector(
  ".popup__close-button_type_profile"
);
const profileFormElement = document.querySelector(
  ".popup__input-form_type_profile"
);
const profileNameInput = profileFormElement.querySelector(
  ".popup__input_type_name"
);
const jobInput = profileFormElement.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardTemplate = document.querySelector("#card-template").content;
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__figure-caption");
const popupShowImage = document.querySelector(".popup_type_show-image");
const popupImageCloseButton = document.querySelector(
  ".popup__close-button_type_show-image"
);
//попап добавлениея фотографий
const popupAddCard = document.querySelector(".popup_type_add-card");
const cardAddButton = document.querySelector(".profile__add-button");
const cardSaveButton = document.querySelector(".popup__save-button");
const cardElementName = document.querySelector(".popup__input_type_card-name");
const cardElementLink = document.querySelector(".popup__input_type_card-link");
const cardAddForm = document.querySelector(".popup__input-form_type_card");
const cardAddCloseButton = document.querySelector(
  ".popup__close-button_type_add-card"
);

const popupAddFormValidator = new FormValidator(
  validationConfig,
  popupEditProfile
);

const popupEditFormValidator = new FormValidator(
  validationConfig,
  popupAddCard
);

popupAddFormValidator.enableValidation();
popupEditFormValidator.enableValidation();
// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByClickOnEscape);
}
// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.addEventListener("keydown", closePopupByClickOnEscape);
}
// Функция закрытия попапа по клику на оверлей
const closePopupByClickOnOverlay = (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.currentTarget);
  }
};
// Функция закрытия при нажатии на ESC
function closePopupByClickOnEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

buttonEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popupEditFormValidator.disabledButton();
});
profileEditCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const initialCards = [
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
// Список карточек
const cardsList = document.querySelector(".cards__list");

popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupShowImage);
});

// Функция открытия большой картинки
function openBigImage({ link, name }) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupShowImage);
}
const createGalery = (dataCard) => {
  return new Card(dataCard, "#card-template", openBigImage).generateCard();
};
initialCards.forEach((card) => {
  const newCard = createGalery(card);
  cardsList.prepend(newCard);
});

// обработчик клика добавления карточки
function handleAddCardForm(evt) {
  evt.preventDefault();
  const addValues = {
    name: cardElementName.value,
    link: cardElementLink.value,
  };
  const imageItem = createGalery(addValues);
  cardsList.prepend(imageItem);
  closePopup(popupAddCard);
}
cardAddCloseButton.addEventListener("click", () => {
  closePopup(popupAddCard);
});
// слушатель клика добавления карточки
cardAddForm.addEventListener("submit", handleAddCardForm);
cardAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
  cardAddForm.reset();
  popupAddFormValidator.disabledButton();
});
popupAddCard.addEventListener("mousedown", closePopupByClickOnOverlay);
popupEditProfile.addEventListener("mousedown", closePopupByClickOnOverlay);
popupShowImage.addEventListener("mousedown", closePopupByClickOnOverlay);
