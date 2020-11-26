console.log("hello");

let socket = io();
let holder = document.getElementById("holder");
let color = document.getElementById("colorPicker");
let button = document.getElementById("enter");

button.addEventListener("click", ()=>{
  console.log(color.value);
  let colorVal = color.value;
  socket.emit('color', colorVal);
})

socket.on("userAdd", (userCount)=>{
  console.log(userCount + "users");
  window.users=userCount;
})

socket.on("incoming", (colorVal)=>{
  console.log(users + "incoming");
  let userMult = users*2;
  for (i=0; i<userMult; i++){
    let bubble = document.createElement("div");
    let randomSize = Math.round(Math.random()*50)+10;
    bubble.style.position="absolute";
    bubble.style.backgroundColor=colorVal;
    bubble.style.borderRadius="50px";
    bubble.style.width=randomSize+"px";
    bubble.style.height=randomSize+"px";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.top = Math.random()* window.innerHeight + "px";
    holder.appendChild(bubble);

    let randomTime = 10000+ Math.random() * 20000;
    bubble.style.transition = "1s"

    bubble.classList.add("bubbleMove");


    requestAnimationFrame(() =>
      setTimeout(() => {
        bubble.classList.add("bubbleShrink");
      }, randomTime)
    );
  }
})
