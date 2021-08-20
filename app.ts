// Get dependencies
import express from 'express';
import db from "./src/database/models";

// Route handlers
const authApi = require('./v1/auth');

// Create server
const app: express.Application = express();

// API routes
app.use('/v1/auth', authApi);

export { app };