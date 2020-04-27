// Класс для всплывающего попапа
export default class Popup {

    constructor(elem) {
        this.elem = elem;

        // обработчики
        // close with esc
        document.addEventListener('keydown', this.escHandler.bind(this));
        // close with cross
        this.elem.querySelector('.popup__close')
        .addEventListener('click', this.close.bind(this));
    }

    open() {
        this.elem.classList.add('popup_is-opened');
    }

    close() {
        this.elem.classList.remove('popup_is-opened');
    }

    escHandler({keyCode}) {
        if (keyCode === 27) {
            this.close();
        }
    }
}