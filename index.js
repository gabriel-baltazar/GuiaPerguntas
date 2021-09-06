const express = require('express');
const app = express();
const connection = require('./database/database');

connection.authenticate()
.then(() => {
  console.log('conexao feita com banco de dados');
}).catch((msgErro)=>{
  console.log(msgErro);
})
//Definindo EJS como view engine
app.set('view engine','ejs'); 
app.use(express.static('public'));

//Body parser - form 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rotas
app.get('/',(request,response)=>{

  response.render('index');
});

app.get('/perguntar', (request, response)=>{
  response.render('perguntar');
})

app.post('/salvarpergunta',(request, response)=>{
  var titulo = request.body.titulo;
  var descricao = request.body.descricao;
  response.send("Formulario recebido! titulo: " + titulo + " Descrição:" + descricao);
})

app.listen(8080,()=>{
  console.log('App rodando 🚀');
});
