import 'dotenv/config';
import appServer from './servidor.js';
import './conexionDB.js';

appServer.listen(3000, () => {
  console.log('En el puerto 3000');
});
