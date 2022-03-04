function IMC() {
  this.form = document.querySelector('.form');
  this.peso = this.form.querySelector('.peso');
  this.altura = this.form.querySelector('.altura');
  this.bottom = this.form.querySelectorAll('.bottom');
  this.recebeForm();
}

IMC.prototype.recebeForm = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.setResultado();
  });
};

IMC.prototype.setResultado = function () {
  this.error = true;
  for(error of this.form.querySelectorAll('.errorForm')) error.remove();

  if(!this.peso.value || this.peso.value === 'undefined') this.newError(this.peso, '* Peso inválido');
  if(!this.altura.value || this.altura.value === 'undefined') this.newError(this.altura, '* Altura inválido');
  if(this.error) this.calculo(this.altura.value, this.peso.value);
};

IMC.prototype.newError = function (campo, msg) {
  const p = document.createElement('p');
  p.innerText = msg;
  p.classList.add('errorForm');
  campo.insertAdjacentElement('afterend', p);
  for(campo of this.bottom) campo.classList.remove('bottom');
  this.error = false;
};

IMC.prototype.calculo = function (altura, peso) {
  const altura = altura**2
  console.log(altura);
};

const pImc = new IMC();
