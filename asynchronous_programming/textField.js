document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursor;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    cursor = cursor || setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else {
        content.textContent += event.key;
      }
    }
  });

  document.addEventListener('click', () => {
    textField.classList.remove('focused');
    clearInterval(cursor);
    cursor = null;
    textField.classList.remove('cursor');
  });
});