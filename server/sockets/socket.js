const {io} = require('../server')

// Cuando un usuario se conecta al servidor
io.on('connection', (client)=> {
    console.log('Usuario conectado: ');

    // Cuando un usuario de desconecta del servidor
    client.on('disconnect', ()=> {
        console.log('Usuario desconectado');
    });

    // Escuhar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log('mensaje', data);

        // responder mensaje al usuario 
        // client.emit('enviarMensaje', data);

        // enviar mensaje a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario) {
        //     callback({resp: 'Todo bien'});
        // } else {
        //     callback({error: 'Todo mal'});
        // }
    }); 
});