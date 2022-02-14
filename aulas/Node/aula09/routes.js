const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeControlle');
const contatoController = require('./controllers/contatoController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas contato
route.get('/contato', contatoController.paginaInicial);







module.exports = route;