export class Card {
  constructor(dataCard, templateSelector, openBigImage) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._dataCard = dataCard;
    this._templateSelector = templateSelector;
    this._openBigImage = openBigImage;
  }

  _getTemplate() {
    this._card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return this._card;
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();

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

  _handleDeleteClick() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeClick() {
    this._newCard
      .querySelector(".card__like")
      .classList.toggle("card__like_active");
  }

  _setListeners() {
    // Слушатель клика на кнопку удалить
    this._deleteCardButton = this._newCard.querySelector(
      ".card__delete-button"
    );
    this._deleteCardButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
    // Слушатель клика на кнопку лайку
    this._likeCardButton = this._newCard.querySelector(".card__like");
    this._likeCardButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._openBigImage(this._dataCard);
    });
  }
}
