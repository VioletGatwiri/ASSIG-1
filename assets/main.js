var boxes = document.querySelectorAll(".box");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBoxes;
var $ = document.querySelector(".rgbspan");
var colors = document.generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random( + 6))];
s.textContent = pickedColor;
var playbtn = document.querySelectorAll("#playAgain");
var easyBtn = document.querySelectorAll("#easyBtn");
var hardBtn = document.querySelectorAll("#hardBtn");
var boxCount = 6;


var statusText = document.querySelector(".status");
statusText.textContent = "Let's have fun!";

easyBtn.addEventListener('click', function () {

})
var colors = [];
createBoxes(n);
resetGame();

function checkColors(e) {
  // your code here
}

function resetGame() {
  createBoxes(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the boxes.";
}

function setColors() {
  for (var i = 0; i < colorsBoxes.length; i++) {
    colorsBoxes[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(232) + ", " + random(232) + ", " + random(232) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
}

function createBoxes(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var box = document.createElement("div");
    box.classList.add("colors__box");
    colorsEl.appendChild(box);
  }
  colorsBoxes = document.querySelectorAll(".colors__box");
  for (var i = 0; i < colorsBoxes.length; i++) {
    colorsBoxes[i].addEventListener("click", checkColors);
  }
}
