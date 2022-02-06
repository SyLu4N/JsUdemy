function Login() {
  this.login();
  this.enter();
}

Login.prototype.enter = function () {
  document.addEventListener('keypress', e => {
    const el = e.keyCode;
    if(document.querySelector('.input').focus){
      console.log('aqu')
      if(el === 13) this.login();
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
  console.log('cadastro')
}

const l1 = new Login();