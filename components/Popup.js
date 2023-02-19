// ## Создайте класс `Popup`

// Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

// - Принимает в конструктор единственный параметр — селектор попапа.
// - Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
// - Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
// - Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа.

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
    this._popupSelector
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this._close();
      });
  }
}
