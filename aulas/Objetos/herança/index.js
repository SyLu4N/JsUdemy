function Produto(nome, valor){
  this.nome = nome;
  this.valor = valor;
}

Produto.prototype.aumento = function(quantia) {
  this.valor += quantia;
}

Produto.prototype.desconto = function (quantia) {
  this.valor -= quantia;
}

function Camiseta(nome, valor, cor) {
  Produto.call(this, nome, valor);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, valor, material, estoque) {
  Produto.call(this, nome, valor);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra na tela
    configurable: false, //não pode sobreescrever
    get: function(){
     return estoque
    },

    set: function (valor) {
      if(typeof valor !== 'number') return;
      estoque = valor;
    }

  });
}




const camiseta = new Camiseta('Polo', 29.90, 'Preta');
const gen = new Produto('Generico', 10);
const caneca = new Caneca('Corithians', 5.99, 'Plástico', 10)
console.log(camiseta);
console.log(gen);
console.log(caneca);
console.log(caneca.estoque);