// Класс попапа изменения аватара
class PopupChangeAvatar extends Popup {

    constructor(elem, avatarPhoto, validateForm, api) {
        super(elem);

        this.avatarPhoto = avatarPhoto;
        this.validateForm = validateForm;
        this.inputAvatarLink = this.elem.querySelector('#input-avatarLink');
        this.formElem = this.elem.querySelector('form');
        this.popupButton = this.formElem.querySelector('.popup__button');
        this.api = api;

        // обработчик submit
        this.formElem.addEventListener('submit', this.submit.bind(this));
    }

    submit(event) {
        event.preventDefault();
        this.api.saveNewAvatarOnServer()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                console.log(result);
                let avatar = result.avatar;
                this.avatarPhoto.style.backgroundImage = "url('" + avatar + "')";
            
                this.close();
                this.formElem.reset();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    validate() {
        this.formElem.reset();
        this.validateForm(this.formElem).setEventListeners();
        this.validateForm(this.formElem).setSubmitButtonState(this.formElem, this.popupButton);
        this.validateForm(this.formElem).deleteErrorMessages(this.formElem);
    }
}