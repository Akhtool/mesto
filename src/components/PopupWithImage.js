// ## Создайте класс `PopupWithImage`

// Создайте класс `PopupWithImage`, который наследует от `Popup`. Этот класс должен перезаписывать родительский метод `open`. В методе `open` класса `PopupWithImage` нужно вставлять в попап картинку и атрибут `src` изображения.
import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupImageCaption = this._popup.querySelector(
      ".popup__figure-caption"
    );
  }

  open(name, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageCaption.textContent = name;
  }
}
