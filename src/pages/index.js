import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  validationConfig,
  initialCards,
  buttonEditProfile,
  popupEditProfile,
  profileNameInput,
  jobInput,
  popupAddCard,
  cardAddButton,
  apiOptions,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";

// Новые экземпляры(инстансы)

// инстанс класса Api:
const api = new Api(apiOptions);

// ИНСТАНСЫ ВАЛИДАЦИИ

// валидация формы добавления карточки
const popupAddFormValidator = new FormValidator(validationConfig, popupAddCard);
// валидация формы редактирования профиля
const popupEditFormValidator = new FormValidator(
  validationConfig,
  popupEditProfile
);
// инстанс который отвечает за отрисовку элементов на странице
const section = new Section(
  {
    renderer: (item) => {
      section.addItem(createCard(item));
    },
  },
  ".cards__list"
);
// инстанс класса попапа показа большой картинки
const popupWithImage = new PopupWithImage(".popup_type_show-image");
function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}
// инстанс класса попапа с формой для popupCard
const popupCard = new PopupWithForm(".popup_type_add-card", handleAddCardForm);
// инстанс класса попапа с формой для popupProfile
const popupProfile = new PopupWithForm(
  ".popup_type_profile-edit",
  handleProfileFormSubmit
);
// инстанс класса который отвечает за управление отображением информации о пользователе на странице
const userInfo = new UserInfo({
  userName: ".profile__name",
  job: ".profile__description",
});

// функция для создание инстансов класса кард (добавление новых карточек)
function createCard(item) {
  return new Card(
    item.name,
    item.link,
    "#card-template",
    openPopupWithImage
  ).generateCard();
}

// CЛУШАТЕЛИ И ОБРАБОТЧИКИ

// обработчики

// обработчик клика добавления карточки
function handleAddCardForm(inputValues) {
  section.addItem(createCard(inputValues));
}

// обработчик клика редактирования профиля

function handleProfileFormSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
}

// слушатели

// слушатель клика добавления карточки
cardAddButton.addEventListener("click", () => {
  popupCard.open();
  popupAddFormValidator.disableValidation();
});

// слушатель на кнопку редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.userName;
  jobInput.value = userData.job;
  popupEditFormValidator.disableValidation();
});

// Включение фич
popupAddFormValidator.enableValidation();
popupEditFormValidator.enableValidation();
section.renderItems(initialCards);
popupWithImage.setEventListeners();
popupCard.setEventListeners();
popupProfile.setEventListeners();

Promise.all([api.getUserInfo()])
  .then(([info]) => {
    console.log(info);
    userInfo.setUserInfo(info);
  })
  .catch((err) => console.log(err));
