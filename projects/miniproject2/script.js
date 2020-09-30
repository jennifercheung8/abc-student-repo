let button = window.document.getElementById("btn");
let restart = window.document.getElementById("restart");

restart.style.display = "none";

let sw= screen.width;
let sh= screen.height;

let open=0;

let windowChoreography = [
   {
     pageToOpen: "line1.html",
     duration: 1500,
     width: 400,
     height: 170,
     x: sw*0.1,
     y: sh*0.1,
   },
   {
     pageToOpen: "green.html",
     duration: 2000,
     width: 300,
     height: 200,
     x: sw*0.4,
     y: sh*0.3,
   },
   {
     pageToOpen: "go.html",
     duration:5000,
     width: 300,
     height: 200,
     x: 0,
     y: sh*0.3,
   },
   {
     pageToOpen: "line1.html",
     duration: 2000,
     width: 400,
     height: 170,
     x: sw*0.6,
     y: sh*0.1,
   },
   {
     pageToOpen: "red.html",
     duration: 2000,
     width: 300,
     height: 200,
     x: sw*0.1,
     y: sh*0.6,
   },
   {
     pageToOpen: "stop.html",
     duration:5000,
     width: 300,
     height: 200,
     x: sw*0.4,
     y: sh*0.3,
   },
   {
     pageToOpen: "line3.html",
     duration: 2500,
     width: 500,
     height: 170,
     x: sw*0.3,
     y: sh*0.2,
   },
   {
     pageToOpen: "line4.html",
     duration: 2500,
     width: 500,
     height: 170,
     x: sw*0.3,
     y: sh*0.6,
   },
   {
     pageToOpen: "blue.html",
     duration: 7000,
     width: sw,
     height: sh,
     x: 0,
     y: 0,
   },
]

let index = 0;
function openNextWindow(){

  button.style.display = "none";
  restart.style.display = "block";

   let url = windowChoreography[index].pageToOpen;
   let duration = windowChoreography[index].duration;
   let width = windowChoreography[index].width;
   let height = windowChoreography[index].height;
   let x = windowChoreography[index].x;
   let y = windowChoreography[index].y;
   index++;

   let newWindow = window.open(url, "", "width="+width+", height="+height+", left="+x+", top="+y+"");

   setTimeout(function(){
       newWindow.close();
       if(index<windowChoreography.length){
         openNextWindow();
       }
     }, duration)


if(index==3){
  let interval = setInterval(()=>{
      x+=50;

      if(x > sw-300){
        clearInterval(interval);
        newWindow.close();
      }else{
        newWindow.moveTo(x, sh*0.3);
      }
    }, 100)
  }

if(index==6){
  for(let i =0; i<5; i++){
    let stp = window.open("stop.html", "", "width=300, height=200, left="+sw*0.4+", top="+sh*0.3+"");
    console.log(index);
  stp.addEventListener("load", ()=>{
    setTimeout(function(){
      stp.close();
    }, 1000);
  })
  }
}

if (index==9){

  for(let i =0; i<5; i++){
    let randomTime = 1000+ Math.random() * 4000;
  setTimeout(function(){
    let randomXo = Math.random()*(sw-200);
    let randomYo = Math.random()*(sh-200);
    let randomXl = Math.random()*(sw-200);
    let randomYl = Math.random()*(sh-200);
    let orange = window.open("orange.html", "", "width=200, height=200, left="+randomXo+", top="+randomYo+"");
    let lavender = window.open("lavender.html", "", "width=200, height=200, left="+randomXl+", top="+randomYl+"");

    setTimeout(function(){
      orange.close();
      lavender.close();
    }, randomTime);
    }, 1500);
  }

  }
}

function refresh(){
  location.reload();
}

button.addEventListener("click", openNextWindow);
restart.addEventListener("click", refresh);
