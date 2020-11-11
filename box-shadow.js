function main() {
    let y = document.getElementById('yCoords');
    let x = document.getElementById('xCoords');
    let b = document.getElementById('blur');
    let c = document.getElementById('color');

    let r = document.getElementById('div');

    let px = 'px ';
    let yy = y.value - 50 + px;
    let xx = x.value - 50 + px;
    let bb = b.value/1.5 + px;
    let cc = c.value;

    r.style.boxShadow = xx + yy + bb + cc;
}

function showCode() {
    let o = document.getElementById('overlay');
    o.style.display = 'flex';
    o.style.opacity = '1';
    o.style.width = '100%';
}

function hideCode() {
    let o = document.getElementById('overlay');
    o.style.opacity = '0';
    o.style.width = '0%';
}

function updateCode() {
    let y = document.getElementById('yCoords');
    let x = document.getElementById('xCoords');
    let b = document.getElementById('blur');
    let c = document.getElementById('color');

    let yC = document.getElementById('ycode');
    let xC = document.getElementById('xcode');
    let bC = document.getElementById('blurcode');
    let cC = document.getElementById('colorcode');

    let px = 'px ';

    yC.innerHTML = Math.ceil(y.value - 50) + px;
    xC.innerHTML = Math.ceil(x.value - 50) + px;
    bC.innerHTML = Math.ceil(b.value/1.5) + px;
    cC.innerHTML = c.value;
}

function wrap() {
    main();
    updateCode();
}

oninput = e => {
    wrap();
}

let button = document.getElementById('showCode');
button.addEventListener("click", function() {
    showCode();
});

wrap();