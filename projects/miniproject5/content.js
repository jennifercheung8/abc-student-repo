console.log("content");

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

  if(request.type == "zoomIn"){
    console.log(request.count);
    let original= 100;
    let zoom = 10*request.count;
    document.body.style.zoom = original+zoom +"%";
    let valueToZoom = original+zoom;
    console.log("will zoom by", valueToZoom);
  }

  if(request.type == "zoomOut"){
    console.log(request.count);
    let original= 100;
    let zoom = 10*request.count;
    document.body.style.zoom = original-zoom +"%";
    let valueToZoom = original-zoom;
    console.log("will zoom out by", valueToZoom);
  }
});
