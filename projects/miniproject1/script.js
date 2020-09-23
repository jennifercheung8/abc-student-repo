document.getElementById("clr").addEventListener("mouseover", mouseOver);

function mouseOver() {
  var col = document.getElementById('clr').value
    var num = Math.floor(Math.random() * 50)+10;
    for(var i=0;i<num;i++){
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "color");
    // x.setAttribute("value", "#"+randomColor);
    x.setAttribute("value", col);
    let randomXPosition = Math.round(Math.random()*100);
    let randomYPosition = Math.round(Math.random()*500);
    let randomSize = Math.round(Math.random()*50)+10;
    x.style.position="relative";
    x.style.left= randomXPosition + "px";
    x.style.top= randomYPosition + "px";
    x.style.width=randomSize + "px";
    x.style.height=randomSize + "px";
    x.style.margin="20px";
    document.getElementById("gallery").appendChild(x);
  }
}
