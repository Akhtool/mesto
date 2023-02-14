const buttonEdit = document.querySelector(".profile__edit-button");
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

buttonEdit.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
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
// Список карточек
const cardsList = document.querySelector(".cards__list");
// Функция добавление карточек из шаблон

const createCardElement = (cardName, cardLink) => {
  // Взять содержание из шаблона
  // Клонировать содержание шаблона
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  // Заполнить содержимым
  cardElement.querySelector(".card__name").textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  // Кнопка лайка
  cardElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });

  // Кнопка удаления карточки
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", function (evt) {
    cardElement.remove();
  });

  cardImage.addEventListener("click", function (evt) {
    popupImage.src = cardLink;
    popupImageCaption.textContent = cardName;
    popupImage.alt = cardName;
    openPopup(popupShowImage);
  });
  return cardElement;
};
popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupShowImage);
});
// Добить карточку в DOM
const addCardElement = (name, link) => {
  cardsList.prepend(createCardElement(name, link));
};
// Добавление карточек из массива
const addCards = (cards) => {
  cards.forEach((card) => {
    addCardElement(card.name, card.link);
  });
};

addCards(initialCards);
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

function handleAddCardForm(evt) {
  evt.preventDefault();
  addCardElement(cardElementName.value, cardElementLink.value);
  closePopup(popupAddCard);
}

cardAddCloseButton.addEventListener("click", () => {
  closePopup(popupAddCard);
});
cardAddForm.addEventListener("submit", handleAddCardForm);
cardAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});
popupAddCard.addEventListener("mousedown", closePopupByClickOnOverlay);
popupEditProfile.addEventListener("mousedown", closePopupByClickOnOverlay);
popupShowImage.addEventListener("mousedown", closePopupByClickOnOverlay);
enableValidation(config);
