let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
var body = document.getElementById('gradient')
var css = document.getElementById('css');

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    css.textContent = body.style.background + ";"
}
color1.addEventListener("input", inputonehandler);
function inputonehandler(){
    setGradient();
}
color2.addEventListener("input", inputonehandler);
function inputonehandler(){
    setGradient();
}
