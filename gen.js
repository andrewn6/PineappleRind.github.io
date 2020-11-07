function randomPass() {
    let letters = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-_';
    let lettersLength = letters.length;
    let length = document.getElementById('lengthInput');
    finalResult = '';
    for (var i = 0; i < length.value / 3; i++) {
        finalResult += letters[Math.floor(Math.random() * lettersLength)];
    }
    let output = document.getElementById('output');
    output.innerHTML = finalResult;

    let otherOutput = document.getElementById('outputMobile');
    otherOutput.innerHTML = finalResult;

    if (otherOutput.innerHTML.length >= 20 && otherOutput.innerHTML.length <= 25) {
        otherOutput.style.fontSize = '25px'
    } else if (otherOutput.innerHTML.length <= 30 && otherOutput.innerHTML.length >= 25) {
        otherOutput.style.fontSize = '20px'
    } else if (otherOutput.innerHTML.length <= 33 && otherOutput.innerHTML.length >= 30) {
        otherOutput.style.fontSize = '15px'
    }

    let overlay = document.getElementById('overlay');
    overlay.style.width = '100%';

    setTimeout(function() {
        overlay.style.width = '0%';
    }, 2000)
}


function updateCount() {
    let length = document.getElementById('lengthInput');
    let lengthCount = document.getElementById('lengthCount');
    lengthCount.innerHTML = Math.round(length.value / 3);
}

document.addEventListener("input", function() {
    updateCount();
})
updateCount();

let btn = document.getElementById('generate');
let mBtn = document.getElementById('mGenerate');
btn.addEventListener("click", function() {
    randomPass();
})

mBtn.addEventListener("click", function() {
    randomPass();
})