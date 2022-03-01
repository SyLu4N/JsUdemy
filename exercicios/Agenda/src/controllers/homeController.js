const Contato = require('../models/ContatoModel.js');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};