const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Agendamento = sequelize.define('Agendamento', {
  nomeCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataAgendamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horarioAgendamento: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  descricaoAgendamento: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Agendamento;