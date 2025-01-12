var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const http = require('http');
const server = http.createServer(app);
const PORT = process.env.port || 3000;

const { Socket } = require('socket.io');
const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

//print numbers and sum to console
io.on('connection', (socket) => {
    socket.on('Calculation', (firstNum, secondNum, sum) => {
        console.log("New calculation: " + firstNum + " + " + secondNum + " = " + sum);
    });
});

server.listen(PORT, ()=>{
    console.log('Point browser at http://localhost:3000/');
});
