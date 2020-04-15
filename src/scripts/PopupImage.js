// Класс попапа увеличенной картинки
class PopupImage extends Popup {

    constructor(elem) {
        super(elem);

        this.popupImage = this.elem.querySelector('.popup__big-image');
    }

    getUrl(clickedImage) {
        const urlString = clickedImage.getAttribute('style');
        this.popupImage.setAttribute('src', urlString.slice(urlString.indexOf('(') + 2, urlString.indexOf(')') - 1));
    }

    openClickedImg(event) {
        if (event.target.classList.contains('place-card__image')) {
            this.open();
            this.getUrl(event.target);
        }
    }
}