console.log("hello");

let button = document.getElementById("button");
let secretInput = document.getElementById("secret");

button.addEventListener("click", ()=>{
  console.log("click");
  let secret = secretInput.value;
  console.log(secret);
  window.location.href = "/secret?word=" + secret;
})
