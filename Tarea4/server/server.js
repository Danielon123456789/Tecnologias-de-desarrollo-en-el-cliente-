const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');


const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


const users = new Set();

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  socket.on('user_connected', (username) => {
    users.add(username);
    socket.username = username;

    
    socket.broadcast.emit('user_connected', username);

   
    socket.emit('user_list', Array.from(users));
  });

  socket.on('message', (data) => {
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      users.delete(socket.username);
      io.emit('user_disconnected', socket.username);
      console.log(`Usuario desconectado: ${socket.username}`);
    }
  });
});


server.listen(3000, () =>
  console.log('Servidor Socket.IO en http://localhost:3000')
);
