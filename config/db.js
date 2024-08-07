const { Sequelize } = require("sequelize");

const db = new Sequelize({ user: 'postgres', 
    host: 'localhost', 
    database: 'PostgreSQL 16', 
    password: 'Eternal1', port: '5432', 
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },}
    
);
    
    module.exports = db