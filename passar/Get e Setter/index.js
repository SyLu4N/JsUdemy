function Produto(nome, preco, estoque) {
  this.name = nome;
  this.preco = preco;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    configurable: false, //configurável ou não
    get: function () {
      return estoque;
    },

    set: function(valor) {
      if(typeof valor !== 'number'){
        throw new TypeError('Valor Inválido!');
        return;
      }

      estoque = valor;
    }
  });
}

  const p1 = new Produto('Shampoo', 29.90);
  /* console.log(p1); */
  p1.estoque = 12;
  console.log(p1.estoque);
