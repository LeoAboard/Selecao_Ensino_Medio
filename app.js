const express = require("express")
const app = express()

//-------CONEXÃO COM DB-------------

const Sequelize = require('sequelize')
const sequelize = new Sequelize('inscricoes-ifms', 'root', 'postgres', {  //nome do BD, usuario, senha do BD, host, linguagem-banco
    host: 'localhost',
    dialect: 'postgresql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexão: "+erro)
})

//-----------------------------------

app.use(express.static('Selecao_Ensino_Medio-main'))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Selecao_Ensino_Medio-main/index.html")
})

app.get("/inscricoes", function(req, res){
    res.send("Aqui vamos receber os dados do formulario") 
})  

app.listen(8081, function(){
    console.log("Servidor operando em: http://localhost:8081/")
})