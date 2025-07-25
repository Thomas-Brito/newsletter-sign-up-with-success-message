// Global variables
const form = document.getElementById(`form`);
const email = document.getElementById(`email`);
const label = document.getElementById(`label`);
const main = document.getElementById(`main`);
const thanks = document.getElementById(`thanks-card`);
const userEmail = document.getElementById(`userEmail`);
const thanksButton = document.getElementById(`thanks-card__button`);

// Previne the default behavior of the submit button
function handleSubmit(e) {
  e.preventDefault();
}
form.addEventListener(`submit`, handleSubmit);

// Reset styles
function reset(){
  label.classList.remove(`main-text__label-2--active`);
  email.classList.remove(`main-text__input--error`);
}
email.addEventListener(`click`, reset)

// Valide typed email
function validation(){
  let emailTyped = email.value.trim();
  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regExEmail.test(emailTyped);
  
  if (!isValid) {
    label.classList.add(`main-text__label-2--active`);
    email.classList.add(`main-text__input--error`);
  } else {
    main.classList.add(`main--disabled`);
    thanks.classList.add(`thanks-card--active`);
    userEmail.textContent = emailTyped;
  }
}
form.addEventListener(`submit`, validation);

// Refresh page
function refresh(){
  location.reload();
}

thanksButton.addEventListener(`click`, refresh);