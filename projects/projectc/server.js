let express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  let userCount = socket.client.conn.server.clientsCount;
  console.log( "user connected, " + userCount + " users connected" );
  io.emit("newConnect", userCount);
  socket.on("clientHour", (clientHour)=>{
    console.log("client hour: " + clientHour);
    io.emit('allTimes', clientHour);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected, ' + userCount + " users connected");
    io.emit("newConnect", userCount);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
