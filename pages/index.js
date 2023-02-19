import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  validationConfig,
  initialCards,
  buttonEditProfile,
  popupEditProfile,
  profileEditCloseButton,
  profileFormElement,
  profileNameInput,
  jobInput,
  profileName,
  profileDescription,
  popupImage,
  popupImageCaption,
  popupShowImage,
  popupImageCloseButton,
  popupAddCard,
  cardAddButton,
  cardElementName,
  cardElementLink,
  cardAddForm,
  cardAddCloseButton,
  cardsList,
} from "../utils/constants.js";

// Новые экземпляры(инстансы)
const popupAddFormValidator = new FormValidator(validationConfig, popupAddCard);

const popupEditFormValidator = new FormValidator(
  validationConfig,
  popupEditProfile
);

// Включение фич
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
  document.removeEventListener("keydown", closePopupByClickOnEscape);
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

// Функция открытия большой картинки
function openBigImage({ link, name }) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupShowImage);
}
// создание инстансов класса кард
const createGalery = (dataCard) => {
  return new Card(dataCard, "#card-template", openBigImage).generateCard();
};
// добавление исходных карточек из массива
initialCards.forEach((card) => {
  const newCard = createGalery(card);
  cardsList.prepend(newCard);
});

// CЛУШАТЕЛИ И ОБРАБОТЧИКИ

// обработчики

// обработчик клика редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
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

// слушатели

// слушатель клика добавления карточки
cardAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
  cardAddForm.reset();
  popupAddFormValidator.disableValidation();
});
// слушатель на кнопку редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popupEditFormValidator.disableValidation();
});
// слушатель на кнопку закрытия попап добавления карточки
cardAddCloseButton.addEventListener("click", () => {
  closePopup(popupAddCard);
});
// слушатель на кнопку закрытия попап редактирования профиля
profileEditCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});
// слушатель на кнопку закрытия большой картинки
popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupShowImage);
});
// слушатель сабмита попапа редактирования профиля
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// слушатель сабмита попапа добавления карточки
cardAddForm.addEventListener("submit", handleAddCardForm);

popupAddCard.addEventListener("mousedown", closePopupByClickOnOverlay);
popupEditProfile.addEventListener("mousedown", closePopupByClickOnOverlay);
popupShowImage.addEventListener("mousedown", closePopupByClickOnOverlay);
