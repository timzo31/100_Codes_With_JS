"use strict";

const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let randNumber = Math.floor(Math.random() * 20) + 1;
console.log(randNumber);

check.addEventListener("click", function (e) {
  e.preventDefault();
  if (guess.value == randNumber) {
    message.textContent = "Correct Number!";
    document.body.style.backgroundColor = "#3f8";
    number.textContent = randNumber;
  } else if (guess.value > randNumber) {
    message.textContent = "Should be less!";
  } else {
    message.textContent = "Should be greater!";
  }
});

again.addEventListener("click", function (e) {
  e.preventDefault();

  randNumber;
  document.body.style.backgroundColor = "#000";
  number.textContent = "?";
  message.textContent = "Start guessing...";
  guess.value = "";
});
