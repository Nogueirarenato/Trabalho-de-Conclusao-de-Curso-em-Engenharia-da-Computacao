const Sequelize = require('sequelize');
const connection = require('../database/database');
const Pacientes = require('../pacientes/Pacientes.js');





const Medicamentos = connection.define('medicacao', {
    
   
    medicamento:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dose:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data_inicial :{
        type: Sequelize.DATE(6),
        allowNull: false
    },
    data_final :{
        type: Sequelize.DATE(6),
        allowNull: false
    },
    intervalo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status:{
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false
    }
    
})

Medicamentos.belongsTo(Pacientes); //Um medicamento pertence a um paciente
Pacientes.hasMany(Medicamentos)//Um paciente tem muitos medicamentos
Medicamentos.sync({force: false});

module.exports = Medicamentos;
