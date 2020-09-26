let button = window.document.getElementById("btn");
console.log("btn");

let sw= screen.width;
let sh= screen.height;

function openWindow(){
  console.log("open window");
  let randomX = Math.random()*(sw-200);
  let randomY = Math.random()*(sh-200);
  let newWindow = window.open("popup.html", "", "width=200, height=200, left="+randomX+", top="+randomY+"");

let randomTime = 1000+ Math.random() * 4000;
  setTimeout(function(){
    newWindow.close();
  }, randomTime);
}

function openManyWindows(){
  for(let i =0; i<10; i++){
    openWindow();
  }
}
button.addEventListener("click", openManyWindows);
