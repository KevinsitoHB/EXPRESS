import modeloUsuario from '../models/modeloUsuario.js';

const ControladorUsuarios = {
  crearUsuario: async (req, res) => {
    try {
      const nuevoUsuario = new modeloUsuario(req.body);
      const usuarioCreado = await nuevoUsuario.save();

      if (usuarioCreado._id) {
        res.json({
          mensaje: 'Usuario Creado',
          identification: usuarioCreado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: 'error en la creacion',
        mensaje: 'ocurrió un error al crear usuario',
        datos: error,
      });
    }
  },
  leerUsuario: async (req, res) => {
    try {
      const usuarioEncontrado = await modeloUsuario.findById(req.params.id);
      if (usuarioEncontrado._id) {
        res.json({
          mensaje: 'GET leer usuario...works!',
          datos: usuarioEncontrado,
        });
      }
    } catch (error) {
      res.json({
        mensaje: 'ocurrió un error al leer usuario',
        datos: error,
      });
    }
  },
  leerUsuarios: async (req, res) => {
    try {
      const todosUsuarios = await modeloUsuario.find();
      res.json({
        mensaje: 'GET leer todos usuarios... works!',
        datos: todosUsuarios,
      });
    } catch (error) {
      res.json({
        mensaje: 'ocurrió un error al leer todos los usuarios',
        datos: error,
      });
    }
  },
  actualizarUsuario: async (req, res) => {
    try {
      const usuarioActualizado = await modeloUsuario.findByIdAndUpdate(
        req.params.id
      );
      if (usuarioActualizado._id) {
        res.json({
          mensaje: 'PUT actualizar usuario...works!',
          datos: usuarioActualizado,
        });
      }
    } catch (error) {
      res.json({
        mensaje: 'ocurrió un error al actualizar usuario',
        datos: error,
      });
    }
  },
  eliminarUsuario: async (req, res) => {
    try {
      const usuarioEliminado = await modeloUsuario.findOneAndDelete(
        req.params.id
      );
      if (usuarioEliminado._id) {
        res.json({mensaje: 'DELETE eliminar usuario...works!', datos: null});
      }
    } catch (error) {
      res.json({
        mensaje: 'ocurrió un error al eliminar usuario',
        datos: error,
      });
    }
  },
};

export default ControladorUsuarios;
