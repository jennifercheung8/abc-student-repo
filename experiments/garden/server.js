const express = require('express')
const app = express()
const port = 3000  //glitch: const port = process.env.PORT
const secret = "paperclip";

let gifts = [];

app.use(express.static('public'))

app.get('/secret', (request, response) => {
  let query = request.query;
  let guess = query.word;
  if (guess == secret){
    console.log("let them into the garden");
    // response.sendFile(__dirname + '/public/garden/index.html')
    response.redirect("/garden");
  } else {
    console.log("something is fishy");
    response.redirect("/fishy");
  }

  console.log("someone reqed /secret route");

  //res.sendFile(__dirname + '/index.html')
})

app.get('/gift', (request, response)=>{
  let query = request.query;
  let gift = query.gift;
  gifts.push(gift);
  console.log("received "+ gift);
  console.log("all the things I have: " + gifts);
})

app.get('/getGifts', (request, response)=>{
  response.json({content: gifts, sender: "garden gods"});
  console.log("someone asked for gifts");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
