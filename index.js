'use strict';
const express = require('express');
const appServer = express(); //Creates a server
//Ruta a recibir//Funcion
appServer.get('/', (solicitud, respuesta) => {
  //Recibe la ruta raiz de la peticion//la funicion
  //respuesta.end(`<h1>EXPRESS WORKS!<h1>`); //Enviar respuesta
  respuesta.json({
    saludo: 'Hola',
  });
});
appServer.listen(3000); //Puerto
console.log('En el puerto 3000');

appServer.get('/xyz', (solicitud, respuesta) => {
  respuesta.redirect(301, 'https://google.com');
});
