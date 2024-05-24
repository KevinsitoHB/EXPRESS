import express from 'express';
// import rutaUsuarios from './rutaUsuarios';

const app = express(); //Creates a server
// app.use('/usuarios', rutaUsuarios);

//Ruta a recibir//Funcion
app.get('/', (req, res) => {
  //Recibe la ruta raiz de la peticion//la funicnpmion
  //respuesta.end(`<h1>EXPRESS WORKS!<h1>`); //Enviar respuesta
  res.json({
    saludo: 'Hola',
  });
});
// app.listen(3001);
// app.get('/xyz', (solicitud, respuesta) => {
//   respuesta.redirect(301, 'https://google.com');
// });
export default app;
