document.getElementById("one").addEventListener("mouseover", mouseOverMini1);
document.getElementById("one").addEventListener("mouseout", mouseOutMini1);

function mouseOverMini1() {
document.getElementById("mini1").style.opacity = "1"
console.log("hello");
}

function mouseOutMini1() {
document.getElementById("mini1").style.opacity = "0"
}

document.getElementById("two").addEventListener("mouseover", mouseOverMini2);
document.getElementById("two").addEventListener("mouseout", mouseOutMini2);

function mouseOverMini2() {
document.getElementById("mini2").style.opacity = "1"
console.log("hello");
}

function mouseOutMini2() {
document.getElementById("mini2").style.opacity = "0"
}

document.getElementById("three").addEventListener("mouseover", mouseOverMini3);
document.getElementById("three").addEventListener("mouseout", mouseOutMini3);

function mouseOverMini3() {
document.getElementById("mini3").style.opacity = "1"
console.log("hello");
}

function mouseOutMini3() {
document.getElementById("mini3").style.opacity = "0"
}

document.getElementById("A").addEventListener("mouseover", mouseOverProjectA);
document.getElementById("A").addEventListener("mouseout", mouseOutProjectA);

function mouseOverProjectA() {
document.getElementById("imga").style.opacity = "1"
}

function mouseOutProjectA() {
document.getElementById("imga").style.opacity = "0"
}
