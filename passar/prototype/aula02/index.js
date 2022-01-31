/* const objA = {
  chaveA: 'a'
};

const objB = {
  chaveB: 'b'
};

const objC = {
  chaveC: 'c'
};

Object.setPrototypeOf(objB, objA) //Objeto b vira filho do A
Object.setPrototypeOf(objC, objB) //Objeto c vira filho do b
console.log(objC.chaveB); */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(valor){
  this.preco = this.preco - (this.preco * (valor / 100));
};

Produto.prototype.aumenta = function(valor){
  this.preco = this.preco + (this.preco * (valor / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
console.log(p1);

const p2 = {
  nome: 'Caneca',
  preco: '10'
}

Object.setPrototypeOf(p2, p1); //p2 virou filho de p1

p2.desconto(100);
console.log(p2);