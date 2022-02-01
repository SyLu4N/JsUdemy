function Produto(nome, preco, estoque) {
  this.name = nome;
  this.preco = preco;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor
    writable: false, //podemos alterar o valor? TRUE SIM / FALSE NAO
    configurable: false //configurável ou não
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: estoque, //valor
      writable: false, //podemos alterar o valor? TRUE SIM / FALSE NAO
      configurable: false //configurável ou não
    },

    preco: {
      enumerable: true, //mostra a chave
      value: estoque, //valor
      writable: false, //podemos alterar o valor? TRUE SIM / FALSE NAO
      configurable: false //configurável ou não
    },

  });
}
const shampooLeft = new Produto('Shampoo Left', 29.90, 10);
