// Создайте класс `Card`, который создаёт карточку с текстом и ссылкой на изображение:

import Api from "./Api";

// - принимает в конструктор её данные и селектор её template-элемента;
// - содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// - содержит приватные методы для каждого обработчика;
// - содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

// Для каждой карточки создайте экземпляр класса `Card`.

export class Card {
  constructor(
    cardElement,
    templateSelector,
    openBigImage,
    handleConfirmClick,
    userId,
    handleLikeClick
  ) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._likeArray = cardElement.likes;
    this._likeCounter = cardElement.likes.length;
    this._templateSelector = templateSelector;
    this._openBigImage = openBigImage;

    this._ownerId = cardElement.owner._id;
    this._cardId = cardElement._id;
    this._userId = userId;

    this._handleConfirmClick = handleConfirmClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    this._card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._card;
  }

  generateCard() {
    this._isLiked = this._likeArray.some((like) => like._id === this._userId);
    this._newCard = this._getTemplate();
    this._likeCardButton = this._newCard.querySelector(".card__like");
    if (this._isLiked) {
      this._likeCardButton.classList.add("card__like_active");
    }
    this._setData();

    this._cardLikeCounter = this._card.querySelector(".card__like-counter");
    this._cardLikeCounter.textContent = this._likeCounter;

    this._setListeners();
    this._setDeleteButton();

    return this._newCard;
  }

  _setData() {
    this._cardImage = this._newCard.querySelector(".card__image");
    this._cardName = this._newCard.querySelector(".card__name");
    // Добавление имени карточки
    this._cardName.textContent = this._name;
    // Добавлине самой картинки и ее аlt
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }

  _askUserBeforeDelete = () => {
    this._handleConfirmClick(this._cardId, this._card);
  };

  _handleDeleteClick() {
    this._newCard.remove();
    this._newCard = null;
  }

  _setDeleteButton() {
    if (this._userId !== this._ownerId) {
      this._deleteCardButton.remove();
    }
  }

  updateLikesCount(likesCount) {
    this._cardLikeCounter = this._card.querySelector(".card__like-counter");
    this._cardLikeCounter.textContent = likesCount;
  }

  _likeCard() {
    this._likeCardButton.classList.toggle("card__like_active");
    this._handleLikeClick(this._cardId, this._isLiked, this);
    this._isLiked = !this._isLiked;
  }

  _setListeners() {
    // Слушатель клика на кнопку удалить
    this._deleteCardButton = this._newCard.querySelector(
      ".card__delete-button"
    );
    if (this._deleteCardButton) {
      this._deleteCardButton.addEventListener("click", () => {
        this._askUserBeforeDelete();
      });
    }
    // Слушатель клика на кнопку лайку
    // this._likeCardButton = this._newCard.querySelector(".card__like");
    this._likeCardButton.addEventListener("click", () => {
      this._likeCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._openBigImage(this._name, this._link);
    });
  }
}
