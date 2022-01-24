/* function criaPessoa(nome, sobrenome, idade){
  return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const pessoa1 = criaPessoa('Luan' ,'Simões', 20); 
console.log(pessoa1.nome) //necessário o '.' para chamar a função espesifica */

const pessoa1 = {
  nome: 'Luan',
  sobrenome: 'Simões',
  idade: 20,

  falar() { //.this = esse elemento.
    console.log(`${this.nome} ${this.sobrenome} está mandando um "Oi"...`);
  },

  incrementaIdade(){
    this.idade++;
    console.log(`${this.idade} :D`)
  }
};

pessoa1.falar();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();