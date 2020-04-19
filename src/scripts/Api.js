/* Работа с API */
export default class Api {
    
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    downloadUserInfoFromServer() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
    }

    saveNewUserInfoOnServer() {
        const inputName = document.querySelector('#input-profileName');
        const inputJob = document.querySelector('#input-job');

        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: inputName.value,
                about: inputJob.value
            })
        })
    }

   saveNewAvatarOnServer() {
        const inputAvatarLink = document.querySelector('#input-avatarLink');

        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: inputAvatarLink.value
            })
        })
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers
        }) 
    }

    addNewCard() {
        const inputPlaceName = document.querySelector('#input-placeName');
        const inputLink = document.querySelector('#input-link');

        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: inputPlaceName.value,
                link: inputLink.value
            })
        })  
    }

    deleteCard(cardId) {
        console.log('deleteCard API');
        console.log(`${this.baseUrl}/cards/${cardId}`);
        
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        })
    }

    likeCard(cardId) {
        console.log('likeCard API');
        console.log(`${this.baseUrl}/cards/like/${cardId}`);

        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
            method: 'PUT',
            headers: this.headers
        })
    }

    removeLike(cardId) {
        console.log('removeLike API');
        console.log(`${this.baseUrl}/cards/like/${cardId}`);

        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        })
    }
}