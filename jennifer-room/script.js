let one = document.getElementById("one");
one.style.opacity="0";
one.addEventListener("mouseover", mouseOverMini1);
one.addEventListener("mouseout", mouseOutMini1);

function mouseOverMini1() {
document.getElementById("mini1").style.opacity = "1";
}
function mouseOutMini1() {
document.getElementById("mini1").style.opacity = "0"
}

let two = document.getElementById("two");
two.style.opacity="0";
two.addEventListener("mouseover", mouseOverMini2);
two.addEventListener("mouseout", mouseOutMini2);

function mouseOverMini2() {
document.getElementById("mini2").style.opacity = "1";
}
function mouseOutMini2() {
document.getElementById("mini2").style.opacity = "0"
}

let three = document.getElementById("three");
three.style.opacity="0";
three.addEventListener("mouseover", mouseOverMini3);
three.addEventListener("mouseout", mouseOutMini3);

function mouseOverMini3() {
document.getElementById("mini3").style.opacity = "1";
}
function mouseOutMini3() {
document.getElementById("mini3").style.opacity = "0"
}

let four = document.getElementById("four");
four.style.opacity="0";
four.addEventListener("mouseover", mouseOverMini4);
four.addEventListener("mouseout", mouseOutMini4);

function mouseOverMini4() {
document.getElementById("mini4").style.opacity = "1";
}
function mouseOutMini4() {
document.getElementById("mini4").style.opacity = "0"
}

let five = document.getElementById("five");
five.style.opacity="0";
five.addEventListener("mouseover", mouseOverMini5);
five.addEventListener("mouseout", mouseOutMini5);

function mouseOverMini5() {
document.getElementById("mini5").style.opacity = "1";
}
function mouseOutMini5() {
document.getElementById("mini5").style.opacity = "0"
}

let six = document.getElementById("six");
six.style.opacity="0";
six.addEventListener("mouseover", mouseOverMini6);
six.addEventListener("mouseout", mouseOutMini6);

function mouseOverMini6() {
document.getElementById("mini6").style.opacity = "1";
}
function mouseOutMini6() {
document.getElementById("mini6").style.opacity = "0"
}

let seven = document.getElementById("seven");
seven.style.opacity="0";
seven.addEventListener("mouseover", mouseOverMini7);
seven.addEventListener("mouseout", mouseOutMini7);

function mouseOverMini7() {
document.getElementById("mini7").style.opacity = "1";
}
function mouseOutMini7() {
document.getElementById("mini7").style.opacity = "0"
}

let pA = document.getElementById("A");
pA.style.opacity="0";
pA.classList.add("boxes");
pA.style.animationDelay="1s";
pA.addEventListener("mouseover", mouseOverProjectA);
pA.addEventListener("mouseout", mouseOutProjectA);

function mouseOverProjectA() {
document.getElementById("imga").style.opacity = "1"
}
function mouseOutProjectA() {
document.getElementById("imga").style.opacity = "0"
}

let pB = document.getElementById("B");
pB.style.opacity="0";
pB.classList.add("boxes");
pB.style.animationDelay="1.5s";
pB.addEventListener("mouseover", mouseOverProjectB);
pB.addEventListener("mouseout", mouseOutProjectB);

function mouseOverProjectB() {
document.getElementById("imgb").style.opacity = "1"
}
function mouseOutProjectB() {
document.getElementById("imgb").style.opacity = "0"
}

let pC = document.getElementById("C");
pC.style.opacity="0";
pC.classList.add("boxes");
pC.style.animationDelay="2s";
pC.addEventListener("mouseover", mouseOverProjectC);
pC.addEventListener("mouseout", mouseOutProjectC);

function mouseOverProjectC() {
document.getElementById("imgc").style.opacity = "1"
}
function mouseOutProjectC() {
document.getElementById("imgc").style.opacity = "0"
}

let isInViewport = function (elem) {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

window.addEventListener('scroll', function (event) {
	if (isInViewport(one)) {
    one.classList.add("boxes");
    one.style.animationDelay="0.5s";
    two.classList.add("boxes");
    two.style.animationDelay="1s";
    three.classList.add("boxes");
    three.style.animationDelay="1.5s";
    four.classList.add("boxes");
    four.style.animationDelay="2s";
    five.classList.add("boxes");
    five.style.animationDelay="2.5s";
    six.classList.add("boxes");
    six.style.animationDelay="3s";
    seven.classList.add("boxes");
    seven.style.animationDelay="3.5s";
	}
}, false);
