const express = require('express') //get express code from node_modules where it was installed
const app = express()
const port = 3000

//define routers behavior, what to return on which request

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Bye World!')
})

let jencount = 0;

app.get('/jen', (req, res) => {
  jencount++;
  console.log(jencount + "ppl requested jen");
  res.sendFile(__dirname + '/jennifer/index.html');
})

//start server listening on specific port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
