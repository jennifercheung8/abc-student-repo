const express = require('express')
const app = express()
const port = 3000
const appetizer = "egg";
const entree = "catfish";
const dessert = "kiwi";

app.use(express.static('public'))

app.get('/guess', (request, response) => {
  let query = request.query;
  console.log(query);
  let guess = query.word;
  let question = query.q;
  let tryagain = query.t;
  // console.log(question);
  if (question == 1 && guess == appetizer){
    console.log("lets eat");
    response.redirect("/entree");
  } else if (question == 1){
    console.log("try again");
    response.redirect("/tryagain-appetizer");
  } else if (tryagain == 1 && guess == appetizer){
    response.redirect("/entree");
  } else if (tryagain == 1){
    console.log("another try");
    response.status(204).send();
  } else if (question == 2 && guess == entree){
    response.redirect("/dessert");
  } else if (question == 2){
    console.log("try again2");
    response.redirect("/tryagain-entree");
  } else if (tryagain == 2 && guess == entree){
    response.redirect("/dessert");
  } else if (tryagain == 2){
    console.log("another try");
    response.status(204).send();
  } else if (question == 3 && guess == dessert){
    response.redirect("/meal");
  } else if (question == 3){
    console.log("try again3");
    response.redirect("/tryagain-dessert");
  } else if (tryagain == 3 && guess == dessert){
    response.redirect("/meal");
  } else if (tryagain == 3){
    console.log("another try");
    response.status(204).send();
  }
  console.log("someone reqed /guess route");

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
