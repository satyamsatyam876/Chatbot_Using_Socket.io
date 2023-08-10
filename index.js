const express = require('express');
const port = 5000;

const app = express();

const http = require('http').createServer(app);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

http.listen(port, (err)=>{
    if(err) {
        console.log(`${err}`)
    }
    console.log(`Server is running on port : ${port}`)
})


// Import the socket.io with the server
const io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log('Server has established the connection with the client');

    // for recieving the message
    socket.on("message", (msg)=>{
        socket.broadcast.emit('message', msg)
    })
})
