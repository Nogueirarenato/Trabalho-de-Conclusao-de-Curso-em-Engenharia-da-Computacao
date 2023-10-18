const Sequelize = require('sequelize');
const connection = require('../database/database');





const Login = connection.define('administrador', {
    
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha :{
        type: Sequelize.STRING,
        allowNull: false
    } 
    
})


Login.sync({force: false});

module.exports = Login;
