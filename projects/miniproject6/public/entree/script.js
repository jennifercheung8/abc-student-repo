console.log("success");

let button = document.getElementById("button");
let entreeInput = document.getElementById("secret");

button.addEventListener("click", ()=>{
  console.log("click");
  let entree = entreeInput.value;
  console.log(entree);
  window.location.href = "/guess?word=" + entree + "&q=2";
})
