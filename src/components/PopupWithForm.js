// ## Создайте класс `PopupWithForm`

import { Popup } from "./Popup.js";

// Создайте класс `PopupWithForm`, который наследует от `Popup`. Этот класс:

// - Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// - Содержит приватный метод `_getInputValues`, который собирает данные всех полей формы.
// - Перезаписывает родительский метод `_setEventListeners`. Метод `_setEventListeners` класса `PopupWithForm`
// должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// - Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.

// `PopupWithForm`

// Для каждого попапа создавайте свой экземпляр класса `PopupWithForm`.

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector(".popup__input-form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._inputValues = this._getInputValues();
      this._submitCallback(this._inputValues);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
