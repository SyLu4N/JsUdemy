function Register (){
  this.form = document.querySelector('.formRegister');
}

Register.prototype.events = function () {
  if(!this.form) return;
  this.form.addEventListener('submit', e =>{
    e.preventDefault();
    this.validaInput(e);
  });
};

Register.prototype.validaInput = function (e) {
  const el = e.target;
  const input = el.querySelectorAll('input');
  
  this.okay = true;

  for(let error of this.form.querySelectorAll('.errorForm')) error.remove();

  for(let value of input){
    if(!value.value) {
      this.newError(value, `* Campo obrigatório!`);
      this.okay = false;
    }else if(value.name === 'nome'){
      const campo = value.value;
      if(campo.length < 3 || campo.length > 50) {
        this.newError(value,'"Nome" deve conter de 4 a 50 caracteres');
        this.okay = false;
      }
    }else if(value.name === 'log'){
      const campo = value.value;
      if(campo.length < 4 || campo.length > 14) {
        this.newError(value,'"Usuário" deve conter de 4 a 14 caracteres');
        this.okay = false;
      }
    }else if(value.name === 'email'){
      const campo = value.value;
      if(campo.length < 4|| campo.indexOf('@') === -1 || campo.indexOf('.') === -1) {
        this.newError(value, '"E-mail" inválido!');
        this.okay = false;
      }
    }
  }

  this.validaSenha();
};

Register.prototype.validaSenha = function () {
  const senha = this.form.querySelector('.password');
  const senha2 = this.form.querySelector('.passwordCopy');

  if(senha.value){
    if(senha.value.length < 6 || senha.value.length > 12){
      this.okay = false;
      this.newError(senha, 'Senha deve conter de 6 a 12 caracteres');
    } 
    if(senha.value !== senha2.value){
      this.okay = false;
      this.newError(senha2, 'As senhas devem ser iguais.')
      this.newError(senha, 'As senhas devem ser iguais.')
    }
  }

  this.enviaInput();
};

Register.prototype.newError = function (campo, msg) {

  if(campo.classList.contains('name')){
    campo = this.form.querySelector('.nameLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }

  if(campo.classList.contains('log')){
    campo = this.form.querySelector('.logLabel');
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

  if(campo.classList.contains('password')){
    campo = this.form.querySelector('.passwordLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }

  if(campo.classList.contains('passwordCopy')){
    campo = this.form.querySelector('.passwordCopyLabel');
    const p = document.createElement('p');
    p.innerText = msg;
    p.setAttribute('class', 'errorForm');
    campo.insertAdjacentElement('beforeend', p);
  }
};

Register.prototype.enviaInput = function () {
  if(this.okay) this.form.submit();
}

const registro = new Register();
registro.events();
