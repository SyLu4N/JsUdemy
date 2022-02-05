function Form(){
  this.form = document.querySelector('.form')
  this.eventos();
}

Form.prototype.eventos = function () {
  this.form.addEventListener('submit', e =>{
    this.verificaCampo(e);
  });
};

Form.prototype.verificaCampo = function (e) {
  e.preventDefault();
  const checkCampo = this.checkCampos();
};

Form.prototype.checkCampos = function () {
  let valid = true;
  
  for(errorText of this.form.querySelectorAll('.errorText')){
    errorText.remove();
  }

  for(campo of this.form.querySelectorAll('.input')){
    const label = campo.previousElementSibling.innerText.slice(0, -3); //irmão mais velho (anterior)
    if(!campo.value){
      this.newError(campo, `O campo "${label}" não pode estar vazio.`);
      valid = false;
    };

    if(campo.classList.contains('cpf')){
      if(!this.validaCPF(campo.value)) valid = false;
    }

  }
};

Form.prototype.validaCPF = function (cpf) {
  const cpf = new ValidaCPF(cpf);
}

Form.prototype.newError = function (campo, msg) {
  const p = document.createElement('p');
  p.innerHTML = msg;
  p.classList.add('errorText');
  campo.insertAdjacentElement('afterend', p); //adiciona assim que acabar o elemento
  
}

const envio1 = new Form();