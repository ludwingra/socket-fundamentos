var socket = io();

socket.on('connect', function () {
  console.log('Conectado en el servidor');
});

// Escuchar
socket.on('disconnect', function () {
  console.log('Perdimos conexión con servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
  usuario: 'Ludwing',
  mensaje: 'Hola mundo'
}, function (res) {
  console.log('respuesta server', res);
});

socket.on('enviarMensaje', function (mensaje) {
  console.log(mensaje);
})