function IMC() {
  this.form = document.querySelector('.form');
  this.peso = this.form.querySelector('.peso');
  this.altura = this.form.querySelector('.altura');
  this.bottom = this.form.querySelectorAll('.bottom');
  this.recebeForm();
  this.click();
}

IMC.prototype.click = function () {
  let contador = 0;
  this.info = document.querySelector('.info');
  this.info.setAttribute('title', 'Tabela IMC');

  document.addEventListener('click', e =>{
    this.tImc = document.querySelector('.flex');
    const el = e.target;
    if(el.classList.contains('info')){
      if(contador < 1){
        this.tImc.classList.add('open');
        this.info.classList.add('girar');
        this.tImc.classList.remove('none');
        contador ++;
      }else if(contador >= 1){
        this.tImc.classList.add('none');
        this.info.classList.remove('girar');
        contador --;
      }
    }else if(el.classList.contains('close')){
      this.tImc.classList.add('none');
      this.info.classList.remove('girar');
      contador --;
    }else{
      this.tImc.classList.add('none');
      this.info.classList.remove('girar');
      contador --;
    }
  });
}

IMC.prototype.recebeForm = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.checkInput();
  });
};

IMC.prototype.checkInput = function () {
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
  
  if(altura.indexOf(',' !== -1) || peso.indexOf(',' !== -1) ){
    altura = altura.replace(',' , '.');
    peso = peso.replace(',' , '.');
  }

  const imc = peso / altura**2
  this.resultado = this.form.querySelector('.resultado');
  this.resultado.innerHTML = '';
  this.setResultado(imc.toFixed(0), imc);
};

IMC.prototype.setResultado = function (resultadoIMC, imcPuro) {
  const p = document.createElement('p');
  const imc = document.createElement('p');
  const info = document.querySelector('.info');
  imc.classList.add('imc');
  imc.setAttribute('title', `Seu IMC ${imcPuro}`)
  this.resultado.innerHTML = '';
  this.resultado.appendChild(imc);
  this.resultado.appendChild(p);
  imc.innerText += `${resultadoIMC}`;
  
  if(resultadoIMC < 10){
    imc.setAttribute('class', 'none');
    p.classList.add('aa');
    p.innerHTML += `Algo deu errado! Confira os dados colocados.`;
  }else if(resultadoIMC >= 10 && resultadoIMC <= 18.4){
    p.classList.add('aa');
    p.innerHTML += `Você está abaixo do peso!`;
  }else if(resultadoIMC > 18.5 && resultadoIMC <= 24.9){
  p.classList.add('ideal');
  p.innerHTML += `Peso ideal, parabéns!`;
  }else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
    p.classList.add('aa');
    p.innerHTML += `Você está acima do peso!`;
  }else if(resultadoIMC >= 30 && resultadoIMC <= 34.9 ){
    p.classList.add('o1');
    p.innerHTML += `Obesidade grau 1, cuidado!`;
  }else if(resultadoIMC >= 35 && resultadoIMC <= 39.9){
    p.classList.add('o2');
    p.innerHTML += `Obesidade grau 2, procure um médico!`;
  }else if(resultadoIMC > 40 && resultadoIMC < 70){
    p.classList.add('o3');
    p.innerHTML += `Obesidade grau 3, procure um médico!`;
  }else{
    p.classList.add('aa');
    p.innerHTML += `Algo deu errado! Confira os dados colocados.`;
  }
};

const pImc = new IMC();
