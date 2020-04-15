// Класс для валидации полей формы
class FormValidator {

    constructor(formElem) {
      this.formElem = formElem;
      this.popupButton = formElem.querySelector('.popup__button');
    }

    // Валидация полей ввода
    checkInputValidity(elem) {
      const error = this.formElem.querySelector(`#error-${elem.name}`);

      if (elem.validity.valueMissing) {
        elem.setCustomValidity("Это обязательное поле");

      } else if (elem.validity.tooShort) {
        elem.setCustomValidity("Длина должна быть от 2 до 30 символов");

      } else if (elem.validity.typeMismatch) {
        elem.setCustomValidity("Здесь должна быть ссылка");

      } else {
        elem.setCustomValidity("");
      }
      error.textContent = elem.validationMessage;
    }

    // Удаляет текст ошибок при открытии попапа
    deleteErrorMessages(formElem) {

      const elems = formElem.querySelectorAll('input'); 

      elems.forEach(elem => {
        const error = this.formElem.querySelector(`#error-${elem.name}`);
        error.textContent = ("");
      });
    }

    // Делает кнопку сабмита активной и неактивной
    setSubmitButtonState(formElem, popupButton) {

      if (!formElem.checkValidity()) {
        popupButton.setAttribute('disabled', true);
        popupButton.classList.add('button_disabled');

      } else {
        popupButton.removeAttribute('disabled');
        popupButton.classList.remove('button_disabled');
      }
    }

    // Добавляет обработчики
    setEventListeners() {
      const formArr = Array.from(this.formElem);

      formArr.forEach(elem => {
        if (elem.classList.contains("popup__input")) {
          elem.addEventListener("input", () => { this.checkInputValidity(elem) });
        }
      });

      this.formElem.addEventListener("input", () => {
        this.checkInputValidity(event.target)
      });

      this.formElem.addEventListener('input', () => {
        this.setSubmitButtonState(this.formElem, this.popupButton);
      });
    }
}