document.addEventListener('DOMContentLoaded', () => {
  function generateAnswer() {
    return Math.floor(Math.random() * 100) + 1;
  }
  let answer = generateAnswer();
  let [guessField, guessButton] = document.querySelectorAll('input');
  let message;
  let messageNode = document.querySelector('p');

  guessButton.addEventListener('click', event => {
    event.preventDefault();
    let guess = parseInt(guessField.value, 10);

    if (guess > answer) {
      message = `the answer is lower than ${guess}`;
    } else if (guess < answer) {
      message = `the answer is higher than ${guess}`;
    } else {
      message = `you guessed right! the answer is ${guess}`
    }

    messageNode.textContent = message;
  });

  let newGameLink = document.querySelector('a');
  newGameLink.addEventListener('click', event => {
    event.preventDefault();

    answer = generateAnswer();
    message = 'new game started! make your guess';
    messageNode.textContent = message;
  });

});

randomNums = [];
for (let i = 0; i < 100000; i += 1) {
  randomNums.push(Math.floor(Math.random() * 100) + 1);
}

