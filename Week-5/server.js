const express = require('express');
const app = express();

// serve static files
app.use(express.static(__dirname + '/public'));
// built-in middleware for json
app.use(express.json());
// built-in middleware to handle url-encoded for data
app.use(express.urlencoded({extended: false}));
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.port || 3050;

// routeing, routes
let router = require('./routers/routers');
app.use('/api/pizza', router);

//start server
server.listen(PORT, ()=>{
    console.log('Point browser at http://localhost:3050/');
});