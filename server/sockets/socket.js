const { io } = require('../server')

// Detecta cuando se conecta un cliente
io.on('connection', (client) => {

  console.log('Usuario conectado');

  client.emit('enviarMensaje', {
    usuario: 'Admin', mensaje: 'Bienvenido a esta app'
  });

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Escuchar cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);

    // if (mensaje.usuario) {
    //   callback({ res: 'TODO SALIO BIEN!' });
    // } else {
    //   callback({ res: 'TODO SALIO MAL!!!!!!' });
    // }

  });

});

