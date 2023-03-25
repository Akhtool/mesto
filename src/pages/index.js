import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  validationConfig,
  buttonEditProfile,
  popupEditProfile,
  profileNameInput,
  jobInput,
  popupAddCard,
  cardAddButton,
  apiOptions,
  avatarEditButton,
  popupEditAvatar,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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
const popupEditAvatarValidator = new FormValidator(
  validationConfig,
  popupEditAvatar
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
const popupCard = new PopupWithForm(".popup_type_add-card", (formData) => {
  popupCard.setButtonText("Сохранение...");
  api
    .addNewCard(formData)
    .then((item) => {
      section.addItem(createCard(item));
      popupCard.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => popupCard.setButtonText("Сохранить"));
});
// инстанс класса попапа с формой для popupProfile
const popupProfile = new PopupWithForm(
  ".popup_type_profile-edit",
  (userData) => {
    popupProfile.setButtonText("Сохранение...");
    api
      .setUserInfo(userData)
      .then((newUserData) => {
        userInfo.setUserInfo(newUserData);
      })
      .then(() => {
        popupProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupProfile.setButtonText("Сохранить"));
  }
);

const popupAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  (newAvatarLink) => {
    popupAvatar.setButtonText("Сохранение...");
    api
      .updateAvatar(newAvatarLink.link)
      .then((newUserData) => {
        userInfo.setUserInfo(newUserData);
      })
      .then(() => {
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupAvatar.setButtonText("Сохранить"));
  }
);
// инстанс класса который отвечает за управление отображением информации о пользователе на странице
const userInfo = new UserInfo({
  userName: ".profile__name",
  job: ".profile__description",
  profileAvatar: ".profile__image",
});

const popupWithConfirm = new PopupWithConfirm(
  ".popup_type_confirm",
  (cardId, cardElemment) => {
    popupWithConfirm.setButtonText("Удаление...");
    api
      .deleteCard(cardId)
      .then(() => {
        cardElemment.remove();
      })
      .then(() => {
        popupWithConfirm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupWithConfirm.setButtonText("Да"));
  }
);

// функция для создание инстансов класса кард (добавление новых карточек)
function createCard(cardElement) {
  const card = new Card(
    cardElement,
    "#card-template",
    openPopupWithImage,
    handleConfirmClick,
    userInfo.getUserId()
  );
  return card.generateCard();
}
function handleConfirmClick(cardId, cardElemment) {
  popupWithConfirm.open(cardId, cardElemment);
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

avatarEditButton.addEventListener("click", () => {
  popupAvatar.open();
  popupEditAvatarValidator.disableValidation();
});

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
popupEditAvatarValidator.enableValidation();
popupWithImage.setEventListeners();
popupWithConfirm.setEventListeners();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupAvatar.setEventListeners();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([info, cards]) => {
    userInfo.setUserInfo(info);
    section.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
