const SOURCES = [
  "assets/logo0_no_text.svg",
  "assets/logo1_no_text.svg",
  "assets/logo3_no_text.svg",
  "assets/logo4_no_text.svg",
  "assets/logo5_no_text.svg"
];
const MAX_FLICKERS = 4;
const STATIC_LOGO = "assets/logo2_no_text.svg";

var logo = document.getElementById("main-logo");
var reps = 0;
var numFlickers = 1;

function cycleLogo() {
  var index = Math.floor(Math.random() * SOURCES.length);
  logo.src = SOURCES[index];
}

function innerLoop() {
  if (reps >= numFlickers) {
    reps = 0;
    logo.src = STATIC_LOGO;
    return;
  }
  reps++;
  var interval = Math.round(Math.random() * 100) + 50;
  setTimeout(function() {
    cycleLogo();
    innerLoop();  
  }, interval);
};

(function outerLoop() {
  var interval = Math.floor(Math.random() * 6000) + 4000;
  numFlickers = Math.floor(Math.random() * MAX_FLICKERS) + 5;
  setTimeout(function() {
    innerLoop();
    outerLoop();
  }, interval);
}());
