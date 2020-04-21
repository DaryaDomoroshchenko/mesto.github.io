// Класс, создающий карточку
export default class Card {

    // Создает инстанс карточки
    constructor(placeName, link, likes) {
    }

    // Создает DOM-элемент карточки
    createCard(placeName, link, likes) {

        const card = document.createElement('div');
        const cardBgImage = document.createElement('div');
        const cardRemover = document.createElement('button');
        const cardDescription = document.createElement('div');
        const cardName = document.createElement('h4');
        const cardLikesCont = document.createElement('div');
        const cardLike = document.createElement('button');
        const cardLikesNumber = document.createElement('p');

        card.classList.add('place-card');
        cardBgImage.classList.add('place-card__image');
        cardRemover.classList.add('place-card__delete-icon');
        cardDescription.classList.add('place-card__description');
        cardName.classList.add('place-card__name');
        cardLikesCont.classList.add('place-card__likes-container');
        cardLike.classList.add('place-card__like-icon');
        cardLikesNumber.classList.add('place-card__likes-number');

        cardName.textContent = placeName;
        cardBgImage.style.backgroundImage = "url" + "(" + link + ")";
        cardLikesNumber.textContent = likes.length;

        card.appendChild(cardBgImage);
        cardBgImage.appendChild(cardRemover);
        cardDescription.appendChild(cardName);
        cardLikesCont.appendChild(cardLike);
        cardLikesCont.appendChild(cardLikesNumber);
        cardDescription.appendChild(cardLikesCont);
        card.appendChild(cardDescription);

        return card;
    }
}