const SOURCES = [
  "assets/logo1_no_text.svg",
  "assets/logo2_no_text.svg",
  "assets/logo3_no_text.svg",
  "assets/logo4_no_text.svg",
  "assets/logo5_no_text.svg"
];

function cycleLogo() {
  var index = Math.floor(Math.random() * SOURCES.length);
  var logo = document.getElementById("main-logo");
  logo.src = SOURCES[index];
}

(function loop() {
  var interval = Math.round(Math.random() * 400) + 25;
  setTimeout(function() {
    cycleLogo();
    loop();  
  }, interval);
}());
