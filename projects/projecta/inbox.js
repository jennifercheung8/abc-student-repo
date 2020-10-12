let one = document.getElementById("one");
let contentElement = document.getElementById("oneText");
let text = contentElement.innerHTML;
let letters = text.split("");
let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
contentElement.innerHTML = letterSpans.join("");
let spanTags = contentElement.getElementsByTagName("span");
let sender1 = document.getElementById("sender1");

one.addEventListener("input", ()=>{
  let sliderValue = one.value;
  for(let i = 0; i < spanTags.length; i++){

    // console.log(spanTags[i]);
    let op = (sliderValue*(i+15))*0.05;
    spanTags[i].style.opacity = op;
  }
  if (sliderValue==0){
    sender1.style.fontWeight = "normal";
  }
})

let two = document.getElementById("two");
let contentElement2 = document.getElementById("twoText");
let text2 = contentElement2.innerHTML;
let letters2 = text2.split("");
let letterSpans2 = letters2.map((letter)=>{ return "<span>"+letter+"</span>"});
contentElement2.innerHTML = letterSpans2.join("");
let spanTags2 = contentElement2.getElementsByTagName("span");
let sender2 = document.getElementById("sender2");

two.addEventListener("input", ()=>{
  let sliderValue = two.value;
  for(let i = 0; i < spanTags2.length; i++){

    // console.log(spanTags2[i]);
    let op = (sliderValue*(i+15))*0.05;
    spanTags2[i].style.opacity = op;
  }
  if (sliderValue==0){
    sender2.style.fontWeight = "normal";
  }
})

let three = document.getElementById("three");
let contentElement3 = document.getElementById("threeText");
let text3 = contentElement3.innerHTML;
let letters3 = text3.split("");
let letterSpans3 = letters3.map((letter)=>{ return "<span>"+letter+"</span>"});
contentElement3.innerHTML = letterSpans3.join("");
let spanTags3 = contentElement3.getElementsByTagName("span");
let sender3 = document.getElementById("sender3");

three.addEventListener("input", ()=>{
  let sliderValue = three.value;
  for(let i = 0; i < spanTags3.length; i++){

    // console.log(spanTags3[i]);
    let op = (sliderValue*(i+15))*0.05;
    spanTags3[i].style.opacity = op;
  }
  if (sliderValue==0){
    sender3.style.fontWeight = "normal";
  }
})

let four = document.getElementById("four");
let contentElement4 = document.getElementById("fourText");
let text4 = contentElement4.innerHTML;
let letters4 = text4.split("");
let letterSpans4 = letters4.map((letter)=>{ return "<span>"+letter+"</span>"});
contentElement4.innerHTML = letterSpans4.join("");
let spanTags4 = contentElement4.getElementsByTagName("span");
let sender4 = document.getElementById("sender4");

let mailNotif = document.querySelector(".mailNotif");
let clear = document.getElementById("clear");
let notifNum = document.getElementById("notifNum");
let range = document.querySelector(".range");
let btn = document.getElementById("btn");
let trash = document.getElementById("trash");

mailNotif.style.display="none";
btn.style.display="none";

four.addEventListener("input", ()=>{
  let sliderValue = four.value;
  for(let i = 0; i < spanTags4.length; i++){

    // console.log(spanTags4[i]);
    let op = (sliderValue*(i+15))*0.05;
    spanTags4[i].style.opacity = op;
  }
  if (sliderValue==0){
    sender4.style.fontWeight = "normal";
    mailNotif.style.display="block";

  }
})

function inputHappened() {
  console.log("what's input?");
  notifNum.innerHTML = clear.value;
  let notifValue= clear.value;
  if (notifValue==0){
    btn.style.display="block";
    trash.play();
  }
}
clear.addEventListener("input", inputHappened);





// for(let i=0; i<10; i++){
//   for(let j=0; j<10; j++){
//     let background = document.createElement("P");
//     background.innerText = "INBOX";
//     background.style.left=j*100+"px";
//     document.body.appendChild(background);
//   }
// }
