var can = document.querySelector('canvas');
  can.style.position = 'absolute';
  can.style.top = "150px";
  can.style.left = "0px";

function resizeCanvas() {
  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

function draw() {
  var canvas = document.getElementById('canvas');
  var x = document.getElementById("myNumber").value;
  document.getElementById('canvas').innerHTML = x;

console.log(x);
  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    context.fillStyle = "white";
    document.getElementById('canvas').style.flexWrap = "wrap";
    for(i=0;i<x;i++){
    context.fillRect(50*i,0,30,30);
}

    }
  }