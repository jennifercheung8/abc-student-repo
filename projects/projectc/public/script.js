let socket = io();
let allTimes = [];
let canvas = document.getElementById("canvas");

let clientTime = new Date();
let clientHour = clientTime.getHours();
console.log("client time: " + clientHour);
socket.emit('clientHour', clientHour);

let localHourSpan = document.getElementById("localHourSpan");
let localMinuteSpan = document.getElementById("localMinuteSpan");
let m = (clientTime.getMinutes()<10?'0':'') + clientTime.getMinutes();

setInterval(displayLocalTime, 1000);
function displayLocalTime() {
localHourSpan.innerHTML= clientHour;
localMinuteSpan.innerHTML = m;
}

if (clientHour > 22 || clientHour < 5){
  document.body.style.background="linear-gradient(132deg, #182247, #1f0a38)";
  document.body.classList.add("backgroundAnimation");
  console.log("it's late night");
} else if (clientHour == 5){
  document.body.style.background="linear-gradient(132deg, #363c6b, #3b346b)";
  console.log("it's very early morning");
} else if (clientHour == 6){
  document.body.style.background="linear-gradient(132deg, #d96f4c, #5f7bb3)";
  console.log("it's sunrise");
} else if (clientHour > 6 && clientHour < 9){
  document.body.style.background="linear-gradient(132deg, #9ecce6, #82bee6)";
  console.log("it's early morning");
} else if (clientHour > 8 && clientHour < 12){
  document.body.style.background="linear-gradient(132deg, #68bae8, #62ade1)";
  console.log("it's mid morning");
} else if (clientHour > 11 && clientHour < 16){
  document.body.style.background="linear-gradient(132deg, #289ddf, #2b8fe1)";
  console.log("it's mid day");
} else if (clientHour == 16){
  document.body.style.background="linear-gradient(132deg, #4fa3c9, #6094d2)";
  console.log("it's late afternoon");
} else if (clientHour == 17){
  document.body.style.background="linear-gradient(132deg, #f08b39, #6281e3)";
  document.body.classList.add("backgroundAnimation");
  console.log("it's sunset");
} else if (clientHour > 17 && clientHour < 20){
  document.body.style.background="linear-gradient(132deg, #22115c, #1f2b5e)";
  console.log("it's evening");
} else if (clientHour > 19 && clientHour < 23){
  document.body.style.background="linear-gradient(132deg, #223667, #111e50)";
  console.log("it's night");
}

socket.on("newConnect", (userCount)=>{
  console.log(userCount + " users");
  window.users=userCount;
  console.log(allTimes);
  canvas.style.width=userCount*150 + 300 +"px";
  canvas.style.height=userCount*75 + 250 + "px";
  canvas.style.backgroundColor="green";
})


socket.on("allTimes", (clientHour)=>{
  console.log("incoming times: " + clientHour);
  window.clientHours=clientHour;
  allTimes.push(clientHour);
  const sum = allTimes.reduce((a, b) => a + b, 0);
  const avg = (sum / allTimes.length) || 0;
  console.log("sum: " + sum);
  console.log("avg: " + avg);
  let avgHour = Math.round(avg);

  let avgHourSpan = document.getElementById("avgHourSpan");
  let avgMinuteSpan = document.getElementById("avgMinuteSpan");

  setInterval(displayAvgTime, 1000);
  function displayAvgTime() {
  avgHourSpan.innerHTML= avgHour;
  avgMinuteSpan.innerHTML= m;
  }

  if (avgHour > 22 || avgHour < 5){
    canvas.style.background="linear-gradient(132deg, #1f2347 , #221b40)";
    console.log("avg is late night");
  } else if (avgHour == 5){
    canvas.style.background="linear-gradient(132deg, #424a85, #473e82)";
    console.log("avg is very early morning");
  } else if (avgHour == 6){
    canvas.style.background="linear-gradient(132deg, #e88361, #7293d4)";
    console.log("avg is sunrise");
  } else if (avgHour > 6 && avgHour < 9){
    canvas.style.background="linear-gradient(132deg, #9ebce6, #8abceb)";
    console.log("avg is early morning");
  } else if (avgHour > 8 && avgHour < 12){
    canvas.style.background="linear-gradient(132deg, #71b0f0, #78bff0)";
    console.log("avg is mid morning");
  } else if (avgHour > 11 && avgHour < 16){
    canvas.style.background="linear-gradient(132deg, #40a8ed, #3e9eed)";
    console.log("avg is mid day");
  } else if (avgHour == 16){
    canvas.style.background="linear-gradient(132deg, #60b9e0, #6fa3e3)";
    console.log("avg is late afternoon");
  } else if (avgHour == 17){
    canvas.style.background="linear-gradient(132deg, #ff834a, #7486ed)";
    canvas.classList.add("backgroundAnimation");
    console.log("avg is sunset");
  } else if (avgHour > 17 && avgHour < 20){
    canvas.style.background="linear-gradient(132deg, #352275, #243478)";
    canvas.classList.add("backgroundAnimation");
    console.log("avg is evening");
  } else if (avgHour > 19 && avgHour < 23){
    canvas.style.background="linear-gradient(132deg, #2d447d, #192b6e)";
    console.log("avg is night");
  }
})

let drawcanvas = document.getElementById("draw");
let backColor = document.getElementById("backcolor").value;

function setup() {
  let cnv = createCanvas(350,200);
  cnv.parent('draw');
  background(backColor);
  console.log(backColor);
  noStroke();
  let clear = createButton("Clear");
  clear.parent("clear");
  clear.mousePressed(clearCanvas);
}

function clearCanvas(){
  clear();
  background(backColor);
}

function draw() {
  let slider = document.getElementById("slider").value;
  let brushColor = document.getElementById("colorPicker").value;
  if (mouseIsPressed) {
      fill(brushColor);
    } else {
      noFill();
    }
    ellipse(mouseX, mouseY, slider, slider);
}
