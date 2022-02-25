function Register (){
  this.form = document.querySelector('.grid');
  this.okay = true;
}

Register.prototype.events = function () {
  if(!this.form) return;
  this.form.addEventListener('submit', e =>{
    e.preventDefault();
    this.validaInput(e);
    });
};

Register.prototype.validaInput = function (e) {
  const name = this.form.querySelector('name=[nome]');
  if(!name){
    this.newError(name ,'"Campo obrigatório!"');
  }
};

Register.prototype.newError = function (campo, msg) {
  this.okay = false;
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

Register.prototype.enviaInput = function () {
  if(this.okay) this.form.submit();
}

const registro = new Register();
registro.events();
