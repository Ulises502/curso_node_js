# curso_node_js
 Api - back end con nodejs para curso

Instalar dependencias de la API y te crea la carpeta node modules
- npm install
- npm i

Arrancar el server de la API de manera local
- npm start

Si hay alguna ruta armada, se puede consultar con Postman

## Instalar Express, para hacer peticiones http
- npm install express --save

En el src creas el index.js y le ponés
- const express = require('express');

Para settear el puerto donde se ejecuta la API
- app.listen(PORT);

Tener disponible nodemon para arrancar el server en cualquier momento. Si ya se instaló global, se puede usar directamente
- npm install nodemon -g

Ejecutar nodemon (en package.json en scripts se pone: "start": "nodemon src/index.js")
- npm start

## Armar proyecto
Se puede contruir a mano los controllers y los routers. Usar la misma estructura que el proyecto.

## Configurar la base de datos
Crear .env con los datos de la base de datos
- NODE_ENV=development
- PORT=****
- DB_USERNAME="****"
- DB_PASSWORD="****"
- DB_NAME="database_name"
- DB_TEST_NAME="test_database"

Configurar Sequelize
- npm install -g sequelize-cli
- npm install --save sequelize pg pg-hstore
- npx sequelize-cli

Crear .sequelizerc con las direcciones de los modelos de la base de datos