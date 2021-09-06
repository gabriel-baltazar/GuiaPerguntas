const Sequelize = require('sequelize');

//config banco de dados
const connection = new Sequelize('guiaperguntas','root','admin',{
  host:'localhost',
  dialect: 'mysql'
});

module.exports = connection;