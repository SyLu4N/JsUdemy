function Login() {
  this.login();
  this.enter();
  this.closeCadastro();
  this.input = document.querySelector('.input');
}

Login.prototype.enter = function () {
  document.addEventListener('keypress', e => {
    const el = e.keyCode;
    const login = document.querySelector('.login');
    const senha = document.querySelector('.senha');

    if(el === 13){ 
      this.input.focus();
      this.validaLogin();
    }
  });
}

Login.prototype.login = function () {
  document.addEventListener('click', e => {
    const el = e.target;
    const login = document.querySelector('.login');
    const senha = document.querySelector('.senha');
    if(el.classList.contains('logar')) this.validaLogin(login.value, senha.value);
    if(el.classList.contains('cadastro')) this.cadastro();
  });
}

Login.prototype.validaLogin = function (login, senha) {
  if(document.querySelector('.error')) document.querySelector('.error').remove();
  if(!login || !senha) this.newError('Login ou senha inválidos *');
}

Login.prototype.newError = function (msg) {
  const campo = document.querySelector('.senha')
  const p = document.createElement('p');
  p.innerText = msg;
  p.classList.add('error');
  campo.insertAdjacentElement('afterend', p);
}

Login.prototype.cadastro = function () {
  this.form = document.querySelector('.cadastroForm');
  this.form.setAttribute('class', 'displayBlock');
  const c1 = new Cadastro();
}

Login.prototype.closeCadastro = function () {
  document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('close')) this.form.setAttribute('class', 'cadastroForm');
  });
}

const l1 = new Login();
