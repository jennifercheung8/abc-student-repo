let button = window.document.getElementById("btn");
let home = window.document.getElementById("home");
console.log("btn");

let sw= screen.width;
let sh= screen.height;


function openWindow(){
  let randomX1 = Math.random()*(sw-200);
  let randomY1 = Math.random()*(sh-200);
  let randomX2 = Math.random()*(sw-200);
  let randomY2 = Math.random()*(sh-200);
  let width = Math.round(Math.random()*500)+200;
  let height = Math.round(Math.random()*500)+200;

  let spamCan = window.open("spam1.html", "", "width="+width+", height="+height+", left="+randomX1+", top="+randomY1+"");

  let bug = window.open("spam2.html", "", "width="+width+", height="+height+", left="+randomX2+", top="+randomY2+"");

  setTimeout(function(){
      let skull = window.open("spam3.html", "", "width="+width+", height="+height+", left="+randomX2+", top="+randomY2+"");

    }, 15000)

  setTimeout(function(){
        let sign = window.open("spam4.html", "", "width="+width+", height="+height+", left="+randomX2+", top="+randomY2+"");
      }, 22000)

  setTimeout(function(){
    button.style.display="none";
    home.style.display="block";
    }, 25000)
}

function openManyWindows(){
  for(let i =0; i<5; i++){
    openWindow();
  }
}
button.addEventListener("click", openManyWindows);
