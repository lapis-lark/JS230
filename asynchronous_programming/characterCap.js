document.addEventListener('DOMContentLoaded', event => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button  = composer.querySelector('.button');

  function updateCounter() {
    let remaining = 50 - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;

    let invalid = remaining < 0

    textarea.classList.toggle('invalid', invalid);
    button.disable = invalid;
  }

  textarea.addEventListener('keyup', event => {
    updateCounter();
  });

  updateCounter();
});