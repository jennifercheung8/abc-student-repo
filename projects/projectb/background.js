//DESTROYER
let numberOfTabs=0;

chrome.tabs.onCreated.addListener(()=>{
  numberOfTabs++;
});

//sends message to current tab with the latest numberOfTabs value whenever the user changes tabs or closes a tab
function sendUpdate(){
    console.log("message sent, numberOfTabs=", numberOfTabs);
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
      chrome.tabs.sendMessage(tabs[0].id, {subject:"numberOfTabs", value:numberOfTabs});
    });
};
chrome.tabs.onRemoved.addListener(()=>{
  numberOfTabs--;
  sendUpdate();
});
chrome.tabs.onActivated.addListener(sendUpdate);

//sends numberOfTabs value to current tab at the time the contentscript is loaded (ie the time the contentscript sends a message), because this may not be the same time as the tab is activated (ie the onActivated message was not received)
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
  console.log("message received:", message);
  if(message.subject=="howManyTabs"){
    sendResponse({subject:"numberOfTabs", value:numberOfTabs});
    console.log("message sent, numberOfTabs=", numberOfTabs);
  }
});

//find number of tabs when extension is enabled to prevent non-integers from being used
chrome.tabs.query({"lastFocusedWindow":true}, (result)=>{
  numberOfTabs=result.length;
  console.log("starting number of tabs:", result.length);
})


//WINDOW SHRINKING
function startShrinkingInterval(originalWin){
  console.log(originalWin);
  setInterval(()=>{
    // get CURRENT version of the window
    chrome.windows.get(originalWin.id, function (win){
        let newWidth= Math.min(Math.round(win.width*0.99955), win.width-1);
        console.log("win.width", win.width, "newWidth", newWidth)
        let newHeight = Math.min(Math.round(win.height*0.999), win.height-1);
        var params = {
          width: newWidth,
          height: newHeight
        };
        console.log("shrinking", params)
        chrome.windows.update(win.id, params);
    });
  }, 1000);
}

chrome.windows.onCreated.addListener(function (win){
  startShrinkingInterval(win);
});

chrome.windows.getAll({}, function (winArr){
  for (var win of winArr){
    startShrinkingInterval(win);
  }
});
