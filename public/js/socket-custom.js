var socket = io();

// Cuando se conecta al servidor
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
// Cuando se desconecta del servidor
socket.on('disconnect', function(){
    console.log('No hay conexion con el servidor');
});
let data = {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
};
// Emitir - para enviar informacion        
socket.emit('enviarMensaje', data, function(response) { 
    console.log('response: ', response );
});
// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});