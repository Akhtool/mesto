// ## Создайте класс `UserInfo`

// Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:

// - Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// - Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// - Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.

export class UserInfo {
  constructor({ name, job }) {
    this._userName = document.querySelector(name);
    this._userJob = document.querySelector(job);
    console.log("This userJob", this._userJob);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }

  setUserInfo(data) {
    this._data = data;
    this._userName.textContent = this._data.name;
    this._userJob.textContent = this._data.job;
  }
}
