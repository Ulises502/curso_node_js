// Get dependencies
const express = require('express');
const db = require("./src/database/models");

// Route handlers
//const authApi = require('./v1/auth');

// Create server
const app = express();

// API routes
//app.use('/v1/auth', authApi);

module.export = { app };