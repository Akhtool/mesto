// ## Создайте класс `Popup`

// Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

// - Принимает в конструктор единственный параметр — селектор попапа.
// - Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
// - Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
// - Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа.

export class Popup {
  constructor(popupSelector) {
    this._popupFromSelector = document.querySelector(popupSelector);
    this._bindedCloseByEscHandler = this._handleEscClose.bind(this);
  }

  open() {
    this._popupFromSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._bindedCloseByEscHandler);
  }

  close() {
    this._popupFromSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._bindedCloseByEscHandler);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupFromSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
    this._popupFromSelector
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
