import express from 'express';
import rutaUsuarios from './rutaUsuarios';

const appServer = express(); //Creates a server
appServer.use('/usuarios', rutaUsuarios);

//Ruta a recibir//Funcion
appServer.get('/', (solicitud, respuesta) => {
  //Recibe la ruta raiz de la peticion//la funicnpmion
  //respuesta.end(`<h1>EXPRESS WORKS!<h1>`); //Enviar respuesta
  respuesta.json({
    saludo: 'Hola',
  });
});
// appServer.get('/xyz', (solicitud, respuesta) => {
//   respuesta.redirect(301, 'https://google.com');
// });
export default appServer;
