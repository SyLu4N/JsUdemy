const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControlle');
const contatoController = require('./src/controllers/contatoController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas contato
route.get('/contato', contatoController.paginaInicial);







module.exports = route;