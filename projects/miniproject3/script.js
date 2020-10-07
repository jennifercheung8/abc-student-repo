var door = document.querySelector(".door");
var backDoor = document.querySelector(".backDoor");
var door2 = document.querySelector(".door2");
var backDoor2 = document.querySelector(".backDoor2");

backDoor2.style.display="none";

let stars = document.querySelector(".stars");
stars.style.display="none";

door.addEventListener("click", toggleDoor);

function toggleDoor() {
  door.classList.add("doorOpen");
  backDoor.classList.add("doorZoom");

  setTimeout(function(){
    document.body.style.backgroundColor = "#06132e";
    backDoor.style.display = "none";
    stars.style.display = "block";
  }, 3000)
}

var star1 = document.querySelector(".star1");
var star2 = document.querySelector(".star2");
var star3 = document.querySelector(".star3");
var star4 = document.querySelector(".star4");
var star5 = document.querySelector(".star5");

star1.addEventListener("click", moveStars);

function moveStars() {
  star1.classList.add("move1");
  star2.classList.add("move2");
  star3.classList.add("move3");
  star4.classList.add("move4");
  star5.classList.add("move5");
  console.log("hello");

  setTimeout(function(){
    star1.classList.add("bigStar");
    star2.style.display = "none";
    star3.style.display = "none";
    star4.style.display = "none";
    star5.style.display = "none";
  }, 10000)

  setTimeout(function(){
    backDoor2.style.display="block"
  }, 12000)
}

door2.addEventListener("click", toggleDoor2);

function toggleDoor2() {
  door2.classList.add("doorOpen2");
  backDoor2.classList.add("doorZoom2");

  setTimeout(function(){
    document.body.style.backgroundColor = "white";
    backDoor2.style.display = "none";
    location.reload();
  }, 3000)
}
