console.log("hello");

function replace(word1, word2){
  let regEx = new RegExp(word1, "g");
  document.body.innerHTML = document.body.innerHTML.replace(regEx, word2);
}

replace("the", "PERIODT");

// function gotMessage(request, sender, sendResponse){
//   console.log(request);
// }

function gotMessage(message){
  console.log(message);
  replace(message.word1, message.word2);
}
chrome.runtime.onMessage.addListener(gotMessage);
