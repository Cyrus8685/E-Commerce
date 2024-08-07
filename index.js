const db = require('./config/db');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5432;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
try { db.sync(); console.log('Connected to PostgreSQL database!');} 
    catch (err) 
    { console.error('Error connecting to the database:', err); }