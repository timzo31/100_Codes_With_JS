"use strict";

const message = document.querySelector(".message");
let score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score_ = 20; // State variable
score.textContent = score_;

check.addEventListener("click", function (e) {
  e.preventDefault();

  // When there is no input
  if (!guess.value) {
    message.textContent = "No number!";
  }
  // When the secretNumber is equal to the input number
  else if (guess.value == secretNumber) {
    message.textContent = "Correct Number!";
    document.body.style.backgroundColor = "#3f8";
    number.textContent = secretNumber;
    number.style.width = "30rem";
  }
  // When the input number is too high
  else if (guess.value > secretNumber) {
    if (score_ > 1) {
      message.textContent = "Too high!";
      score_--;
      score.textContent = score_;
    } else {
      message.textContent = "You lost the game !";
      score.textContent = 0;
    }
  }
  // When the input number is too low
  else {
    if (score_ > 1) {
      message.textContent = "Too low!";
      score_--;
      score.textContent = score_;
    } else {
      message.textContent = "You lost the game !";
      score.textContent = 0;
    }
  }
});

again.addEventListener("click", function (e) {
  e.preventDefault();

  secretNumber;
  document.body.style.backgroundColor = "#000";
  number.textContent = "?";
  message.textContent = "Start guessing...";
  guess.value = "";
});
