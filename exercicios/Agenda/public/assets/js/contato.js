function Contato (){
  this.form = document.querySelector('.grid');
}

Contato.prototype.events = function () {
  if(!this.form) return;
  this.form.addEventListener('submit', e =>{
    e.preventDefault();
    this.validaInput(e);
  });
};

Contato.prototype.validaInput = function (e) {
  this.okay = true;
  
  const nome = this.form.querySelector('.name');
  const email = this.form.querySelector('.email');
  const telefone = this.form.querySelector('.telefone');
  
  for(let error of this.form.querySelectorAll('.errorForm')) error.remove();

  if(!nome.value){
      this.newError(nome, '* Campo obrigatório!');
    }
  if(nome.value.length < 3 || nome.value.length > 50){
    this.newError(nome,'"Nome" deve conter de 4 a 50 caracteres');
    this.okay = false;
  }

  if(!email.value && !telefone.value){
    this.newError(email, 'Um dos campos devem ser enviados, "E-mail" ou "Telefone"');
    this.newError(telefone, 'Um dos campos devem ser enviados, "E-mail" ou "Telefone"');
    this.okay = false;
  } 

  if(email.value !== ''){
    if(email.value.length < 4){
    this.newError(email, '"E-mail" inválido!');
    this.okay = false;
    return;
    }
    if(email.value.indexOf('@') === -1){
      this.newError(email, '"E-mail" inválido!');
      this.okay = false;
      return;
    }
    if(email.value.indexOf('.') === -1){
      this.newError(email, '"E-mail" inválido!');
      this.okay = false;
      return;
    }
  }

  if(telefone.value !== ''){
    let telefoneLimpo = telefone.value;
    if(telefoneLimpo.indexOf("(") !== -1 || telefoneLimpo.indexOf(")") !== -1 || telefoneLimpo.indexOf("-") !== -1){
    telefoneLimpo = telefoneLimpo.replace(/\D+/g, '').split('').map(Number);
    }
    if(telefoneLimpo.length !== 9 && telefoneLimpo.length !== 11) {
      console.log(telefoneLimpo.length);
      this.newError(telefone, 'Telefone inválido!');
      this.okay = false;
    }
  }

  this.enviaInput();
};

Contato.prototype.newError = function (campo, msg) {
  if(campo.classList.contains('name')){
    campo = this.form.querySelector('.nameLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }

  if(campo.classList.contains('email')){
    campo = this.form.querySelector('.emailLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }

  if(campo.classList.contains('telefone')){
    campo = this.form.querySelector('.telefoneLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }
};

Contato.prototype.enviaInput = function () {
  console.log(this.okay);
  if(this.okay) this.form.submit();
};

const registro = new Contato();
registro.events();
