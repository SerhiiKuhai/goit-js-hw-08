import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const input = document.querySelector('.feedback-form');
let formData = {};

input.addEventListener('submit', onFormSubmit);
input.addEventListener('input', throttle(onInput, 500));

(function populateInput() {
  const formDataGetItem = localStorage.getItem(STORAGE_KEY);
  if (formDataGetItem) {
    formData = JSON.parse(formDataGetItem);

    if (formData.email) {
      input.elements.email.value = formData.email;
    }
    if (formData.message) {
      input.elements.message.value = formData.message;
    }
  }
})();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
