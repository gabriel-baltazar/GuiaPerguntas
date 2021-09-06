const Sequelize = require('sequelize');
const connection = require('./database');

//Configuraçoes da tabela no banco
const Pergunta = connection.define('perguntas',{
  titulo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao:{
    type: Sequelize.TEXT,
    allowNull:false
  }
});

//Criar a tabela no banco
Pergunta.sync({force: false}).then(()=>{});

module.exports = Pergunta;