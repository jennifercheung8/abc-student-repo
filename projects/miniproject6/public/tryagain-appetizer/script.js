console.log("try again");

let button = document.getElementById("button");
let appInput = document.getElementById("secret");
let count = 0;

button.addEventListener("click", ()=>{
  count++;
  let appetizer = appInput.value;
  console.log(appetizer);
  window.location.href = "/guess?word=" + appetizer +"&t=1";
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
      hint.setAttribute("src", "chicken.png");
      hint.setAttribute("width", "200");
      document.body.appendChild(hint);
    })
  }
  appInput.value="";
})
