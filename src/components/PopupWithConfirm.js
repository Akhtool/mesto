import { Popup } from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._confirmButton =
      this._popupFromSelector.querySelector(".popup__submit");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener("click", () => {
      this._handleFormSubmit(this._cardId, this._cardElemment);
    });
  }

  open(cardId, cardElemment) {
    super.open();

    this._cardId = cardId;
    this._cardElemment = cardElemment;
  }
}
