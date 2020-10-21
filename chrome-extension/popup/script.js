let button = document.getElementById("button");

button.addEventListener("click", ()=>{
  console.log("bye");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {msg: "popup"});
  });

})
