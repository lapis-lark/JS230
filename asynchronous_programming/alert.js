// click button
// 'alert' button
// 


let button = document.querySelector('#alert')
let message = document.querySelector('textarea').value

function displayAlert() {
  let message = document.querySelector('textarea').value
  alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#alert');
  button.addEventListener('click', displayAlert);
})