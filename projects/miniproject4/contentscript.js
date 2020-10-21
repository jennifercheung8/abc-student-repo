console.log("hello");

let ptags = document.getElementsByTagName("P");
let allSpans = [];


for(let i = 0; i < ptags.length; i++){
   let singlePtag = ptags[i];
   let text = singlePtag.textContent;
   let letters = text.split("");
   let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
   singlePtag.innerHTML = letterSpans.join("");
   let spanTags = singlePtag.getElementsByTagName("span");

   for(let j = 0; j < spanTags.length; j++){
   let singleSPANtag = spanTags[j];
   allSpans.push(singleSPANtag);
  }
}

function resize(){
  for(let i = 0;i < allSpans.length;i++){
    console.log(allSpans);

    let randomMultiplier = Math.round(Math.random()*50)+5;
    allSpans[i].style.fontSize = randomMultiplier+"px";


    allSpans[i].addEventListener("mouseover", ()=>{
      let randomSize = Math.round(Math.random()*5);
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      allSpans[i].style.fontSize = randomMultiplier*randomSize+"px";
      allSpans[i].style.color = "#"+randomColor;
      console.log(randomSize);
    })
  }
}

function gotMessage(request, sender, sendResponse){
  console.log(request);
  resize();
}

chrome.runtime.onMessage.addListener(gotMessage);
