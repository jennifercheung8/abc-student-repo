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
      for(j=0; j<x; j++) {
    context.fillRect(100*i,50*j,30,30);
    context.fillRect(50*j, 100*i, 30, 30);
    context.fillRect(50*i, 100*j, 30, 30);
    context.fillRect(100*j, 100*i, 30, 30);
  }

}

    }
  }
