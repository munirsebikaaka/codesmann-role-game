"use strict";
const btnRunNumber = document.querySelector(".btn--run");
const btnStoreMarks = document.querySelector(".btn--store");
const bntStartAgain = document.querySelector(".btn--again");
const roleDice = document.querySelector(".role-number");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentEl0 = document.getElementById("current--0");
const currentEl1 = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
///////////////////////////////////////////////////////////
score0El.textContent = 0;
score1El.textContent = 0;
roleDice.classList.add("hidden");
///////////////////////////////////////////////////////////
let score, currentScore, activePlayer, playing;
////////////////////////////////////////////////////////////
function startGame() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  score[activePlayer] = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("active--player");
  player1El.classList.remove("active--player");
}
startGame();
////////////////////////////////////////////////////////////
const fromOneToAnother = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("active--player");
  player1El.classList.toggle("active--player");
};
///////////////////////////////////////////////////////////
btnRunNumber.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    roleDice.classList.remove("hidden");
    roleDice.src = `dice-${dice}.png`;
    if (dice !== 1 && dice !== 2) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      fromOneToAnother();
    }
  }
});
/////////////////////////////////////////////////////////
btnStoreMarks.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active--player");
      roleDice.classList.add("hidden");
    } else {
      fromOneToAnother();
    }
  }
});
////////////////////////////////////////////////////////
bntStartAgain.addEventListener("click", startGame);
