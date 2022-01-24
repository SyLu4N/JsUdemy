const numero = prompt("Digite um número: ");
let numeroDigitado = Number(numero);
let valiandoNumero = Number.isNaN(numeroDigitado);

if(valiandoNumero == false){
  const title = document.getElementById('titleNumber');
  const paragrafo = document.getElementById('bodyRespostas');
  
  title.innerHTML = numeroDigitado;
  paragrafo.innerHTML += `A raiz quadrada do seu número é : ${Math.sqrt(numeroDigitado)}`;

  let numeroInteiro = Number.isInteger(numeroDigitado);

  if( numeroInteiro == true){
    paragrafo.innerHTML += `<p> ${numeroDigitado} é um número inteiro!</p>`;
  }else{
    paragrafo.innerHTML += `<p> ${numeroDigitado} é um número quebrado!</p>`;
  }

  paragrafo.innerHTML += `<p> Arredondando para baixo : ${Math.floor(numeroDigitado)}</p>`;
  paragrafo.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numeroDigitado)}</p>`;
  paragrafo.innerHTML += `<p> Com duas casas decimais: ${numeroDigitado.toFixed(2)}</p>`;

  numeroInteiro = Number.isNaN(numeroDigitado);
}else{
  document.body.innerHTML = `<strong>${numero}</strong> não é um número válido animal.`
}