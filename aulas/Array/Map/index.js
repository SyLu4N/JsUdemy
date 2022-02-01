const numeros = [5, 50, 80, 1 ,2 ,3 ,4 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosDobro =  numeros.map(valor => valor * 2);  

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 20},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const addId = pessoas.map((obj, indice) =>{
  obj.id = indice;
  return obj;
});
 
console.log(addId);