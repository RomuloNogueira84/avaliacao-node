const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
});


module.exports = sequelize;