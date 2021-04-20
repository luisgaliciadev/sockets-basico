const express = require('express');
const colors = require('colors/safe');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
// Crear servidor para socketIO
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar socketIO - Mantiene una conexion directa con el backend
module.exports.io = socketIO(server);

require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ colors.green(port) }`);

});