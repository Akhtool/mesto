// Создайте класс `FormValidator`, который настраивает валидацию полей формы:

// - принимает в конструктор объект настроек с селекторами и классами формы;
// - принимает вторым параметром элемент той формы, которая валидируется;
// - имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
// - имеет один публичный метод `enableValidation`, который включает валидацию формы.

//  Для каждой проверяемой формы создайте экземпляр класса `FormValidator`.

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(this._config.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.typeError);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._config.typeError);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _disableButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListener() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._buttonElement);
      });
    });
  }

  disableValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._disableButton();
  }

  enableValidation() {
    this._toggleButtonState();
    this._setEventListener();
  }
}
