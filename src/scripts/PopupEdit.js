import Popup from "./Popup.js";

// Класс попапа изменения профиля
export default class PopupEdit extends Popup {

    constructor(elem, userInfo, validateForm, api) {
        super(elem);

        this.userInfo = userInfo;
        this.validateForm = validateForm;
        this.profileName = document.querySelector('.user-info__name');
        this.profileJob = document.querySelector('.user-info__job');
        this.inputName = this.elem.querySelector('#input-profileName');
        this.inputJob = this.elem.querySelector('#input-job');
        this.formElem = this.elem.querySelector('form');
        this.popupButton = this.formElem.querySelector('.popup__button');
        this.formInputs = this.formElem.querySelectorAll('input');
        this.api = api;

        // обработчик submit
        this.formElem.addEventListener('submit', this.submit.bind(this));
    }

    // Отображает актуальные данные при открытии формы
    showCurrentUserInfo() {
        const name = this.userInfo.getProfileName();
        const job = this.userInfo.getProfileJob();
        this.inputName.value = name;
        this.inputJob.value = job;
    }

    submit(event) {
        event.preventDefault();
        this.api.saveNewUserInfoOnServer()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                this.profileName.textContent = result.name;
                this.profileJob.textContent = result.about;
                
                return result;
            })
            .then((result) => {
                const name = result.name;
                const job = result.about;
                this.userInfo.setUserInfo({name, job});

                this.close();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    validate() {
        this.validateForm(this.formElem).setEventListeners();

        for (const input of this.formInputs) {
            this.validateForm(this.formElem).checkInputValidity(input);
        }
        
        this.validateForm(this.formElem).setSubmitButtonState(this.formElem, this.popupButton);
    }
}