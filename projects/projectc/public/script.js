let socket = io();
let allTimes = [];

let clientTime = new Date();
let clientHour = clientTime.getHours();
console.log("client time: " + clientHour);
socket.emit('clientHour', clientHour);

if (clientHour > 22 || clientHour < 5){
  document.body.style.background="linear-gradient(132deg, #182247 , #1f0a38)";
  document.body.classList.add("backgroundAnimation");
} else if (clientHour == 5){
  document.body.style.background="linear-gradient(132deg, #363c6b, #3b346b)";
} else if (clientHour == 6){
  document.body.style.background="linear-gradient(132deg, #d96f4c, #5f7bb3)";
} else if (clientHour > 6 || clientHour < 9){
  document.body.style.background="linear-gradient(132deg, #9ecce6, #82bee6)";
} else if (clientHour > 8 || clientHour < 12){
  document.body.style.background="linear-gradient(132deg, #68bae8, #62ade1)";
} else if (clientHour > 11 || clientHour < 16){
  document.body.style.background="linear-gradient(132deg, #289ddf, #2b8fe1)";
} else if (clientHour == 16){
  document.body.style.background="linear-gradient(132deg, #679eb7, #6094d2)";
} else if (clientHour == 17){
  document.body.style.background="linear-gradient(132deg, #f08b39, #6281e3)";
} else if (clientHour > 17 || clientHour < 20){
  document.body.style.background="linear-gradient(132deg, #2e5d9d, #133f72)";
} else if (clientHour > 19 || clientHour < 23){
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
