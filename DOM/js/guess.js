"use strict";

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score_ = 20; // State variable
score.textContent = score_;
let highscoreSet = 0;

const displayMessage = function (mess) {
  message.textContent = mess;
};

/*check.addEventListener("click", function (e) {
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
    number.style.backgroundColor = "#fff";
    number.style.color = "#000";

    if (score_ > highscoreSet) {
      highscoreSet = score_;
      highscore.textContent = highscoreSet;
    }
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
*/
///////////////// DRY CODE /////////////////////

check.addEventListener("click", function (e) {
  e.preventDefault();

  // When there is no input
  if (!guess.value) {
    displayMessage("No number!");
  }
  // When the secretNumber is equal to the input number
  else if (guess.value == secretNumber) {
    mdisplayMessage("Correct Number!");
    document.body.style.backgroundColor = "#3f8";
    number.textContent = secretNumber;
    number.style.width = "30rem";
    number.style.backgroundColor = "#fff";
    number.style.color = "#000";

    if (score_ > highscoreSet) {
      highscoreSet = score_;
      highscore.textContent = highscoreSet;
    }
  }
  // When is wrong
  else if (guess.value !== secretNumber) {
    if (score_ > 1) {
      displayMessage(guess.value > secretNumber ? "Too high!" : "Too low!");
      score_--;
      score.textContent = score_;
    } else {
      displayMessage("You lost the game !");
      score.textContent = 0;
    }
  }
});
/////////////// CHALENGE #1 //////////////
again.addEventListener("click", function () {
  score_ = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = score_;
  document.body.style.backgroundColor = "#222";
  number.textContent = "?";
  displayMessage("Start guessing...");
  guess.value = "";
});
