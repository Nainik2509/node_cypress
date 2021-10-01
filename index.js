const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth');

// Setup to read an env variables froma file
dotenv.config();

// Connect to the database
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected To MongoDb'))

// Middleware
app.use('/api/user', authRoutes)
app.listen(3333, () => console.log('server is running '))