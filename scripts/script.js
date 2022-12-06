let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__input-form');
let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__description-input');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    popup.classList.add('popup__opened');
}
function closePopup() {
    popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 
