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
Crear config.js en carpeta database/config con las configuraciones de la base de datos (usar proyecto)

Para crear la base de datos (usa los datos guardados en .env)
- npm run db:create

Crear un archivo en modelo
- npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string

**¿Por qué conviene usar la linea de comando para crear modelo que tiene "extendes Model"?**

A Model represents a table in the database. Instances of this class represent a database row.

    Model instances operate with the concept of a dataValues property, which stores the actual values represented by the instance. 
    By default, the values from dataValues can also be accessed directly from the Instance, that is:

    instance.field
    // is the same as
    instance.get('field')
    // is the same as
    instance.getDataValue('field')


Crear archivo para migracion a la base de datos
- npx sequelize-cli db:migrate      (o se puede usar - npm run db:migrate)

Los archivos migrations tienen dentro info de la estructura de la tabla
    
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {}
    },

El database/models/index.js tiene el comando para actualizar la estructura de la base de datos con cada modificación
- sequelize.sync()      // This creates the table if it doesn't exist (and does nothing if it already exists)
- sequelize.sync({force:true})      // This creates the table, dropping it first if it already existed
- sequelize.sync({ alter: true });      // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

**Para cargar datos a la base de datos:**
- npx sequelize init:seeders
- npx sequelize seed:generate --name algunNombre

Escribir en el archivo seeder creado los datos a cargar.

Y luego migrar:
- npx sequelize db:seed:all

## Crear nuevas peticiones en los controllers usando los del proyecto