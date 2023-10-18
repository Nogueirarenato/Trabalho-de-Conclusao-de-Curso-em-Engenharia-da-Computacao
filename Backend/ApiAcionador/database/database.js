const Sequelize = require('sequelize');

const connection = new Sequelize('CLINICAAPI', 'root', 'banana', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
    },
    timezone: '-03:00'
    
});

module.exports = connection;


