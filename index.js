const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./routes/index.js');
require('dotenv').config()
// import sequelize connection
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const http = require('http').Server(app);

PORT = process.env.SV_PORT
console.log(PORT)

app.use(routes);
console.log("Made It");
// sync sequelize models to the database, then turn on the server

try { sequelize.sync(); console.log('Connected to PostgreSQL database!'); 
  http.listen(PORT, () => console.log (`Server Listening on Port ${PORT}`)); } 
  catch (err) 
  { console.error('Error connecting to the database:', err); }
