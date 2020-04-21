// Класс для работы с данными пользователя.
export default class UserInfo {

    constructor(profileName, profileJob, avatarPhoto, api) {
        this.profileName = profileName.querySelector('.user-info__name');
        this.profileJob = profileJob.querySelector('.user-info__job');
        this.avatarPhoto = avatarPhoto.querySelector('.user-info__photo');
        this.inputName = document.querySelector('#input-profileName');
        this.inputJob = document.querySelector('#input-job');
        this.myId = null;
        this.api = api;
    }

    // Обновляет данные внутри экземпляра класса
    setUserInfo({name, job}) {
        this.profileName = name;
        this.profileJob = job;
    }

    // Отображает актуальные данные при загрузке страницы
    updateUserInfo() {
        this.api.downloadUserInfoFromServer()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                this.myId = result._id;
                const name = result.name;
                const job = result.about;
                const avatar = result.avatar;

                this.profileName.textContent = name;
                this.profileJob.textContent = job;
                this.avatarPhoto.style.backgroundImage = "url('" + avatar + "')";

                this.setUserInfo({name, job});

                return result;
            })
            .then((result) => {
                this.inputName.value = result.name;
                this.inputJob.value = result.about;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Возвращает id пользователя
    getMyId() {
        return this.myId;
    }

    getProfileName() {
        return this.profileName;
    }

    getProfileJob() {
        return this.profileJob;
    }
}