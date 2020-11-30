let socket = io();
let allTimes = [];

let clientTime = new Date();
console.log("client time: " + clientTime.getHours());
let clientHour = clientTime.getHours();
socket.emit('clientHour', clientHour);

socket.on("userNum", (userCount)=>{
  console.log(userCount + " users");
  window.users=userCount;
})


socket.on("allTimes", (clientHour)=>{
  console.log("incoming times: " + clientHour);
  allTimes.push(clientHour);
})

console.log(allTimes);
