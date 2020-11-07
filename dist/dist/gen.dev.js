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
}

function updateCount() {
  var length = document.getElementById('lengthInput');
  var lengthCount = document.getElementById('lengthCount');
  lengthCount.innerHTML = Math.round(length.value / 3);
}

document.addEventListener("input", function () {
  updateCount();
});