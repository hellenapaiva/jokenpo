const $stoneButton1 = document.querySelector(".button-stone-play-1");
const $paperButton1 = document.querySelector(".button-paper-play-1");
const $scissorsButton1 = document.querySelector(".button-scissors-play-1");

const $stoneButton2 = document.querySelector(".button-stone-play-2");
const $paperButton2 = document.querySelector(".button-paper-play-2");
const $scissorsButton2 = document.querySelector(".button-scissors-play-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

$stoneButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="stone.png" alt="">';
});

$paperButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML ='<img class="move-image" src="paper.png" alt="">';
});

$scissorsButton1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="scissors.png" alt="">';
});

$stoneButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="stone.png" alt="">';
});

$paperButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML ='<img class="move-image" src="paper.png" alt="">';
});

$scissorsButton2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img class="move-image" src="scissors.png" alt="">';
});


