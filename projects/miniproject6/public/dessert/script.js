console.log("dessert");

let button = document.getElementById("button");
let dessertInput = document.getElementById("secret");

button.addEventListener("click", ()=>{
  console.log("click");
  let dessert = dessertInput.value;
  console.log(dessert);
  window.location.href = "/guess?word=" + dessert + "&q=3";
})
