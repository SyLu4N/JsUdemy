function Login (){
  this.form = document.querySelector('.form');
}

Login.prototype.events = function () {
  if(!this.form) return;
  this.form.addEventListener('submit', e =>{
    e.preventDefault();
    this.validaInput(e);
  });
};

Login.prototype.validaInput = function (e) {
  this.okay = true;
  
  const log = this.form.querySelector('.log');
  const password = this.form.querySelector('.password');
  
  for(let error of this.form.querySelectorAll('.errorForm')) error.remove();


  if(!log.value){
    this.newError(log,'* Campo obrigatório!');
    this.okay = false;
  }else if(log.value.length < 3){
    this.newError(log,'Usuário ou E-mail inválido!');
    this.okay = false;
  }

  if(!password.value){
    this.newError(password, '* Campo obrigatório!');
    this.okay = false;
  }else if(password.value.length < 4){
    this.newError(password, 'Senha inválido!');
    this.okay = false;
  }

  this.enviaInput();
};

Login.prototype.newError = function (campo, msg) {

  if(campo.classList.contains('log')){
    campo = this.form.querySelector('.logLabel');
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
};

Login.prototype.enviaInput = function () {
  if(this.okay) this.form.submit();
};

const registro = new Login();
registro.events();
