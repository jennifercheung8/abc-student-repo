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

//WINDOW SHRINKING
//gets original window size
function initWin(win){
  originalWins[win.id] = win;
  console.log(win);
}
var originalWins = {};
chrome.windows.getAll({}, function (winArr){
  for (var win of winArr){
    initWin(win);
  }
});
chrome.windows.onCreated.addListener(function (win){
  initWin(win);
});

//shrinks window approx 13% per minute
chrome.windows.getAll({populate: true}, function (winArr){
    for (var win of winArr){
      var original = originalWins[win.id];
      let newWidth= Math.round(original.width*0.99955);
      let newHeight = Math.round(original.height*0.999);
      console.log(original.width+"original");
      console.log(original.height+"original");

  setInterval(()=>{
        var params = {
          width: newWidth,
          height: newHeight
        };
        chrome.windows.update(win.id, params);
        original.width = newWidth-1;
        original.height = newHeight-1;
        newWidth= Math.round(original.width*0.99955);
        newHeight = Math.round(original.height*0.999);
        console.log(newWidth);
        console.log(newHeight);
      }, 250);
    }
  });
