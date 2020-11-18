console.log("hello");

let button = document.getElementById("button");
let appInput = document.getElementById("secret");

button.addEventListener("click", ()=>{
  console.log("click");
  let appetizer = appInput.value;
  console.log(appetizer);
  window.location.href = "/guess?word=" + appetizer +"&q=1";
})
