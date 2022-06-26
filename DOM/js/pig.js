const activePlayer_ = document.querySelector(".player--active");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const name0 = document.getElementById("name--0");
const score0 = document.getElementById("score--0");
const current0 = document.getElementById("current--0");

const name1 = document.getElementById("name--1");
const score1 = document.getElementById("score--1");
const current1 = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove("player--winner");
  diceEl.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current0.textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active").classList.add("player--winner");
  player1.classList.toggle("player--active").classList.remove("player--winner");
};

btnNew.addEventListener("click", init);

// Rolling the dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1) Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2) Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    // 3) Check for rolled, 1: if true
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0.textContent = currentScore;
      // Change later
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  //console.log("hold button");
  if (playing) {
    // 1. Add current score to active plaer's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if the player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      diceEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--wactive");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
