const CPF = '292.699.808-20';
let CPFLimpo = CPF.replace(/\D+/g, '').split('').map(Number);
let validacao = [...CPFLimpo];
validacao.splice(-2, 2);

function digitos(CPF) {
  let contador = CPF.length + 1;
  let digito = 0;
  for(i of CPF){
    digito += i * contador;
    contador --;
  }

  digito = 11 - (digito % 11);
  return digito >= 10 ? 0 : digito;
}

validacao.push(digitos(validacao));
validacao.push(digitos(validacao));

validacao = validacao.toString().replace(/,/g, '');
CPFLimpo = CPFLimpo.toString().replace(/,/g, '');

const valido = validacao === CPFLimpo ? 'CPF Válido' : 'CPF Inválido';
console.log(`O CPF ${CPF} é ${valido}!`);