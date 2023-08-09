const express = require('express')
const port = 8000
const app = express()
const http = require('http').createServer(app)


app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})

http.listen(port, (err) => {
    if (err) {
        console.log(`${err}`)
    }
    console.log(`server is connected to port ${port}`)
})
//import the socket.io with the server

const io = require('socket.io')(http)
