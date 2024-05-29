import express from 'express';
import rutaUsuarios from './routes/rutaUsuarios.js';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use('/usuarios', rutaUsuarios);

//Ruta a recibir//Funcion
//Recibe la ruta raiz de la peticion//la funcion
app.get('/', (req, res) => {
  //respuesta.end(`<h1>EXPRESS WORKS!<h1>`); //Enviar respuesta
  res.json({
    mensaje: 'Server works!',
  });
  // respuesta.status(404).send('No encontrado');
});
// app.get('/xyz', (solicitud, respuesta) => {
//   respuesta.redirect(301, 'https://google.com');
// });
export default app;
