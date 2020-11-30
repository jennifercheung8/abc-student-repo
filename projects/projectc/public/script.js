let socket = io();

socket.on("userNum", (userCount)=>{
  console.log(userCount + " users");
  window.users=userCount;
})


socket.on("allTimes", (hour)=>{
  console.log(hour);
})

let clientTime = new Date();
console.log(clientTime.getHours());
