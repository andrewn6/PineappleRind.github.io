"use strict";

function randomPass() {
  var letters = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-_';
  var lettersLength = letters.length;
  var length = document.getElementById('lengthInput');
  finalResult = '';

  for (var i = 0; i < length.value / 3; i++) {
    finalResult += letters[Math.floor(Math.random() * lettersLength)];
  }

  var output = document.getElementById('output');
  output.innerHTML = finalResult;
  var otherOutput = document.getElementById('outputMobile');
  otherOutput.innerHTML = finalResult;
  var overlay = document.getElementById('overlay');
  overlay.style.width = '100%';
  setTimeout(function () {
    overlay.style.width = '0%';
  }, 2000);
}

function updateCount() {
  var length = document.getElementById('lengthInput');
  var lengthCount = document.getElementById('lengthCount');
  lengthCount.innerHTML = Math.round(length.value / 3);
}

document.addEventListener("input", function () {
  updateCount();
});
updateCount();
var btn = document.getElementById('generate');
var mBtn = document.getElementById('mGenerate');
btn.addEventListener("click", function () {
  randomPass();
});
mBtn.addEventListener("click", function () {
  randomPass();
});