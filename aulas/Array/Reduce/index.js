const numeros = [2, 50, 80, 1 ,2 ,3 ,4 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosDobro =  numeros.reduce((acumulador, valor) =>{
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 20},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

const maisVelho = pessoas.reduce((acumulador, valor) =>{
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
 
console.log(maisVelho);