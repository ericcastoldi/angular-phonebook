var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// use middleware
app.use(bodyParser());

app.all('*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


var contatos = [
  {nome: "Ana", telefone: "99875433", data: new Date(), operadora : {nome: "Oi", codigo: 14, categoria: "Celular"}},
  {nome: "Gustavo", telefone:"88763039", data: new Date(), operadora : {nome: "GVT", codigo: 25, categoria: "Fixo"}},
  {nome: "Júlio", telefone:"33364558", data: new Date(), operadora : {nome: "Embratel", codigo: 21, categoria: "Fixo"}},
  {nome: "Mariana", telefone: "78875433", data: new Date(), operadora : {nome: "Oi", codigo: 14, categoria: "Celular"}},
  {nome: "Ananias", telefone: "99873322", data: new Date(), operadora : {nome: "Tim", codigo: 41, categoria: "Celular"}},
  {nome: "Percival", telefone: "88995433", data: new Date(), operadora : {nome: "Vivo", codigo: 15, categoria: "Celular"}},
];

var operadoras = [
  {nome: "Oi", codigo: 14, categoria: "Celular"},
  {nome: "Vivo", codigo: 15, categoria: "Celular"},
  {nome: "Tim", codigo: 41, categoria: "Celular"},
  {nome: "GVT", codigo: 25, categoria: "Fixo"},
  {nome: "Embratel", codigo: 21, categoria: "Fixo"},
];

// define routes
app.get('/contatos', function(request, response) {
  response.json(contatos);
});

app.post('/contatos', function(request, response){
  var contato = request.body.contato;
  console.log(contato);
  contatos.push(contato);

  response.json(contatos);
});


app.get('/operadoras', function(request, response) {
  response.json(operadoras);
});

app.listen(1337, function() {
  console.log('ready on port 1337');
});