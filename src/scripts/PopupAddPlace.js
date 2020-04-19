import Popup from "./Popup.js";

// Класс попапа добавления карточки
export default class PopupAddPlace extends Popup {

    constructor(elem, createCard, container, validateForm, api) {
        super(elem);

        this.createCard = createCard;
        this.container = container;
        this.validateForm = validateForm;
        this.inputNameElem = this.elem.querySelector('#input-placeName');
        this.inputLinkElem = this.elem.querySelector('#input-link');
        this.formElem = this.elem.querySelector('form');
        this.popupButton = this.formElem.querySelector('.popup__button');
        this.api = api;

        // обработчик submit
        this.formElem.addEventListener('submit', this.submit.bind(this));
    }

    submit(event) {
        event.preventDefault();
        this.api.addNewCard()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                console.log(result);

                let placeName = result.name;
                let link = result.link;
                let likes = result.likes;
                let id = result._id;

                // Создание DOM-элемента карточки
                let cardElem = this.createCard(placeName, link, likes);
                let card = cardElem.createCard(placeName, link, likes);

                this.createDataAttribute(id, card);
                this.addCard(card);

                this.close();
                this.formElem.reset();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Записывает id карточки в ее data-атрибут
    createDataAttribute(id, card) {
        let attribute = document.createAttribute("data-id");
        attribute.value = id;
        card.setAttributeNode(attribute);
    }

    // Добавляет карточку в список
    addCard(card) {
        this.container.appendChild(card);
    }

    validate() {
        this.formElem.reset();
        this.validateForm(this.formElem).setEventListeners();
        this.validateForm(this.formElem).setSubmitButtonState(this.formElem, this.popupButton);
        this.validateForm(this.formElem).deleteErrorMessages(this.formElem);
    }
}