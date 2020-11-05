// //gets original window size
// function initWin(win){
//   originalWins[win.id] = win;
//   // console.log(win);
// }
// let originalWins = {};
// chrome.windows.getAll({}, function (winArr){
//   for (let win of winArr){
//     initWin(win);
//     // console.log(win);
//   }
// });
// chrome.windows.onCreated.addListener(function (win){
//   initWin(win);
// });
//
// //shrinks window approx 13% per minute
// chrome.windows.getAll({}, function (winArr){
//     for (let win of winArr){
//       let original = originalWins[win.id];
//         let newWidth= Math.round(original.width*0.99955);
//         let newHeight = Math.round(original.height*0.999);
//         // console.log(original.width+"original");
//         // console.log(original.height+"original");
//
//         setInterval(()=>{
//           let params = {
//             width: newWidth,
//             height: newHeight
//           };
//
//           chrome.windows.update(win.id, params);
//
//           original.width = newWidth-1;
//           original.height = newHeight-1;
//           newWidth= Math.round(original.width*0.99955);
//           newHeight = Math.round(original.height*0.999);
//           // console.log(newWidth);
//           // console.log(newHeight);
//         }, 1000);
//
//     }
//   });

  //this function is called only ONCE for each window
  function startShrinkingInterval(originalWin){
    console.log(originalWin);
    // regularly tells each window to shrink
    setInterval(()=>{
      // MOST IMPORTANT LINE:
      // get CURRENT version of the window
      chrome.windows.get(originalWin.id, function (win){
          // either shrink by factor, or if that takes away less than 1, just take away 1.
          let newWidth= Math.min(  Math.round(win.width*0.99955)    ,   win.width-1     );
          // Math.min(3,6)
          // returns 3
          // Math.min(3, 1)
          // return 1
          console.log("win.width", win.width, "newWidth", newWidth)
          let newHeight = Math.min(    Math.round(win.height*0.999)   ,    win.height-1      ) ;
          var params = {
            width: newWidth,
            height: newHeight
          };
          console.log("shrinking", params)
          chrome.windows.update(win.id, params);
      });
    }, 1000);
  }
  // two cases of window we deal with:
  // new ones
  chrome.windows.onCreated.addListener(function (win){
    startShrinkingInterval(win);
  });
  // or window s taht exsit already
  chrome.windows.getAll({}, function (winArr){
    for (var win of winArr){
      startShrinkingInterval(win);
    }
  });
  // VAR vs LET learning:
  for(let i = 0; i < 3; i++){
    var original = i;
    console.log("original is ", original)
    setInterval(()=>{
        console.log("INTERVAL[loop", i, "] original:", original);
    }, 1000);
  }
  console.log("whats original now?", original)
