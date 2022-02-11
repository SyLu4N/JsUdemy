function IMC() {
  this.form = document.querySelector('.form');
  this.peso = this.form.querySelector('.peso');
  this.altura = this.form.querySelector('.altura');
  this.bottom = this.form.querySelectorAll('.bottom');
  this.recebeForm();
  this.formataForm();
}

IMC.prototype.recebeForm = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.setResultado();
  });
}

IMC.prototype.formataForm = function () {
  const peso = this.peso;
  const altura = this.altura;

  peso.addEventListener('input', e =>{
    const el = e.target.value;
    if(el.length === 2) peso.value += '.';
  })

  altura.addEventListener('input', e =>{
    const el = e.target.value;
    if(el.length === 1) {
      altura.value += '.';
      altura.addEventListener('keypress', e =>{
        const el = e.keyCode;
        if(el === 8) altura.value.slice(0, -1);
      })
    }
  })
}

IMC.prototype.setResultado = function () {
  if(!this.peso.value || this.peso.value === 'undefined') this.newError(this.peso, '* Peso inválido');
  if(!this.altura.value || this.altura.value === 'undefined')this.newError(this.altura, '* Altura inválido');

}

IMC.prototype.newError = function (campo, msg) {
  const p = document.createElement('p');
  p.innerText = msg;
  p.classList.add('errorForm');
  campo.insertAdjacentElement('afterend', p);
  for(campo of this.bottom) campo.classList.remove('bottom');
}

const pImc = new IMC();
/* const form = document.querySelector('.form');
  
form.addEventListener('submit', function (e) {
  e.preventDefault();
  setResultado();
});

function setResultado(msg) {

  const pesoInput = form.querySelector('.peso');
  const alturaInput = form.querySelector('.altura');
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  let resultadoIMC = peso / (altura * altura);
  resultadoIMC = resultadoIMC.toFixed(1);
  console.log(resultadoIMC);

  const resultado = document.querySelector('.resultado');
  const p = document.createElement('p');
  const imc = document.createElement('p');
  imc.classList.add('imc')

  if(resultadoIMC < 18.5){
    resultado.innerHTML = '';
    p.classList.add('aa');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Você está abaixo do peso!`;
  }else if(resultadoIMC > 18.5 && resultadoIMC <= 24.9){
    resultado.innerHTML = '';
    p.classList.add('ideal');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Peso ideal, parabéns!`;
  }else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
    resultado.innerHTML = '';
    p.classList.add('aa');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Você está acima do peso, cuidado!`;
  }else if(resultadoIMC >= 30 && resultadoIMC <= 34.9 ){
    resultado.innerHTML = '';
    p.classList.add('o1');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Obesidade grau 1, procure um médico!`;
  }else if(resultadoIMC >= 35 && resultadoIMC <= 39.9){
    resultado.innerHTML = '';
    p.classList.add('o2');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Obesidade grau 2, procure um médico!`;
  }else if(resultadoIMC > 40 && resultadoIMC < 70){
    resultado.innerHTML = '';
    p.classList.add('o3');
    resultado.appendChild(imc);
    resultado.appendChild(p);
    imc.innerHTML += `${resultadoIMC}`;
    p.innerHTML += `Obesidade grau 3, procure um médico!`;
  }else{
    resultado.innerHTML = '';
    p.classList.add('aa');
    resultado.appendChild(p);
    p.innerHTML += `Algo deu errado! confira os dados colocados.`;
  }
}
 */

