let start = document.getElementById("start");

start.addEventListener("click", ()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    let message = {
      command: start
    }

    chrome.tabs.sendMessage(tabs[0].id, message);
  });
})
