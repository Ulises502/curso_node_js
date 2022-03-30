const express = require('express');
//var cors = require('cors');
const routerConfig = require('./routes/index.routes');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const configApi = (app) => {
  // para que la API maneje los datos en formato json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //app.use(cors());
  return;
};

const configRouter = (app) => {
  // aca se registran las rutas bases
  app.use('/api/v1/', routerConfig.loggedInRoutes());
  app.use('/', routerConfig.authroutes());
};

const configHeaders = (app) => {
  // aca se registran los headers que se van a permitir
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
};

const init = () => {
  const app = express(); // se define app y luego se le agregan las configuraciones
  configApi(app);
  configRouter(app);
  configHeaders(app);
  app.listen(PORT);
  console.log('Su aplicacion se esta ejecutando en el puerto: ' + PORT);
};

init();