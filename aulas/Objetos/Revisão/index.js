const pessoa = {
  nome: 'Luan',
  segundoNome: 'Carlos',
  sobrenome: 'Simões'
};

//Temos algumas maneiras de chamar esses objetos.

/* PRIMEIRA OPÇÃO
console.log(pessoa.nome); */

/* SEGUNDA OPÇÃO
console.log(pessoa['sobrenome']); */

/* TERCEIRA OPÇÃO 
const chave = 'nome';
console.log(pessoa[chave]); */

delete pessoa.segundoNome;
console.log(pessoa);