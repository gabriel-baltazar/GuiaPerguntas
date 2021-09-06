const express = require('express');
const app = express();
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//conexão com banco de dados
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
  //Salvando a pergunta no banco de dados (INSERT)
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(()=>{
    response.redirect("/");
  })
})

app.listen(8080,()=>{
  console.log('App rodando 🚀');
});
