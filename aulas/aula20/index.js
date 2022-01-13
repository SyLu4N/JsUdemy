const frutas = ['Maça', 'Banana', 'Pêra', 'Uva', 'Abacaxi'];

for(let i in frutas){
  console.log(frutas[i])
}

const pessoas = {
  nome: 'Luan',
  Sobrenome: 'Simões',
  Idade: '20'
};

for(let chaves in pessoas){
  console.log(chaves, pessoas[chaves])
}

/* for(i = 0; i < frutas.length; i ++){
  console.log(frutas[i]);
} */