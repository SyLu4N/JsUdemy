const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
};

Contato.prototype.edit = async function (id) {
    if(typeof id !== 'string') return;
    this.validar();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
};

Contato.prototype.register = async function() {
  this.validar();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.validar = function() {
  this.cleanUp();

  // Validação
  // O e-mail precisa ser válido
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
  if(!this.body.nome) this.errors.push('"Nome" é um campo obrigatório!');
  if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato precisa ser enviado: "E-mail" ou "Telefone"!');
  if(this.body.telefone && !this.validatorTelefone()) this.errors.push('Telefone inválido !');
};

Contato.prototype.validatorTelefone = function () {
  console.log(this.body.telefone.length === 9);
  const telefone = this.body.telefone.length === 9 || this.body.telefone.length === 11;
  return telefone;
}

Contato.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};


//Métodos estáticos
Contato.buscaPorId = async function (id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
}

Contato.buscaContatos = async function () {
  const contatos = await ContatoModel.find() //caso queria filtar find({email: luaan.carlos@hotmail.com})
  .sort({criadoEm: -1}); //.sorte = campo a ser ordenado > 1 crescente > -1 decrescente
  return contatos;
}

module.exports = Contato;