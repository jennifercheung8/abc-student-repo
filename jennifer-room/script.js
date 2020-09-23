// document.getElementById("project").addEventListener("mouseover", mouseOverProject);
// document.getElementById("project").addEventListener("mouseout", mouseOutProject);

document.getElementById("one").addEventListener("mouseover", mouseOverMini1);
document.getElementById("one").addEventListener("mouseout", mouseOutMini1);


// function mouseOverProject() {
// document.getElementById("preimg").style.opacity = "1"
// }
//
// function mouseOutProject() {
// document.getElementById("preimg").style.opacity = "0"
// }

function mouseOverMini1() {
document.getElementById("mini1").style.opacity = "1"
console.log("hello");
}

function mouseOutMini1() {
document.getElementById("mini1").style.opacity = "0"
}
