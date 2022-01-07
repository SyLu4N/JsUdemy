const form = document.querySelector('.form');
  
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Evento Privado!');
  setResultado('Olá mundo!');
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

  if(resultadoIMC < 18.5){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('aa');
    p.innerHTML += `Você está abaixo do peso!`;
    resultado.appendChild(p);
  }else if(resultadoIMC > 18.5 && resultadoIMC <= 24.9){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    const pIMC = document.createElement('p')
    p.classList.add('ideal');
    pIMC.classList.add('imc')
    resultado.appendChild(pIMC);
    resultado.appendChild(p);
    pIMC.innerHTML += `${resultadoIMC}`
    p.innerHTML += `Peso ideal, parabéns!`;
  }else if(resultadoIMC > 25 && resultadoIMC <= 29.9){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('aa');
    resultado.appendChild(p);
    p.innerHTML += `Você está acima do peso!`;
  }else if(resultadoIMC > 30 && resultadoIMC <= 34.9 ){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('o1');
    resultado.appendChild(p);
    o1.innerHTML += `Procure um médico, você já se enquadra em obesidade grau 1`;
  }else if(resultadoIMC > 35 && resultadoIMC <= 39.9){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('o2');
    resultado.appendChild(p);
    p.innerHTML += `Procure um médico, você já se enquadra em obesidade grau 2`;
  }else if(resultadoIMC > 40 && resultadoIMC < 60){
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('o3');
    resultado.appendChild(p);
    p.innerHTML += `Procure um médico, você já se enquadra em obesidade grau 3`;
  }else{
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('aa');
    resultado.appendChild(p);
    p.innerHTML += `Algo deu errado! confira os dados colocados.`;
  }
}
