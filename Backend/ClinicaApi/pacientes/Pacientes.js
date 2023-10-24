const Sequelize = require('sequelize');
const connection = require('../database/database');

const Pacientes = connection.define('paciente', {


    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responsavel_1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel_responsavel_1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responsavel_2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel_responsavel_2: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

Pacientes.sync({ force: false });

module.exports = Pacientes;
