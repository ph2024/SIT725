var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public/'))
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

// integrating socket
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// socket message to console
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

app.listen(port,()=>{
console.log("App listening to: " + port + ": http://localhost:3000/" )
})