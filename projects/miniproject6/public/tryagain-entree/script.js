console.log("try again");

let button = document.getElementById("button");
let entreeInput = document.getElementById("secret");
let count = 0;

button.addEventListener("click", ()=>{
  count++;
  let entree = entreeInput.value;
  console.log(entree);
  window.location.href = "/guess?word=" + entree +"&t=2";
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
      hint.setAttribute("src", "nev.jpg");
      hint.setAttribute("width", "300");
      document.body.appendChild(hint);
    })
  }
  entreeInput.value="";
})
