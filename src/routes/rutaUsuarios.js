import {Router} from 'express';
import ControladorUsuarios from '../controllers/controladorUsuarios.js';

const rutaUsuarios = Router();

rutaUsuarios.post('/', ControladorUsuarios.crearUsuario);
rutaUsuarios.get('/:id', ControladorUsuarios.leerUsuario);
rutaUsuarios.get('/', ControladorUsuarios.leerUsuarios);
rutaUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);
rutaUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);
export default rutaUsuarios;
