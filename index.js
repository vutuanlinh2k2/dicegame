// random number 1 - 6 for player 1 and showing it to the screen
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");

// random number 1 - 6 for player 2 and showing it to the screen
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

// checking who wins or it's a draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 wins !";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins ! 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw !";
}
