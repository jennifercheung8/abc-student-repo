var mail= document.querySelector(".mailNotif");
var head= document.getElementById("head");
var notif=document.getElementById("notif");
var menu=document.querySelector(".menu");
var inbox=document.getElementById("inbox");
var sent=document.getElementById("sent");
var drafts=document.getElementById("drafts");
var spam=document.getElementById("spam");
var received=document.getElementById("received")

mail.style.display="none";
notif.style.display="none";
menu.style.display="none";
// inbox.style.display="none";
// sent.style.display="none";
// drafts.style.display="none";
// spam.style.display="none";

head.addEventListener("click", mailAppear);
mail.addEventListener("click", menuAppear);

function mailAppear(){
  mail.style.display="block";
  mail.classList.add("mailRise");
  received.play()

  setTimeout(function(){
    notif.style.display = "block";
    notif.classList.add("notifAppear");
  }, 3000)
}

function menuAppear(){
  menu.style.display="flex";
  menu.classList.add("menuSlide");
}
