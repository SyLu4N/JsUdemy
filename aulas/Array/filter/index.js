/* OPÇÃO 01

const numeros = [5, 50, 80, 1 ,2 ,3 ,4 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
for(let i = 0; i <= numeros.length; i++){
  if(numeros[i] < 10) {
    numeros.splice(i, 1);
    i--;
  }
} */

/* OPÇÃO 02

const numeros = [5, 50, 80, 1 ,2 ,3 ,4 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosFiltrados = [];
for(i of numeros) if(i >= 10) numerosFiltrados.push(i); */


/* OPÇÃO 03 Filter

const numeros = [5, 50, 80, 1 ,2 ,3 ,4 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosFiltrados = numeros.filter(valor => valor > 10);*/

//exercicio real

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 20},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

const nomesMaiores = pessoas.filter(valor => valor.nome.length >= 5);
const maiores50 = pessoas.filter(valor => valor.idade >= 50);
const fianisA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));

console.log(nomesMaiores);
console.log(maiores50);
console.log(fianisA);