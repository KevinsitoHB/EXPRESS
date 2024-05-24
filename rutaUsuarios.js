import {Router} from 'express';

const rutaUsuarios = Router();

rutaUsuarios.post('/', (req, res) => {
  res.json({mensaje: 'POST usuario'});
});
rutaUsuarios.get('/:id', (req, res) => {
  res.json({mensaje: 'GET usuarios works!'});
});
rutaUsuarios.put('/:id', (req, res) => {
  res.json({mensaje: 'PUT usuarios works!'});
});
rutaUsuarios.delete('/:id', (req, res) => {
  res.json({mensaje: 'DELETE usuarios works!'});
});
export default rutaUsuarios;
