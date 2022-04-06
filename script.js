const $stoneButton1 = document.querySelector(".button-stone-play-1");
const $paperButton1 = document.querySelector(".button-paper-play-1");
const $scissorsButton1 = document.querySelector(".button-scissors-play-1");

const $stoneButton2 = document.querySelector(".button-stone-play-2");
const $paperButton2 = document.querySelector(".button-paper-play-2");
const $scissorsButton2 = document.querySelector(".button-scissors-play-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

const $winnerTitle = document.querySelector(".winner-title");

let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null;

function verifyGamer() {
  if (movePlayer1 === "stone" && movePlayer2 === "paper") {
    gameResult = 2;
  } else if (movePlayer1 === "stone" && movePlayer2 === "scissors") {
    gameResult = 1;
  } else if (movePlayer1 === "paper" && movePlayer2 === "stone") {
    gameResult = 1;
  } else if (movePlayer1 === "paper" && movePlayer2 === "scissors") {
    gameResult = 2;
  } else if (movePlayer1 === "scissors" && movePlayer2 === "stone") {
    gameResult = 2;
  } else if (movePlayer1 === "scissors" && movePlayer2 === "paper") {
    gameResult = 1;
  } else if (movePlayer1 === movePlayer2) {
    gameResult = 0;
  }
}

function printGameResult() {
  if (gameResult === 0) {
    $winnerTitle.innerHTML = "Empatou";
  } else if (gameResult === 1) {
    $winnerTitle.innerHTML = "Jogadora 1 ganhou";
  } else if (gameResult === 2) {
    $winnerTitle.innerHTML = "Jogadora 2 ganhou";
  }
}

$stoneButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="stone.png" alt="">';
  movePlayer1 = "stone";
  verifyGamer();
  printGameResult();
});

$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="paper.png" alt="">';
  movePlayer1 = "paper";
  verifyGamer();
  printGameResult();
});

$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img class="move-image" src="scissors.png" alt="">';
  movePlayer1 = "scissors";
  verifyGamer();
  printGameResult();
});

$stoneButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="stone.png" alt="">';
  movePlayer2 = "stone";
  verifyGamer();
  printGameResult();
});

$paperButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="paper.png" alt="">';
  movePlayer2 = "paper";
  verifyGamer();
  printGameResult();
});

$scissorsButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img class="move-image" src="scissors.png" alt="">';
  movePlayer2 = "scissors";
  verifyGamer();
  printGameResult();
});
