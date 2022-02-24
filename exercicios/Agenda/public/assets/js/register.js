function Register (){
  this.form = document.querySelector('.formRegister');
}

Register.prototype.init = function () {
  this.events();
}

Register.prototype.events = function () {
  if(!this.form) return;
  this.form.addEventListener('submit', e =>{
    e.preventDefault();
    this.validaInput(e);
  });
}

Register.prototype.validaInput = function (e) {
  const el = e.target;
  const nome = el.querySelector('input[name="nome"]');
  const usuario = el.querySelector('input[name="log"]');
  const email = el.querySelector('input[name="email"]');
  const password = el.querySelector('input[name="password"]');
  const passwordCopy = el.querySelector('input[name="passwordCopy"]');
  const input = el.querySelectorAll('input');
  
  for(let error of this.form.querySelectorAll('.errorForm')) error.remove();

  for(let value of input){
    if(!value.value) this.newError(value, `* Campo obrigatório!`);

    if(value.name === 'nome'){
      const nome = value.value;
      if(nome.length < 3 || nome.length > 50) this.newError(value,'Nome deve conter de 4 a 50 caracteres')
    }
  } 
}

Register.prototype.newError = function (campo, msg) {
  campo = campo.querySelector('.labelFloat');
  const p = document.createElement('p');
  p.innerText = msg;
  p.setAttribute('class', 'errorForm');
  campo.insertAdjacentElement('beforeend', p);
}

const registro = new Register();
registro.init();