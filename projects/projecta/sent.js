let plane=document.querySelector(".plane");
let plane2=document.querySelector(".plane2");
let plane3=document.querySelector(".plane3");
let button=document.getElementById("button");
let home=document.getElementById("home");
let mailbox=document.getElementById("mailbox");
let spam=document.getElementById("spam");
let c1=document.querySelector(".c1");
let c2=document.querySelector(".c2");
let del=document.getElementById("delivered");
let lost=document.getElementById("lost");
let spammed=document.getElementById("spammed");

button.addEventListener("click", ()=>{
  swoosh.play();
  mailbox.style.display="block";
  spam.style.display="block";
  c1.style.display="block";
  c2.style.display="block";
  plane.style.display="block";
  plane.classList.add("planeMove1");
  plane2.style.display="block";
  plane2.classList.add("planeMove2");
  plane3.style.display="block";
  plane3.classList.add("planeMove3");

  setTimeout(function(){
    button.style.display="none";
    del.style.display = "block";
    lost.style.display = "block";
    spammed.style.display = "block";
    home.style.display = "block";

  }, 15000)
})
