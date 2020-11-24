let express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//general event listener for any socket connection
io.on('connection', (socket) => {

  //per connection, each connection establishes event listener
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on("message", (data)=>{
    console.log(data);
    io.emit("incoming", data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
