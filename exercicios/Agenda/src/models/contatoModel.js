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
  if(this.body.telefone && this.validatorTelefone()) this.formataTelefone();
};

Contato.prototype.validatorTelefone = function () {
  let telefoneLimpo = this.body.telefone;
  if(telefoneLimpo.indexOf("(") !== -1 || telefoneLimpo.indexOf(")") !== -1 || telefoneLimpo.indexOf("-") !== -1){
   telefoneLimpo = telefoneLimpo.replace(/\D+/g, '').split('').map(Number);
  }

  telefoneLimpo = telefoneLimpo.length === 9 || telefoneLimpo.length === 11
  return telefoneLimpo;
}

Contato.prototype.formataTelefone = function () {
  let telefone = this.body.telefone;
  telefone = telefone.replace(/\D+/g, '');

  if(telefone.length === 11){ 
    telefone = telefone.replace(/^([\d]{0})([\d]{2})([\d]{5})([\d]{4})$/, "$1($2) $3-$4");  
    this.body.telefone = telefone;

  }

  if(telefone.length === 9){ 
    telefone = telefone.replace(/^([\d]{5})([\d]{4})$/, "$1-$2");  
    this.body.telefone = telefone;
  }
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
    telefone: this.body.telefone
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

Contato.delete = async function (id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findByIdAndDelete(id); //Deletar da base de dados
  return contato;
}

module.exports = Contato;
