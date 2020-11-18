console.log("try again");

let button = document.getElementById("button");
let dessertInput = document.getElementById("secret");
let count = 0;

button.addEventListener("click", ()=>{
  count++;
  let dessert = dessertInput.value;
  console.log(dessert);
  window.location.href = "/guess?word=" + dessert +"&t=3";
  if (count ==1){
    let h = document.createElement("P");
    let yes = document.createElement("BUTTON");
    h.innerHTML="Need a hint?";
    yes.innerHTML="Yes";
    document.body.appendChild(h);
    document.body.appendChild(yes);
    yes.addEventListener("click", ()=>{
      yes.style.display="none";
      let hint = document.createElement("IMG");
      hint.setAttribute("src", "nz.jpg");
      hint.setAttribute("width", "300");
      document.body.appendChild(hint);
    })
  }
  dessertInput.value="";
})
