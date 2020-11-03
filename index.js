let r = "c";
let f = "r";

window.addEventListener("keydown", function(e) {
  if (e.key === f) {
    window.addEventListener("keydown", function(e) {
      if (e.key === 'i') {
        window.addEventListener("keydown", function(e) {
          if (e.key === r) {
            window.addEventListener("keydown", function(e) {
              if (e.key === 'k') {
                window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
              }
            })
          }
        })
      }
    })
  }
  })

  function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "appear";
    let y = document.getElementById("overlay");
    y.style.display = 'block';
    y.addEventListener("click", function(){
      y.style.opacity = '0';
      x.className = x.className.replace("appear", "");
      setTimeout(function(){
        y.style.display = 'block';
      }, 1000)
    });
    setTimeout(function() {y.style.opacity = '1';},1)
    setTimeout(function(){ x.className = x.className.replace("appear", ""); y.style.opacity = '0';}, 3000);
    setTimeout(function() {
      y.style.display = 'none';
    },4000);
  }

function copy() { 
  let text = "pr#0215";
  navigator.clipboard.writeText(text)
  let tooltip = document.getElementById('copied');
  tooltip.style.opacity = '1';
  setTimeout(function(){
    tooltip.style.opacity = '0';
  },1000);
}