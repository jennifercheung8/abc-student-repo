console.log("garden");

let lookButton = document.getElementById("look");
let giftInput = document.getElementById("gift");
let sendGift = document.getElementById("sendGift");
let garden = document.getElementById("garden");

sendGift.addEventListener("click", ()=>{
  console.log("send gift");
  let gift = giftInput.value;
  fetch("/gift?gift="+gift)
  giftInput.value="";
})

function receivedAllGifts(data){
  console.log("decoded: ", data);
}

// function decode(data){
//   return data.json();
// }

function placeGift(gift){
  let p = document.createElement("p");
  p.innerHTML = gift;
  p.style.position="absolute";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = Math.random()* window.innerHeight + "px";
  garden.appendChild(p);
}

function placeGifts(gifts){
  garden.innerHTML="";
  // for(let i=0; i<gifts.length; i++){
  //   placeGift(gifts[i]);
  // }
  gifts.forEach(placeGift);
}

lookButton.addEventListener("click", ()=> {
  fetch("/getGifts")
  .then(data => data.json())
  .then(data => {
    console.log("decoded: ", data);
    let gifts = data.content;
    placeGifts(gifts);

  });
  console.log("getting gifts");
})
