/** @format */

'use strict ';
let sNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hs = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = sNum;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#000000';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = sNum;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === sNum) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hs) {
      hs = score;
      document.querySelector('.highscore').textContent = hs;
    }
  } else if (guess !== sNum) {
    if (score > 1) {
      displayMessage(guess > sNum ? 'To High' : 'To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("you've Lost The Game");
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#D3202F';
    }
  }
});
