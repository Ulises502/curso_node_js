// Get dependencies
const express = require('express');
const userRouter = require('./src/routes/user.routes.js');
const authRouter = require('./src/routes/auth.routes.js');
const taskRouter = require('./src/routes/task.routes.js');

// Create server
const app = express();

// routes
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/auth', authRouter);
app.use('/api/v1/tasks', taskRouter);

module.exports = { app };