(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var r=function(){function t(e,r,o,i,u,c){var a,l,s,f=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,s=function(){f._handleConfirmClick(f._cardId,f._card)},(l=n(l="_askUserBeforeDelete"))in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,this._name=e.name,this._link=e.link,this._likeArray=e.likes,this._likeCounter=e.likes.length,this._templateSelector=r,this._openBigImage=o,this._ownerId=e.owner._id,this._cardId=e._id,this._userId=u,this._handleConfirmClick=i,this._handleLikeClick=c}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return this._card=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0),this._card}},{key:"generateCard",value:function(){var t=this;return this._isLiked=this._likeArray.some((function(e){return e._id===t._userId})),this._newCard=this._getTemplate(),this._likeCardButton=this._newCard.querySelector(".card__like"),this._isLiked&&this._likeCardButton.classList.add("card__like_active"),this._setData(),this._cardLikeCounter=this._card.querySelector(".card__like-counter"),this._cardLikeCounter.textContent=this._likeCounter,this._setListeners(),this._setDeleteButton(),this._newCard}},{key:"_setData",value:function(){this._cardImage=this._newCard.querySelector(".card__image"),this._cardName=this._newCard.querySelector(".card__name"),this._cardName.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name}},{key:"_handleDeleteClick",value:function(){this._newCard.remove(),this._newCard=null}},{key:"_setDeleteButton",value:function(){this._userId!==this._ownerId&&this._deleteCardButton.remove()}},{key:"updateLikesCount",value:function(t){this._cardLikeCounter=this._card.querySelector(".card__like-counter"),this._cardLikeCounter.textContent=t}},{key:"_likeCard",value:function(){this._likeCardButton.classList.toggle("card__like_active"),this._handleLikeClick(this._cardId,this._isLiked,this),this._isLiked=!this._isLiked}},{key:"_setListeners",value:function(){var t=this;this._deleteCardButton=this._newCard.querySelector(".card__delete-button"),this._deleteCardButton&&this._deleteCardButton.addEventListener("click",(function(){t._askUserBeforeDelete()})),this._likeCardButton.addEventListener("click",(function(){t._likeCard()})),this._cardImage.addEventListener("click",(function(){t._openBigImage(t._name,t._link)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._inputList=Array.from(null==n?void 0:n.querySelectorAll(this._config.inputSelector)),this._buttonElement=n.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.classList.add(this._config.errorClass),e.textContent=t.validationMessage,t.classList.add(this._config.typeError)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.classList.remove(this._config.errorClass),e.textContent="",t.classList.remove(this._config.typeError)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(t._buttonElement)}))}))}},{key:"disableValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._disableButton()}},{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListener()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={formSelector:".popup__input-form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_invalid",inputErrorClass:"popup__input-error",errorClass:"popup__input-error_active",typeError:"popup__input_type_error"},a=document.querySelector(".profile__edit-button"),l=document.querySelector(".popup_type_profile-edit"),s=document.querySelector(".popup_type_edit-avatar"),f=(document.querySelector(".popup__close-button_type_profile"),document.querySelector(".popup__input-form_type_profile")),p=f.querySelector(".popup__input_type_name"),y=f.querySelector(".popup__input_type_description"),d=(document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__image"),document.querySelector(".popup__figure-caption"),document.querySelector(".popup_type_show-image"),document.querySelector(".popup__close-button_type_show-image"),document.querySelector(".popup_type_add-card")),_=document.querySelector(".profile__add-button"),h=(document.querySelector(".popup__save-button"),document.querySelector(".popup__input_type_card-name"),document.querySelector(".popup__input_type_card-link"),document.querySelector(".popup__input-form_type_card"),document.querySelector(".popup__input-form_type_edit-avatar"),document.querySelector(".popup__close-button_type_add-card"),document.querySelector(".profile__image-edit-button"));function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}document.querySelector(".cards__list");var v=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._bindedCloseByEscHandler=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._bindedCloseByEscHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._bindedCloseByEscHandler)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()})),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageCaption=e._popup.querySelector(".popup__figure-caption"),e}return e=u,(n=[{key:"open",value:function(t,e){j(O(u.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt=t,this._popupImageCaption.textContent=t}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popup.querySelector(".popup__input-form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._formButtonSelector=n._form.querySelector(".popup__submit"),n}return e=u,(n=[{key:"setButtonText",value:function(t){this._formButtonSelector.value=t}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;B(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._inputValues=t._getInputValues(),t._submitCallback(t._inputValues)}))}},{key:"close",value:function(){B(T(u.prototype),"close",this).call(this),this._form.reset()}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.userName,r=e.job,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileAvatar=document.querySelector(o),this._userName=document.querySelector(n),this._userJob=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,job:this._userJob.textContent}}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserInfo",value:function(t){this._data=t,this._profileAvatar.src=t.avatar,this._profileAvatar.alt=t.name,this._userName.textContent=this._data.name,this._userJob.textContent=this._data.about,this._userId=t._id}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponseStatus",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponseStatus)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponseStatus)}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponseStatus(t)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponseStatus)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.userName,about:t.job})}).then(this._checkResponseStatus)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponseStatus)}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponseStatus(t,"addLike")}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponseStatus(t,"removeLike")}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._confirmButton=n._popup.querySelector(".popup__submit"),n._handleFormSubmit=e,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;F(z(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._handleFormSubmit(t._cardId,t._cardElemment)}))}},{key:"setButtonText",value:function(t){this._confirmButton.value=t}},{key:"open",value:function(t,e){F(z(u.prototype),"open",this).call(this),this._cardId=t,this._cardElemment=e}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"6549de70-7f4c-4043-bf96-f9bc846b4c3b","Content-Type":"application/json"}}),Q=new u(c,d),W=new u(c,l),X=new u(c,s),Y=new v({renderer:function(t){Y.addItem(ct(t))}},".cards__list"),Z=new P(".popup_type_show-image");function tt(t,e){Z.open(t,e)}var et=new R(".popup_type_add-card",(function(t){et.setButtonText("Сохранение..."),K.addNewCard(t).then((function(t){Y.addItem(ct(t)),et.close()})).catch((function(t){console.error(t)})).finally((function(){return et.setButtonText("Сохранить")}))})),nt=new R(".popup_type_profile-edit",(function(t){nt.setButtonText("Сохранение..."),K.setUserInfo(t).then((function(t){ot.setUserInfo(t)})).then((function(){nt.close()})).catch((function(t){console.log(t)})).finally((function(){return nt.setButtonText("Сохранить")}))})),rt=new R(".popup_type_edit-avatar",(function(t){rt.setButtonText("Сохранение..."),K.updateAvatar(t.link).then((function(t){ot.setUserInfo(t)})).then((function(){rt.close()})).catch((function(t){console.log(t)})).finally((function(){return rt.setButtonText("Сохранить")}))})),ot=new A({userName:".profile__name",job:".profile__description",profileAvatar:".profile__image"}),it=new $(".popup_type_confirm",(function(t,e){it.setButtonText("Удаление..."),K.deleteCard(t).then((function(){e.remove()})).then((function(){it.close()})).catch((function(t){console.log(t)})).finally((function(){return it.setButtonText("Да")}))}));function ut(t,e,n){e?K.removeLike(t).then((function(t){n.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Remove Card Like Error: ",t)})):K.addLike(t).then((function(t){n.updateLikesCount(t.likes.length)})).catch((function(t){return console.log("Add Card Like Error: ",t)}))}function ct(t){return new r(t,"#card-template",tt,at,ot.getUserId(),ut).generateCard()}function at(t,e){it.open(t,e)}h.addEventListener("click",(function(){rt.open(),X.disableValidation()})),_.addEventListener("click",(function(){et.open(),Q.disableValidation()})),a.addEventListener("click",(function(){nt.open();var t=ot.getUserInfo();p.value=t.userName,y.value=t.job,W.disableValidation()})),Q.enableValidation(),W.enableValidation(),X.enableValidation(),Z.setEventListeners(),it.setEventListeners(),et.setEventListeners(),nt.setEventListeners(),rt.setEventListeners(),Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ot.setUserInfo(o),Y.renderItems(i.reverse())})).catch((function(t){return console.log(t)}))})();