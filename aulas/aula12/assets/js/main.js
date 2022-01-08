const form = document.querySelector('.form');
  
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
