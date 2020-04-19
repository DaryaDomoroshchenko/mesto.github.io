import "./index.css";
import Card from "./scripts/Card.js";
import CardList from "./scripts/CardList.js";
import UserInfo from "./scripts/UserInfo.js";
//import Popup from "./scripts/Popup.js";
import PopupEdit from "./scripts/PopupEdit.js";
import PopupAddPlace from "./scripts/PopupAddPlace.js";
import PopupChangeAvatar from "./scripts/PopupChangeAvatar.js";
import PopupImage from "./scripts/PopupImage.js";
import FormValidator from "./scripts/FormValidator.js";
import Api from "./scripts/Api.js";

/* Переменные */
const placesList = document.querySelector('.places-list');
const plusButton = document.querySelector('.user-info__plus-button');
const editButton = document.querySelector('.user-info__edit-button');
const avatarPhoto = document.querySelector('.user-info__photo');

/* Валидация */
const validateForm = (formElem) => new FormValidator(formElem);
const formAddValidate = new FormValidator(document.querySelector('#formAdd'));
const formEditValidate = new FormValidator(document.querySelector('#formEdit'));
const formChangeAvatarValidate = new FormValidator(document.querySelector('#formchangeAvatar'));

/* Подключение сайта к серверу */
const api = new Api({
    baseUrl: 'https://praktikum.tk/cohort9',
    headers: {
      authorization: '59aa6e9d-8ab0-4424-8b7f-633e85efdefb',
      'Content-Type': 'application/json'
    }
});

/* UserInfo */
const userInfo = new UserInfo(
    document, document, document, api
);

// Показывает актуальные данные при при загрузке страницы
const showUserInfoFromServer = userInfo.updateUserInfo();

/* Создает инстанс карточки */
const createCard = (placeName, link, likes) => new Card(placeName, link, likes);

/* Добавляет массив карточек на страницу при загрузке */
const cardList = new CardList(placesList, createCard, userInfo, api).render();

/* popupAddPlace */
const popupAddPlace = new PopupAddPlace(
    document.querySelector('.popup__addPlace'),
    createCard, placesList, validateForm, api
);

plusButton.addEventListener('click', () => {
    popupAddPlace.validate();
    popupAddPlace.open()
});

/* PopupEdit */
const popupEdit = new PopupEdit(
    document.querySelector('.popup__edit'),
    userInfo, validateForm, api
);

editButton.addEventListener('click', () => {
    popupEdit.showCurrentUserInfo();
    popupEdit.validate();
    popupEdit.open()
});

/* popupChangeAvatar */
const popupChangeAvatar = new PopupChangeAvatar(
    document.querySelector('.popup__changeAvatar'),
    avatarPhoto, validateForm, api
);

avatarPhoto.addEventListener('click', () => {
    popupChangeAvatar.validate();
    popupChangeAvatar.open()
});

/* popupImage */
const popupImage = new PopupImage(
    document.querySelector('.popup__image')
);

placesList.addEventListener('click', popupImage.openClickedImg.bind(popupImage));