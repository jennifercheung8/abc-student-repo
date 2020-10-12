let ps=document.getElementById("ps");
let home=document.getElementById("home");
let call = document.querySelector(".callme");
let count = 0;

ps.addEventListener("click", ()=>{
  if (count==0){
  call.style.display="block";
  count=1;
  }
  else if (count==1){
    for (i=0; i<10; i++){
      var newCall = document.createElement("P");
      newCall.innerText="Mom says hi";
      let randomXPosition = Math.round(Math.random()*1100);
      let randomYPosition = Math.round(Math.random()*300)+400;
      let randomSize = Math.round(Math.random()*30)+10;
      newCall.style.position="absolute";
      newCall.style.fontFamily="Helvetica";
      newCall.style.left= randomXPosition + "px";
      newCall.style.top= randomYPosition + "px";
      newCall.style.fontSize=randomSize + "px";
      newCall.style.margin="20px";
      document.body.appendChild(newCall);
    }
    count=2;
  }
  else if (count==2){
    for (i=0; i<10; i++){
      var newCall2 = document.createElement("P");
      newCall2.innerText="Have you fed the dog today?";
      let randomXPosition = Math.round(Math.random()*1100);
      let randomYPosition = Math.round(Math.random()*300)+400;
      let randomSize = Math.round(Math.random()*30)+10;
      newCall2.style.position="absolute";
      newCall2.style.fontFamily="Helvetica";
      newCall2.style.left= randomXPosition + "px";
      newCall2.style.top= randomYPosition + "px";
      newCall2.style.fontSize=randomSize + "px";
      newCall2.style.margin="20px";
      document.body.appendChild(newCall2);
    }
    count=3;
  }
  else if (count==3){
    for (i=0; i<10; i++){
      var newCall3 = document.createElement("P");
      newCall3.innerText="Make sure you're eating enough";
      let randomXPosition = Math.round(Math.random()*1100);
      let randomYPosition = Math.round(Math.random()*300)+400;
      let randomSize = Math.round(Math.random()*30)+10;
      newCall3.style.position="absolute";
      newCall3.style.fontFamily="Helvetica";
      newCall3.style.left= randomXPosition + "px";
      newCall3.style.top= randomYPosition + "px";
      newCall3.style.fontSize=randomSize + "px";
      newCall3.style.margin="20px";
      document.body.appendChild(newCall3);
    }
    count=4;
  }
  else if (count==4){
    for (i=0; i<5; i++){
      var newCall4 = document.createElement("P");
      newCall4.innerText="I love you!";
      let randomXPosition = Math.round(Math.random()*1100);
      let randomYPosition = Math.round(Math.random()*300)+400;
      let randomSize = Math.round(Math.random()*100)+70;
      newCall4.style.position="absolute";
      newCall4.style.fontFamily="Helvetica";
      newCall4.style.left= randomXPosition + "px";
      newCall4.style.top= randomYPosition + "px";
      newCall4.style.fontSize=randomSize + "px";
      newCall4.style.color="#e32b2b";
      newCall4.style.fontWeight="bold";
      newCall4.style.margin="20px";
      document.body.appendChild(newCall4);
    }
    count=5;
  }
  else if (count==5){
    ps.style.display="none";
    home.style.display="block";
  }

})
