console.log("hello");

let tabAdd = 20;
// let countIn=0;
let countOut=0;

chrome.tabs.onCreated.addListener(function (tab){
  console.log(tab);
  // window to shrink (window inwhich a enw tab was just openend);
  let windowID = tab.windowId;
  console.log("window ID", windowID)
  // countIn+=1;

  // ask for all the tabs in the current window
  chrome.tabs.query({currentWindow: true}, function(tabs) {

    // loop over all tabs in the current window

    for(let i = 0; i < tabs.length; i++){

      // only send message to tabs that have actual websites open
      if(tabs[i].url != "chrome://" && tabs[i].url != ""){

        setTimeout(()=>{
          chrome.tabs.sendMessage(tabs[i].id, {type: "zoomIn", count: tabs.length}, function(response){
            // console.log(count);
          });
          }, 1000)

        // send a message to each tab tabs[i].id

      }

    }

  });


  // URL of newly opened tab
  // let url = tab.pendingUrl;
  //
  //
  // // //chrome:// pages dont have a content script so they cant receive our message
  // if( url.startsWith("chrome://") == false ){
  //
  //   // then we want to do things like send message etc to this tab
  //
  //   console.log("new tab", tab);
  //   let id = tab.id;
  //
  //
  //   setTimeout(()=>{
  //     chrome.tabs.sendMessage(id, {greeting: "hello"}, function(response) {
  //       console.log(response);
  //     });
  //   }, 1000)
  //
  //
  // }



  chrome.windows.getAll({populate: true}, function (winArr){
    for (var win of winArr){
      var tabCount = win.tabs.length;
      var winSize = tabCount * tabAdd;

      console.log(winSize);

      var params = {
        width: win.width-winSize,
        height: win.height-winSize
      }

      chrome.windows.update(win.id, params);

    }
  });
});

chrome.tabs.onRemoved.addListener(function (tab){

  countOut+=1;
  chrome.tabs.query({currentWindow: true}, function(tabs) {

    for(let i = 0; i < tabs.length; i++){
      console.log(countOut);
      if(tabs[i].url != "chrome://" && tabs[i].url != ""){

        setTimeout(()=>{
          chrome.tabs.sendMessage(tabs[i].id, {type: "zoomOut", count: countOut}, function(response){
          });
          }, 1000)
      }
    }
  });

  chrome.windows.getAll({populate: true}, function (winArr){
    for (var win of winArr){
      var tabCount = win.tabs.length;
      var winSize = tabCount * tabAdd;

      var params = {
        width: win.width+winSize,
        height: win.height+winSize
      }
      chrome.windows.update(win.id, params);
    }
  });
});
