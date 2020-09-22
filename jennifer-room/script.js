document.getElementById("project").addEventListener("mouseover", mouseOverProject);
document.getElementById("project").addEventListener("mouseout", mouseOutProject);

document.getElementById("mini").addEventListener("mouseover", mouseOverMini);
document.getElementById("mini").addEventListener("mouseout", mouseOutMini);


function mouseOverProject() {
document.getElementById("preimg").style.opacity = "1"
}

function mouseOutProject() {
document.getElementById("preimg").style.opacity = "0"
}

function mouseOverMini() {
document.getElementById("miniimg").style.opacity = "1"
console.log("hello");
}

function mouseOutMini() {
document.getElementById("miniimg").style.opacity = "0"
}
