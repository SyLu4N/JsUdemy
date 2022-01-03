const numero = prompt("Digite um número: ");
let numeroDigitado = Number(numero);
let valiandoNumero = Number.isNaN(numeroDigitado);

if(valiandoNumero == false){
  document.body.innerHTML += `<h1>Seu número é ${numeroDigitado}</h1> <br />`;
  document.body.innerHTML += `A raiz quadrada do seu número é : ${Math.sqrt(numeroDigitado)} <br />`;

  let numeroInteiro = Number.isInteger(numeroDigitado);

  if( numeroInteiro == true){
    document.body.innerHTML += `${numeroDigitado} é um número inteiro!<br />`;
  }else{
    document.body.innerHTML += `${numeroDigitado} é um número quebrado!<br />`;
  }
  document.body.innerHTML += `Arredondando para baixo : ${Math.floor(numeroDigitado)}<br/>`
  document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numeroDigitado)}<br/>`
  document.body.innerHTML += `Com duas casas decimais: ${numeroDigitado.toFixed(2)}<br/>`

  numeroInteiro = Number.isNaN(numeroDigitado);
}else{
  document.body.innerHTML += `<strong>${numero}</strong> não é um número válido.`
}