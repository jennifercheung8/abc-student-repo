let socket = io();
let allTimes = [];

let clientTime = new Date();
let clientHour = clientTime.getHours();
console.log("client time: " + clientHour);
socket.emit('clientHour', clientHour);

if (clientTime > 22 || clientTime < 5){
  document.body.style.background="linear-gradient(132deg, #182247 , #1f0a38)";
  document.body.classList.add("backgroundAnimation");
} else if (clientTime == 5){
  document.body.style.background="linear-gradient(132deg, #363c6b, #3b346b)";
} else if (clientTime == 6){
  document.body.style.background="linear-gradient(132deg, #d96f4c, #5f7bb3)";
} else if (clientTime > 6 || clientTime < 9){
  document.body.style.background="linear-gradient(132deg, #9ecce6, #82bee6)";
} else if (clientTime > 8 || clientTime < 12){
  document.body.style.background="linear-gradient(132deg, #68bae8, #62ade1)";
} else if (clientTime > 11 || clientTime < 16){
  document.body.style.background="linear-gradient(132deg, #289ddf, #2b8fe1)";
} else if (clientTime == 16){
  document.body.style.background="linear-gradient(132deg, #679eb7, #6094d2)";
} else if (clientTime == 17){
  document.body.style.background="linear-gradient(132deg, #f08b39, #6281e3)";
} else if (clientTime > 17 || clientTime < 20){
  document.body.style.background="linear-gradient(132deg, #2e5d9d, #133f72)";
} else if (clientTime > 19 || clientTime < 23){
  document.body.style.background="linear-gradient(132deg, #223667, #111e50)";
}

socket.on("newConnect", (userCount)=>{
  console.log(userCount + " users");
  window.users=userCount;
  console.log(allTimes);
})


socket.on("allTimes", (clientHour)=>{
  console.log("incoming times: " + clientHour);
  window.clientHours=clientHour;
  allTimes.push(clientHour);
  const sum = allTimes.reduce((a, b) => a + b, 0);
  const avg = (sum / allTimes.length) || 0;
  console.log("sum: " + sum);
  console.log("avg: " + avg);
})
