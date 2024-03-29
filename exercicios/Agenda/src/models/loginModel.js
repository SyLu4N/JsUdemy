const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  log: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

function Login(body) {
  this.body = body;
  this.errors = [];
  this.user = null;
}

Login.prototype.login = async function (){
  this.userEmail = await LoginModel.findOne({email: this.body.log});

  this.userLog = await LoginModel.findOne({log: this.body.log});

  this.user = this.userLog || this.userEmail;

  if(!this.userEmail && !this.userLog) {
    this.errors.push('E-mail ou Usuário não existe!');
    return;
  }

  if(!bcryptjs.compareSync(this.body.password, this.user.password)){
    this.errors.push('Senha inválida!');
    this.user = null;
    return;
  }
}

Login.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;

  await this.userExists();

  if(this.errors.length > 0) return;

  const salt = bcryptjs.genSaltSync();
  this.body.password = bcryptjs.hashSync(this.body.password, salt);

  this.user = await LoginModel.create(this.body);
}

Login.prototype.userExists =  async function(){
  this.userEmail = await LoginModel.findOne({email: this.body.email});
  this.userLog = await LoginModel.findOne({log: this.body.log});
  if(this.userEmail) this.errors.push('Email já cadastrado!');
  if(this.userLog) this.errors.push('Usuário já cadastrado!');
}

Login.prototype.valida = function() {
  this.cleanUp();
  if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
  if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('Senha precisa ter entre 3 a 50 caracteres');
  if(this.body.password !== this.body.passwordCopy) this.errors.push('As senhas devem ser iguais');
}

Login.prototype.cleanUp = function (){
  for(const key in this.body){
    if(typeof this.body[key] !== 'string'){
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    log: this.body.log,
    email: this.body.email,
    password: this.body.password,
    passwordCopy: this.body.password
  };

}


module.exports = Login;
