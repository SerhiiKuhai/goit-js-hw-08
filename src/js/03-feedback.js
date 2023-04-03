import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const input = document.querySelector('.feedback-form');
const formData = {};

input.addEventListener('submit', onFormSubmit);
input.addEventListener('input', throttle(onInput, 500));

(function populateInput() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (formData) {
    input.elements.email.value = formData.email || '';
    input.elements.message.value = formData.message || '';
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
