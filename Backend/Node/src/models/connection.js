const mysql = require ("mysql2/promise");

const connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'banana',
    database: 'todolist'
});


module.exports = connection;