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
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

// Новые экземпляры(инстансы)
const popupAddFormValidator = new FormValidator(validationConfig, popupAddCard);

const popupEditFormValidator = new FormValidator(
  validationConfig,
  popupEditProfile
);

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(createCard(item));
    },
  },
  ".cards__list"
);

const popupWithImage = new PopupWithImage(".popup_type_show-image");
function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}

const popupCard = new PopupWithForm(".popup_type_add-card", handleAddCardForm);
const popupProfile = new PopupWithForm(
  ".popup_type_profile-edit",
  handleProfileFormSubmit
);
const userInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__description",
});

// Функция открытия попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupByClickOnEscape);
// }

// // Функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupByClickOnEscape);
// }

// // Функция закрытия попапа по клику на оверлей
// const closePopupByClickOnOverlay = (evt) => {
//   if (evt.target.classList.contains("popup")) {
//     closePopup(evt.currentTarget);
//   }
// };

// // Функция закрытия при нажатии на ESC
// function closePopupByClickOnEscape(evt) {
//   if (evt.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// }

// Функция открытия большой картинки
// function openBigImage({ link, name }) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupImageCaption.textContent = name;
//   openPopup(popupShowImage);
// }
// создание инстансов класса кард
function createCard(item) {
  return new Card(
    item.name,
    item.link,
    "#card-template",
    openPopupWithImage
  ).generateCard();
}

// добавление исходных карточек из массива
// initialCards.forEach((card) => {
//   const newCard = createCard(card);
//   cardsList.prepend(newCard);
// });

// CЛУШАТЕЛИ И ОБРАБОТЧИКИ

// обработчики

// обработчик клика редактирования профиля
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = profileNameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// }
// обработчик клика добавления карточки
// function handleAddCardForm(evt) {
//   evt.preventDefault();
//   const addValues = {
//     name: cardElementName.value,
//     link: cardElementLink.value,
//   };
//   const imageItem = createCard(addValues);
//   cardsList.prepend(imageItem);
//   closePopup(popupAddCard);
// }
function handleAddCardForm(inputValues) {
  section.addItem(createCard(inputValues));
}

function handleProfileFormSubmit(inputValues) {
  console.log("inputValues", inputValues);
  userInfo.setUserInfo(inputValues);
}

// слушатели

// // слушатель клика добавления карточки
// cardAddButton.addEventListener("click", () => {
//   openPopup(popupAddCard);
//   cardAddForm.reset();
//   popupAddFormValidator.disableValidation();
// });
cardAddButton.addEventListener("click", () => {
  popupCard.open();
  popupAddFormValidator.disableValidation();
});

// слушатель на кнопку редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  console.log("userData", userData);
  profileNameInput.value = userData.name;
  jobInput.value = userData.job;
  popupEditFormValidator.disableValidation();
});
// слушатель на кнопку закрытия попап добавления карточки
// cardAddCloseButton.addEventListener("click", () => {
//   popupCard.close();
// });
// слушатель на кнопку закрытия попап редактирования профиля
// profileEditCloseButton.addEventListener("click", () => {
//   closePopup(popupEditProfile);
// });
// слушатель на кнопку закрытия большой картинки
// popupImageCloseButton.addEventListener("click", () => {
//   closePopup(popupShowImage);
// });
// слушатель сабмита попапа редактирования профиля
// profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// слушатель сабмита попапа добавления карточки
// cardAddForm.addEventListener("submit", handleAddCardForm);
// слушатели на нажатие на оверлей
// popupAddCard.addEventListener("mousedown", closePopupByClickOnOverlay);
// popupEditProfile.addEventListener("mousedown", closePopupByClickOnOverlay);
// popupShowImage.addEventListener("mousedown", closePopupByClickOnOverlay);
// Включение фич
popupAddFormValidator.enableValidation();
popupEditFormValidator.enableValidation();
section.renderItems();
popupWithImage.setEventListeners();
popupCard.setEventListeners();
popupProfile.setEventListeners();
