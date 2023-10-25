const Sequelize = require('sequelize');

//Banco de Dados KingHost

// const connection = new Sequelize('apirenatonogue', 'apirenatonogue', 'Banana33', {
//     host: 'mysql.apirenatonogueira.kinghost.net',
//     dialect: 'mysql',
//     dialectOptions: {
//         //useUTC: false, //for reading from database
//         dateStrings: true,
//         typeCast: true
//     },
//     timezone: '-03:00'

// });


//Banco de Dados local
const connection = new Sequelize('clinicaapi', 'root', 'banana', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        //useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
    },
    timezone: '-03:00'

});

module.exports = connection;


