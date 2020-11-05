//AQI
console.log("Hello!");

function gotMessage(req, sender, res){
    console.log("Listening");
}
chrome.runtime.onMessage.addListener(gotMessage);

//DESTROYER
// let counter=document.createElement("h1");
// counter.setAttribute("id", "bignumber");
// document.body.appendChild(counter);

let destroySpeed;
let destroying;

function destroyElements(){
  let destroyTime = 10000/destroySpeed
  console.log(destroyTime);
  destroying = setTimeout(()=>{
    let all = document.getElementsByTagName("*");
    let elementCount = all.length;
    let toBeDestroyed = Math.floor(Math.random() * elementCount) + 1;
    document.getElementsByTagName("*")[toBeDestroyed].style.animation="disappear 2s ease-in forwards";
    console.log("tried to destroy something");
    destroyElements();
  }, destroyTime)
}
destroyElements();

//stop destroying elements when tab is not active
document.addEventListener('visibilitychange', ()=>{
  if (document.hidden) {
    clearTimeout(destroying)
  }
  else{
    destroyElements();
  }
})

//whenever the contentscript is loaded (ie the webpage is initialized), the user closes another tab, or the user returns to an existing tab, the counter will update with the most recent value
function updateLocalTabCount(message){
  console.log(message.value);
  destroySpeed=message.value;
  // counter.innerHTML=message.value;
}

//on contentscript load request number of tabs + receive number of tabs whenever the background sends it
chrome.runtime.sendMessage({subject:"howManyTabs"}, updateLocalTabCount)
chrome.runtime.onMessage.addListener(updateLocalTabCount);
