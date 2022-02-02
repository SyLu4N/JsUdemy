class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){
    console.log(`${this.nome} está falando...`);
  }
}

const p1 = new Pessoa('Luan', 'Simões');
console.log(p1);

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
  console.log(`${this.nome} está falando...`);
};

const p2 = new Pessoa2('Nicoli', 'Ramos');
console.log(p2.falar());
