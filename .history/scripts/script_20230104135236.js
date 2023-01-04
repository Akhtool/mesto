let editButton = document.querySelector('.profile__edit-button');
let popupEditProfile = document.querySelector('.popup_type_profile-edit');
let popupClose = document.querySelector('.popup__close-button_type_profile');
let formElement = document.querySelector('.popup__input-form_type_profile');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function openPopup(popup) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    popup.classList.add('popup_opened');
}
function closePopup() {
    popupEditProfile.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  // Список карточек 
  const cardsList = document.querySelector('.cards__list');
  // Функция добавление карточек из шаблон
  const createCardElement = (cardName, cardLink) => {
    // Взять содержание из шаблона
    const cardTemplate = document.querySelector('#card-template').content;
    // Клонировать содержание шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    // Заполнить содержимым
    cardElement.querySelector('.card__name').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardLink;

    // Кнопка лайка
    cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_active');
      });

    // Кнопка удаления карточки
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', function (evt) {
        cardElement.remove();
    });    
    return cardElement;
};
// Добить карточку в DOM
const addCardElement = (name, link) => {
    cardsList.prepend(createCardElement(name, link));
};
// Добавление карточек из массива
  const addCard = (array) => {
    array.forEach((element) => {
        addCardElement(element.name, element.link);
    });
  };

  addCard(initialCards);
//попап добавлениея фотографий
  const popupAddCard = document.querySelector ('.popup_type_add-card');
  const addCardButton = document.querySelector('.profile__add-button'); 
  const cardSaveButton = document.querySelector('.popup__save-button');
  const cardElementName = document.querySelector('.popup__input_type_card-name');
  const cardElementLink = document.querySelector('.popup__input_type_card-link');
  const addCardForm = document.querySelector('.popup__input-form_type_card');
  const popupCloseButton = document.querySelector('.popup__close-button_type_add-card');
  
  function openAddCardPopup() {
    popupAddCard.classList.add('popup_opened');

  }
  
  function closeAddCardPopup() {
    popupAddCard.classList.remove('popup_opened');
  }
  
  function handleAddCardForm (evt) {
    evt.preventDefault();
    addCardElement(cardElementName.value, cardElementLink.value);
    closeAddCardPopup();
}
  
  popupCloseButton.addEventListener('click', closeAddCardPopup);
  addCardForm.addEventListener('submit', handleAddCardForm);
  addCardButton.addEventListener('click', openAddCardPopup);

  function openAddCar
  const popupImage = document.querySelector('.popup__image');
  const cardImage = cardElementLink.querySelector('.card__image');
  cardImage.addEventListener('click', function (evt) {
    console.log(evt.target);
    popupImage.src = evt.target.src;
  });