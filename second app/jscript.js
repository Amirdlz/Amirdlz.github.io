var css = document.querySelector("h3");
var input1 = document.querySelector(".inp1");
var input2 = document.querySelector(".inp2");
var background = document.getElementById("body");


function changingColors () {
    background.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    css.textContent = background.style.background;
}

input1.addEventListener("input", changingColors);
input2.addEventListener("input", changingColors);