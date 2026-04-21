const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A student connected');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast to all
  });
});

server.listen(3000, () => {
  console.log('CSMS Board running on http://localhost:3000');
});
