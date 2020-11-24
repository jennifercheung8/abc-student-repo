console.log("hello");

let socket = io();

let namebox=document.getElementById("name");
let chatbox=document.getElementById("chat");
let messagebox=document.getElementById("message");
let sendButton=document.getElementById("send");

sendButton.addEventListener("click", ()=>{
  console.log("click");
  let name = namebox.value.trim();
  if (name==""){
    name="anonymous";
    namebox.value="";
  }
  console.log("name is ", name);

  let message = messagebox.value.trim();
  console.log(message);
  if(message !=""){
    let data = {name: name, message: message}
    socket.emit('message', data);
    console.log(data);
  }
  messagebox.value="";
})

socket.on("incoming", (data)=>{
  console.log(data);
  let name = data.name;
  let message = data.message;
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = "<span class='sender'>"+name+":</span> "+message;
  li.appendChild(p);
  chatbox.appendChild(li);
  chatbox.scrollTop=chatbox.scrollHeight;
})

// Execute a function when the user releases a key on the keyboard
messagebox.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    sendButton.click();
  }
});
